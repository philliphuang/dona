from app import db
from datetime import datetime
from uuid import uuid4
from sqlalchemy.dialects.postgresql import JSONB, UUID

class Merchant(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	public_key = db.Column(db.String(64))
	donation_configs = db.Column(JSONB)
	created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Recipient(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	public_key = db.Column(db.String(64))
	name = db.Column(db.String(300))
	description = db.Column(db.String(1000))
	created_at = db.Column(db.DateTime, default=datetime.utcnow)

	def to_dict(self):
		data = {
			'public_key': self.public_key,
			'name': self.name,
			'description': self.description,
		}

		return data

class SplitTransactionRequest(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	uuid = db.Column(UUID(as_uuid=True), default=uuid4)
	spl_token = db.Column(db.String(64))
	recipient_public_key = db.Column(db.String(64))
	merchant_public_key = db.Column(db.String(64))
	merchant_amount = db.Column(db.Integer)
	recipient_amount = db.Column(db.Integer)
	reference = db.Column(db.String(64))
	created_at = db.Column(db.DateTime, default=datetime.utcnow)

class MarkedDonation(db.Model):
	id = db.Column(db.BigInteger, primary_key=True)
	uuid = db.Column(UUID(as_uuid=True), default=uuid4)
	reference = db.Column(db.String(64))
	merchant_transaction_id = db.Column(db.String(64))
	donation_type = db.Column(db.String(64))
	donation_amount = db.Column(db.Integer)
	purchase_total = db.Column(db.Integer)
	transaction_total = db.Column(db.Integer)
	merchant_public_key = db.Column(db.String(64))
	consumer_public_key = db.Column(db.String(64))
	recipient_public_key = db.Column(db.String(64))
	logged_at = db.Column(db.DateTime, default=datetime.utcnow)

	def to_dict(self):
		return {c.name: str(getattr(self, c.name)) for c in self.__table__.columns if c.name != "id"}
