from app import socketio
from flask_socketio import send, emit, Namespace
from app.main import bp
from flask import jsonify
from app.models import EksgausterSchema, Eksgauster, BearingSchema, Bearing


@socketio.on('my_response')
def handle_message(message):
    print(message)
    emit('test_data', message)


@socketio.on('connect')
def test_connect():
    print(5555)


@bp.route('/123')
def test():
    schema = EksgausterSchema(many=True)

    return jsonify(schema.dump(Eksgauster.query.all()))


@bp.route('/be')
def test2():
    schema = BearingSchema(many=True)

    return jsonify(schema.dump(Bearing.query.all()))


# class MyCustomNamespace(Namespace):
#     def on_connect(self):
#         print('connect')
#
#     def on_my_response(self, message):
#         print(message)
#         emit('test_data', message)
#
#
# socketio.on_namespace(MyCustomNamespace('/test'))
