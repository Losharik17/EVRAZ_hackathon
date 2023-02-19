from flask import jsonify
from flask_socketio import Namespace, emit, send
from app.main import bp
from app.main.test_json import eksgauster_to_json, read_to_db
from app.main.kafka_consumer import read
from multiprocessing import current_process
from multiprocessing import Process
from app.main.kafka_consumer import read
import datetime as dt
from flask import current_app
import app
from app.models import (Eksgauster, Bearing, Aglomachine, AglomachineData,
                        BearingData, EksgausterData)
from app import create_app

@bp.route('/123', methods=['GET'])
def test():
    read()
    # process = Process(target=read, daemon=True)
    # process.start()
    # eksgauster_to_json()
    return jsonify({'status': 'ok'})


