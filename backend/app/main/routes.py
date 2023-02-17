from flask import jsonify
from flask_socketio import Namespace, emit, send

from app.main import bp
from app.main.test_json import eksgauster_to_json, read_to_db

# from app.models import (EksgausterSchema, Eksgauster, BearingSchema, Bearing,
#                         AglomachineSchema, Aglomachine)


@bp.route('/123', methods=['GET'])
def test():
    eksgauster_to_json()
    return jsonify({'status': 'ok'})



