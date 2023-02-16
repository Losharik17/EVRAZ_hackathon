from dataclasses import dataclass

from app import db


@dataclass
class Aglomachine(db.Model):
    """Агломашина"""

    id: int = db.Column(db.Integer, primary_key=True, index=True)
    letter_index = db.Column(db.String(2))
    number = db.Column(db.Integer)
    eksgausters = db.relationship('Eksgauster', backref='aglomachine',
                                  lazy='dynamic')


@dataclass
class Eksgauster(db.Model):
    """Эксгаустер"""

    id: int = db.Column(db.Integer, primary_key=True, index=True)
    number = db.Column(db.Integer)
    aglomachine_id = db.Column(db.ForeignKey('aglomachine.id'))

    # роторы и подшипники
    rotors = db.relationship('Rotor', backref='eksgauster', lazy='dynamic')
    bearings = db.relationship('Bearing', backref='eksgauster', lazy='joined')

    datas = db.relationship('EksgausterData', backref='eksgauster',
                            lazy='dynamic')



@dataclass
class EksgausterData(db.Model):
    """Данные эксгаустера"""
    id: int = db.Column(db.Integer, primary_key=True, index=True)
    eksgauster_id = db.Column(db.ForeignKey('eksgauster.id'))
    added_at = db.Column(db.DateTime, default=db.func.now())

    # Маслобак
    oil_level: int = db.Column(db.Integer)
    oil_pressure: int = db.Column(db.Integer)

    # Главный привод
    amperage: int = db.Column(db.Integer)
    motor_amperage: int = db.Column(db.Integer)
    rotor_voltage: int = db.Column(db.Integer)
    starter_voltage: int = db.Column(db.Integer)

    # Охладитель
    water_temperature_before: int = db.Column(db.Integer)
    water_temperature_after: int = db.Column(db.Integer)
    oil_temperature_before: int = db.Column(db.Integer)
    oil_temperature_after: int = db.Column(db.Integer)




@dataclass
class Rotor(db.Model):
    """Ротор"""

    id: int = db.Column(db.Integer, primary_key=True, index=True)
    eksgauster_id = db.Column(db.ForeignKey('eksgauster.id'))

    datas = db.relationship('RotorData', backref='rotor', lazy='dynamic')



@dataclass
class RotorData(db.Model):
    """Данные ротора"""

    id: int = db.Column(db.Integer, primary_key=True, index=True)
    added_at = db.Column(db.DateTime, default=db.func.now())

    rotor_id = db.Column(db.ForeignKey('rotor.id'))



@dataclass
class Bearing(db.Model):
    """Подшипник"""

    id: int = db.Column(db.Integer, primary_key=True, index=True)
    eksgauster_id = db.Column(db.ForeignKey('eksgauster.id'))

    datas = db.relationship('BearingData', backref='bearing', lazy='dynamic')



@dataclass
class BearingData(db.Model):
    """Данные подшипника"""
    id: int = db.Column(db.Integer, primary_key=True, index=True)
    bearing_id = db.Column(db.ForeignKey('bearing.id'))
    added_at = db.Column(db.DateTime, default=db.func.now())

    temperature: float = db.Column(db.Float)
    vertical: float = db.Column(db.Float)
    horizontal: float = db.Column(db.Float)
    axis: float = db.Column(db.Float)
