import datetime as dt
import json

from app.models import *


def read_to_db():
    with open('app/main/example_kafka.json') as json_file:
        messages = json.load(json_file)

    key = 'SM_Exgauster\\[{}]'

    for message in messages:
        message = message['Message']
        date = dt.datetime.strptime(message['moment'], '%Y-%m-%dT%H:%M:%S.%f')

        for aglomachine in Aglomachine.query.all():
            aglomachine_mapping = aglomachine.mapping
            aglomachine_data = {}

            for field in aglomachine_mapping.__table__.columns:
                if field.name in aglomachine_mapping.excluded_fields:
                    continue
                aglomachine_data[field.name] = \
                    message.get(key.format(
                        getattr(aglomachine_mapping, field.name)
                    ), None)

            data = AglomachineData(**aglomachine_data,
                                   added_at=date,
                                   aglomachine_id=aglomachine.id)
            db.session.add(data)
            db.session.commit()
            del data, aglomachine_data, aglomachine_mapping

            for eksgauster in aglomachine.eksgausters:
                eksgauster_mapping = eksgauster.mapping
                eksgauster_data = {}

                for field in eksgauster_mapping.__table__.columns:
                    if field.name in eksgauster_mapping.excluded_fields:
                        continue

                    eksgauster_data[field.name] = \
                        message.get(key.format(
                            getattr(eksgauster_mapping, field.name)
                        ), None)

                data = EksgausterData(**eksgauster_data,
                                      added_at=date,
                                      eksgauster_id=eksgauster.id)
                db.session.add(data)
                db.session.commit()
                del data, eksgauster_data, eksgauster_mapping

                for bearing in eksgauster.bearings:
                    bearing_mapping = bearing.mapping
                    bearing_data = {}

                    for field in bearing_mapping.__table__.columns:
                        if field.name in bearing_mapping.excluded_fields:
                            continue

                        bearing_data[field.name] = \
                            message.get(key.format(
                                getattr(bearing_mapping, field.name)
                            ), None)

                    data = BearingData(**bearing_data,
                                       added_at=date,
                                       bearing_id=bearing.id)
                    db.session.add(data)
                    db.session.commit()


def eksgauster_to_json():
    Eksgauster.query.get(1).to_dict()