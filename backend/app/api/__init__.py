from flask import Blueprint
from flask_restful import Api

bp = Blueprint('api', __name__)
api = Api()
api.init_app(bp)

from app.api import routes
