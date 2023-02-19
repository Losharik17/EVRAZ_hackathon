import datetime as dt
from flask import jsonify
from flask_restful import Resource, reqparse
from app.models import Aglomachine, Eksgauster, BearingData

# kafka не даёт последние данные, быстрый фикс

otkat = dt.datetime.utcnow() - dt.timedelta(days=5)
minute = dt.timedelta(seconds=30)


class EksgausterCurrentResource(Resource):
    PARSER = reqparse.RequestParser()
    PARSER.add_argument('id', type=int, required=True)

    def get(self, id):
        x = Eksgauster.where(
            id=id,
            datas___added_at__between=(otkat - minute, otkat + minute),
            bearings___datas___added_at__between=(
                otkat - minute, otkat + minute),
        ).all()[0].to_dict_current()

        return jsonify(x)


class EksgausterAllCurrentResource(Resource):
    PARSER = reqparse.RequestParser()
    PARSER.add_argument('id', type=int, required=True)

    def get(self, id):
        x = Eksgauster.where(
            id=id,
            datas___added_at__between=(otkat - minute, otkat + minute),
            bearings___datas___added_at__between=(
                otkat - minute, otkat + minute),
        ).all()[0].to_dict_all_current()

        return jsonify(x)


class AglomachineCurrentResource(Resource):
    PARSER = reqparse.RequestParser()
    PARSER.add_argument('id', type=int, required=True)

    def get(self):
        x1 = Aglomachine.where(
            id=1,
            datas___added_at__between=(otkat - minute, otkat + minute),
            eksgausters___datas___added_at__between=(
                otkat - minute, otkat + minute),
            eksgausters___bearings___datas___added_at__between=(
                otkat - minute, otkat + minute),
        ).all()[0].to_dict()
        x2 = Aglomachine.where(
            id=2,
            datas___added_at__between=(otkat - minute, otkat + minute),
            eksgausters___datas___added_at__between=(
                otkat - minute, otkat + minute),
            eksgausters___bearings___datas___added_at__between=(
                otkat - minute, otkat + minute),
        ).all()[0].to_dict()
        x3 = Aglomachine.where(
            id=3,
            datas___added_at__between=(otkat - minute, otkat + minute),
            eksgausters___datas___added_at__between=(
                otkat - minute, otkat + minute),
            eksgausters___bearings___datas___added_at__between=(
                otkat - minute, otkat + minute),
        ).all()[0].to_dict()

        datas = [x1, x2, x3]
        return jsonify(datas)


class GraphicsResource(Resource):
    PARSER = reqparse.RequestParser()
    PARSER.add_argument('name')
    PARSER.add_argument('parameter')

    def get(self):
        return jsonify(Eksgauster.structure)

    def post(self):
        args = self.PARSER.parse_args()
        param = args['param']
        name = args['param']

        if param:
            return jsonify(BearingData.where(
                added_at__between=(otkat - minute, otkat + minute),
            ))

        return jsonify(Eksgauster.structure)
