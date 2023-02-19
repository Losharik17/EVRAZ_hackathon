import datetime as dt
import json
from math import ceil

from flask import jsonify, make_response
from flask_restful import Resource, reqparse
from sqlalchemy import or_

from app import db
from app.models import (Aglomachine, AglomachineData, Bearing, BearingData,
                        Eksgauster, EksgausterData)


class EksgausterCurrentResource(Resource):
    PARSER = reqparse.RequestParser()

    def get(self):
        self.PARSER.add_argument('id', type=int, required=True,
                                 location='args')
        date = dt.datetime.strptime('2023-01-25 22:29:25.125007',
                                    '%Y-%m-%d %H:%M:%S.%f')
        minute = dt.timedelta(seconds=29)

        x = Eksgauster.where(
            id=1,
            datas___added_at__between=(date - minute, date + minute),
            bearings___datas___added_at__between=(date - minute, date + minute),
        ).all()[0].to_dict_current()

        return jsonify(x)


class EksgausterAllCurrentResource(Resource):
    PARSER = reqparse.RequestParser()

    def get(self):
        self.PARSER.add_argument('id', type=int, required=True,
                                 location='args')
        date = dt.datetime.strptime('2023-01-25 22:29:25.125007',
                                    '%Y-%m-%d %H:%M:%S.%f')
        minute = dt.timedelta(seconds=29)

        x = Eksgauster.where(
            id=1,
            datas___added_at__between=(date - minute, date + minute),
            bearings___datas___added_at__between=(date - minute, date + minute),
        ).all()[0].to_dict_all_current()

        return jsonify(x)


class AglomachineCurrentResource(Resource):
    PARSER = reqparse.RequestParser()

    def get(self):
        self.PARSER.add_argument('id', type=int, required=True,
                                 location='args')
        try:
            # args = self.PARSER.parse_args()
            # id = args['id']
            # start_date = args['start_date']
            # end_date = args['end_date']
            ...

        except:
            return make_response(
                jsonify({'message': 'the `id` argument is not specified'}),
                406)

        date = dt.datetime.strptime('2023-01-25 22:29:25.125007',
                                    '%Y-%m-%d %H:%M:%S.%f')
        minute = dt.timedelta(seconds=29)

        data = Aglomachine.where(
            datas___added_at__between=(date - minute, date + minute),
            eksgausters___bearings___datas___added_at__between=(date - minute, date + minute),
            eksgausters___datas___added_at__between=(date - minute, date + minute),
            id=1
        ).all()[0].to_dict()

        return jsonify(data)


class GraphicsResource(Resource):
    PARSER = reqparse.RequestParser()

    def get(self):
        self.PARSER.add_argument('id', type=int, required=True,
                                 location='args')
        try:
            # args = self.PARSER.parse_args()
            # id = args['id']
            # start_date = args['start_date']
            # end_date = args['end_date']
            ...

        except:
            return make_response(
                jsonify({'message': 'the `id` argument is not specified'}),
                406)

        date = dt.datetime.strptime('2023-01-25 22:29:25.125007',
                                    '%Y-%m-%d %H:%M:%S.%f')
        minute = dt.timedelta(seconds=29)

        data = Aglomachine.where(
            datas___added_at__between=(date - minute, date + minute),
            eksgausters___bearings___datas___added_at__between=(date - minute, date + minute),
            eksgausters___datas___added_at__between=(date - minute, date + minute),
            id=1
        ).all()[0].to_dict()

        return jsonify(data)

