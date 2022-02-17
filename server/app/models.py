from app import db
from datetime import datetime
from uuid import uuid1
from sqlalchemy.dialects.postgresql import JSONB

class Merchant(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	merchant_id = db.Column(db.String(32), index=True, unique=True) # UUID1
	donation_configs = db.Column(JSONB)