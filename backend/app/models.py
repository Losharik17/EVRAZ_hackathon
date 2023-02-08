from dataclasses import dataclass

from app import db


@dataclass
class News(db.Model):
    id: int = db.Column(db.Integer, primary_key=True, index=True)
    title: str = db.Column(db.String(256))
    text: str = db.Column(db.Text)
    date: str = db.Column(db.Date)
    link: str = db.Column(db.String(4096))
    author: str = db.Column(db.String(128))


@dataclass
class Event(db.Model):
    id: int = db.Column(db.Integer, primary_key=True, index=True)
    title: str = db.Column(db.String(256))
    text: str = db.Column(db.Text)
    start_date: str = db.Column(db.Date)
    end_date: str = db.Column(db.Date)
    address: str = db.Column(db.String(256))
    link: str = db.Column(db.String(4096))


@dataclass
class Text(db.Model):
    id = db.Column(db.Integer, primary_key=True, index=True)
    invisible_title = db.Column(db.String(256))
    title: str = db.Column(db.String(256))
    text: str = db.Column(db.Text)
