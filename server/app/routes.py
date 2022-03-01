from flask import *
from app import app
from app.models import *
from math import ceil
from solana.keypair import Keypair
from urllib.parse import quote

@app.route('/', methods=["GET"])
def index():
	return "Welcome!"

@app.route('/api/merchants/<public_key>/donation-configs', methods=["GET", "PUT"])
def merchant_info(public_key):
	if request.method == "GET":
		print(request.args)

		if public_key is None:
			return {"message": "No public_key provided"}, 400
		merchant = db.session.query(Merchant).filter_by(public_key=public_key).first()

		if merchant is None:
			return {"message": "Merchant does not exist for provided public_key"}, 404

		configs_template = merchant.donation_configs
		if not configs_template:
			return {}, 200

		if 'active_config' in configs_template.keys():
			for option in configs_template['active_config']['options']:
				# Update donation amount, purchase amount, and total amount as necessary
				purchase_amount = request.args.get('purchase_amount')
				if purchase_amount:
					purchase_amount = int(purchase_amount)
					option['purchase_cents'] = purchase_amount

					if option['type'] == 'roundup':
						transaction_amount = ceil(purchase_amount / 100) * 100
						option['transaction_cents'] = transaction_amount
						option['donation_cents'] = transaction_amount - purchase_amount
					elif option['type'] in {'fixed', 'input'}:
						option['transaction_cents'] = purchase_amount + option['donation_cents']

				# Load refreshed recipient object
				recipient = db.session.query(Recipient).filter_by(public_key=option['recipient']['public_key']).first()
				option['recipient'] = recipient.to_dict()

				# Create donation_transfer object
				donation_recipient = option['recipient']['public_key']
				amount = option['donation_cents'] * 0.01
				spl_token = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
				reference = str(Keypair().public_key)
				label = quote('Optional Purchase Donation')
				message = quote('Donation to {}'.format(recipient.name))

				option['donation_transfer'] = {
					'recipient': donation_recipient,
					'amount': amount,
					'spl-token': spl_token,
					'reference': reference,
					'label': label,
					'message': message
				}

				option['donation_transfer']['url'] = \
					'solana:' + donation_recipient \
					+ '?amount=' + str(amount) \
					+ '&spl-token=' + spl_token \
					+ '&label=' + label \
					+ '&message=' + message \
					+ '&reference=' + reference

				# TODO: Load donation_transaction request object

		return configs_template, 200

	elif request.method == "PUT":
		if public_key is None:
			return {"message": "No public_key provided"}, 400

		merchant = db.session.query(Merchant).filter_by(public_key=public_key).first()

		if merchant is None:
			return {"message": "Merchant does not exist for provided public_key"}, 404
		if merchant is not None:
			if request.json.get('donation_configs') is not None:
				merchant.donation_configs = request.json['donation_configs']
				db.session.commit()
				return {}, 200
			else:
				return {"message": "No donation_configs provided"}, 400

@app.route('/api/marked-donations/<uuid>', methods=["GET"])
def get_marked_donation(uuid):
	if request.method == "GET":
		marked_donation = db.session.query(MarkedDonation).filter_by(uuid=uuid).first()
		if marked_donation:
			return jsonify(marked_donation.to_dict()), 200

		return {"message": "Donation with provided uuid not found"}, 404

@app.route('/api/marked-donations', methods=["POST"])
def mark_donation_complete():
	if request.method == "POST":
		body = request.get_json()

		if body:
			merchant_public_key = body.get('merchant_public_key')
			consumer_public_key = body.get('consumer_public_key')
			merchant_transaction_id = body.get('merchant_transaction_id')
			selected_donation_option = body.get('selected_donation_option')

			if merchant_public_key and selected_donation_option:
				marked_donation = MarkedDonation(
					reference=selected_donation_option['donation_transfer']['reference'],
					merchant_transaction_id=merchant_transaction_id,
					donation_type=selected_donation_option['type'],
					donation_amount=selected_donation_option['donation_cents'],
					purchase_total=selected_donation_option['purchase_cents'],
					transaction_total=selected_donation_option['transaction_cents'],
					merchant_public_key=merchant_public_key,
					consumer_public_key=consumer_public_key,
					recipient_public_key=selected_donation_option['recipient']['public_key']
				)
				db.session.add(marked_donation)
				db.session.commit()

				response = jsonify(marked_donation.to_dict())
				response.status_code = 201
				response.headers['Location'] = url_for('get_marked_donation', uuid=marked_donation.uuid)
				return response

			elif not merchant_public_key:
				return {"message": "No merchant_public_key provided"}, 400
			else:
				return {"message": "No selected_donation_option provided"}, 400

		return {"message": "No JSON body provided"}, 400



