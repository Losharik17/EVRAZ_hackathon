import os

from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))


class Config(object):
    username = 'postgres'
    password = 'tMAwHWP54qPQJ6ha'
    database = 'EVRAZ_hackathon'

    SQLALCHEMY_ECHO = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or (
        f"postgresql://{username}:{password}@localhost:5432/{database}"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    LOG_TO_STDOUT = os.environ.get('LOG_TO_STDOUT')
    FLASK_ADMIN_SWATCH = 'LUX'
    BABEL_DEFAULT_LOCALE = 'ru'
    CKEDITOR_LANGUAGE = 'ru'
