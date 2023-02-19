from app import create_app, db
from multiprocessing import Process
from app.main.kafka_consumer import read
from flask_script import Manager
import datetime as dt
from app import consumer
from app.models import (Eksgauster, Bearing, Aglomachine, AglomachineData,
                        BearingData, EksgausterData)

app = create_app()


@app.shell_context_processor
def make_shell_context():
    return {'db': db}

