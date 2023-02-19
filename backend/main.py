from threading import Thread
from app import create_app, db
from app.main.kafka_consumer import read

app = create_app()


@app.shell_context_processor
def make_shell_context():
    return {'db': db}


# Thread(target=read, args=(app,)).start()
# bus.run()
