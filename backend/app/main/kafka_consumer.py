import datetime as dt
import json
import time

from kafka import KafkaConsumer

from app import create_app
from app.models import *


def read():
    consumer = KafkaConsumer(
        'zsmk-9433-dev-01',
        group_id='WhyCrocodile',
        api_version='1.0',
        sasl_kerberos_service_name='WhyCrocodile',
        bootstrap_servers='rc1a-2ar1hqnl386tvq7k.mdb.yandexcloud.net:9091',
        security_protocol='SASL_SSL',
        ssl_cafile='app/CA.pem',
        sasl_mechanism='SCRAM-SHA-512',
        sasl_plain_username='9433_reader',
        sasl_plain_password='eUIpgWu0PWTJaTrjhjQD3.hoyhntiK',
        value_deserializer=lambda m: json.loads(m.decode('ascii')),
        auto_offset_reset='earliest',
        enable_auto_commit=True,
    )
    key = 'SM_Exgauster\\[{}]'
    print("Consumer started")
    for m in consumer:
        message = m.value
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

# read()
from multiprocessing import Process, current_process

# process = Process(target=read, daemon=True)
# process.start()
# process.join()
# read()
