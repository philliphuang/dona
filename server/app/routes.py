from flask import *
from app import app
from app.models import *
from math import ceil

@app.route('/', methods=["GET"])
def index():
	return "Welcome!"

@app.route('/api/merchants/<public_key>/donation-configs', methods=["GET", "PUT"])
def merchant_info(public_key):
	if request.method == "GET":
		if public_key is None:
			return {"message": "No public_key provided"}, 400
		merchant = db.session.query(Merchant).filter_by(public_key=public_key).first()

		if merchant is None:
			return {"message": "Merchant does not exist for provided public_key"}, 404

		configs_template = merchant.donation_configs
		request_json = request.get_json()

		for option in configs_template['active_config']['options']:
			# Update donation amount, purchase amount, and total amount as necessary
			if request_json:
				purchase_amount = request_json.get('purchase_amount')
				if purchase_amount and option['type'] == 'roundup':
					option['purchase_cents'] = purchase_amount
					transaction_amount = ceil(purchase_amount/ 100) * 100
					option['transaction_cents'] = transaction_amount
					option['donation_cents'] = transaction_amount - purchase_amount
				elif purchase_amount and option['type'] in set({'fixed', 'input'}):
					option['purchase_cents'] = purchase_amount
					option['transaction_cents'] = purchase_amount + option['donation_cents']

			# Load refreshed recipient object
			recipient = db.session.query(Recipient).filter_by(public_key=option['recipient']['public_key']).first()
			option['recipient'] = recipient.to_dict()

			# TODO: Populate donation_transfer object

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
