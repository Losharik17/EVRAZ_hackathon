from flask import current_app, jsonify

from app.main import bp
from app.main.kafka_consumer import read


@bp.route('/123', methods=['GET'])
def test():
    return jsonify({'status': 'ok'})


