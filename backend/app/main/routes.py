from flask import current_app, jsonify
from app.main.kafka_consumer import read
from app.main import bp


@bp.route('/start', methods=['GET'])
def test():
    return jsonify({'status': 'ok'})
