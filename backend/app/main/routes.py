from app import socketio
from flask_socketio import send, emit
from app.main import bp


@socketio.on('my_response')
def handle_message(message):
    print(message)
    emit('test_data', message)


@socketio.on('connect')
def test_connect():
    print(5555)


@bp.route('/123')
def test():
    return '123'
