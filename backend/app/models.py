from dataclasses import dataclass

from app import db


@dataclass
class Data(db.Model):
    id: int = db.Column(db.Integer, primary_key=True, index=True)
