import datetime as dt
from multiprocessing import Process

from flask_script import Manager

from app import consumer, create_app, db
from app.main.kafka_consumer import read
from app.models import (Aglomachine, AglomachineData, Bearing, BearingData,
                        Eksgauster, EksgausterData)

app = create_app()


@app.shell_context_processor
def make_shell_context():
    return {'db': db}

