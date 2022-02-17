from os import environ
env = environ.get('FLASK_ENV')
import logging
from flask import Flask, Response
from flask_migrate import Migrate
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from flask import request, make_response, redirect, g

# Check env variable for which configuration to load
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
app.config['JSON_SORT_KEYS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db, render_as_batch=True)

from app import routes, models