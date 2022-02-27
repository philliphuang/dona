from app import db
from datetime import datetime
from uuid import uuid4
from sqlalchemy.dialects.postgresql import JSONB, UUID

class Merchant(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	public_key = db.Column(db.String(64))
	donation_configs = db.Column(JSONB)

class Recipient(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	public_key = db.Column(db.String(64))
	name = db.Column(db.String(300))
	description = db.Column(db.String(1000))

	def to_dict(self):
		data = {
			'public_key': self.public_key,
			'name': self.name,
			'description': self.description,
		}

		return data