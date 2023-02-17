import datetime as dt
import json
from copy import deepcopy

from kafka import KafkaConsumer
from models import Aglomachine

consumer = KafkaConsumer(
    'zsmk-9433-dev-01',
    group_id='WhyCrocodile',
    api_version='1.0',
    sasl_kerberos_service_name='WhyCrocodile',
    bootstrap_servers='rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091',
    security_protocol='SASL_SSL',
    ssl_cafile='CA.pem',
    sasl_mechanism='SCRAM-SHA-512',
    sasl_plain_username='9433_reader',
    sasl_plain_password='eUIpgWu0PWTJaTrjhjQD3.hoyhntiK',
    value_deserializer=lambda m: json.loads(m.decode('ascii')),
    auto_offset_reset='earliest',
    enable_auto_commit=False,
)

for message in consumer:
    ...
