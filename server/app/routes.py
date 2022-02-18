from flask import *
from app import app
from app.models import *
from uuid import uuid1

@app.route('/', methods=["GET"])
def index():
	return "Welcome!"

@app.route('/api/merchants/<merchant_id>/donation-configs', methods=["GET", "PUT"])
def user_info(merchant_id):
	if request.method == "GET":
		if merchant_id is None:
			return {"message": "No merchant_id provided"}, 400
		merchant = db.session.query(Merchant).filter_by(merchant_id=merchant_id).first()

		if merchant is None:
			return {"message": "Merchant does not exist for provided merchant_id"}, 404
		if merchant is not None:
			return merchant.donation_configs, 200

	elif request.method == "PUT":
		if merchant_id is None:
			return {"message": "No merchant_id provided"}, 400

		merchant = db.session.query(Merchant).filter_by(merchant_id=merchant_id).first()

		if merchant is None:
			return {"message": "Merchant does not exist for provided merchant_id"}, 404
		if merchant is not None:
			if request.json.get('donation_configs') is not None:
				merchant.donation_configs = request.json['donation_configs']
				db.session.commit()
				return {}, 200
			else:
				return {"message": "No donation_configs provided"}, 400
