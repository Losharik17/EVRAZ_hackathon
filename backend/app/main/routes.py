from app import socketio
from flask_socketio import send, emit


@socketio.on('my response')
def handle_message(message):
    print(message)
    send(message)


@socketio.on('connect')
def test_connect():
    print(5555)
    # emit('my response', {'data': 'Connected'})
