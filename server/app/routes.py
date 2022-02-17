from flask import *
from app import app
from app.models import *
from uuid import uuid1

@app.route('/', methods=["GET"])
def index():
	return "Welcome!"
