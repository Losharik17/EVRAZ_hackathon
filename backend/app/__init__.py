import logging
import os
from logging.handlers import RotatingFileHandler, SMTPHandler

from flask import Flask
from flask_admin import Admin
from flask_babelex import Babel as BabelEx
from flask_ckeditor import CKEditor
from flask_cors import CORS
from flask_json import FlaskJSON
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO

from config import Config

db = SQLAlchemy()
migrate = Migrate()
json = FlaskJSON()
ckeditor = CKEditor()
babel_ex = BabelEx()
cors = CORS()
socketio = SocketIO(cors_allowed_origins='*')
admin = Admin(name='Сайт Кафедры', template_mode='bootstrap4',
              url='/admin_panel')


def create_app(config_class=Config):
    app = Flask(__name__, static_url_path='/static',
                template_folder='templates',
                static_folder='static')

    app.config.from_object(config_class)
    db.init_app(app)
    migrate.init_app(app, db, render_as_batch=True)
    json.init_app(app)
    ckeditor.init_app(app)
    babel_ex.init_app(app)
    cors.init_app(app)
    admin.init_app(app)
    socketio.init_app(app)

    from app.errors import bp as errors_bp
    app.register_blueprint(errors_bp)

    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    # from app.admin_panel import bp as admin_panel_bp
    # app.register_blueprint(admin_panel_bp, url_prefix='/admin_panel')

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    if not app.debug and not app.testing:
        if not os.path.exists('logs'):
            os.mkdir('logs')
        file_handler = RotatingFileHandler('logs/main.log',
                                           maxBytes=10240, backupCount=10)
        file_handler.setFormatter(logging.Formatter(
            '\n%(asctime)s %(levelname)s: %(message)s '
            '[in %(pathname)s:%(lineno)d]'))
        file_handler.setLevel(logging.INFO)
        app.logger.addHandler(file_handler)

        app.logger.setLevel(logging.INFO)
        app.logger.info('App started')

    return app


from app import models
