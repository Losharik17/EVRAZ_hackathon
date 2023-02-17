from backend.app import socketio
from flask_socketio import send, emit, Namespace
from backend.app.main import bp


# @socketio.on('my_response')
# def handle_message(message):
#     print(message)
#     emit('test_data', message)
#
#
# @socketio.on('connect')
# def test_connect():
#     print(5555)


@bp.route('/123')
def test():
    return '123'


class MyCustomNamespace(Namespace):
    def on_connect(self):
        print('connect')

    def on_my_response(self, message):
        print(message)
        emit('test_data', message)


socketio.on_namespace(MyCustomNamespace('/test'))
