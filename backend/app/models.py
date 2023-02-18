from functools import lru_cache
from sqlalchemy_mixins import AllFeaturesMixin
from app import db
from app.mapping_models import (AglomachineMapping, BearingMapping,
                                EksgausterMapping)


class Aglomachine(db.Model, AllFeaturesMixin):
    """Агломашина"""

    id = db.Column(db.Integer, primary_key=True, index=True)
    number = db.Column(db.Integer, index=True)
    eksgausters = db.relationship('Eksgauster', backref='aglomachine')
    datas = db.relationship('AglomachineData', backref='aglomachine')

    critical_values = db.relationship('AglomachineCriticalValue',
                                      backref="aglomachine",
                                      uselist=False)

    mapping = db.relationship(AglomachineMapping,
                              backref="aglomachine",
                              uselist=False)


class AglomachineData(db.Model, AllFeaturesMixin):
    """Данные агломашины"""
    id = db.Column(db.Integer, primary_key=True, index=True)
    aglomachine_id = db.Column(db.ForeignKey('aglomachine.id'))
    added_at = db.Column(db.DateTime, default=db.func.now())

    vacuum_collector = db.Column(db.Float)
    temperature_collector = db.Column(db.Float)
    speed = db.Column(db.Float)
    work = db.Column(db.Boolean)


class Eksgauster(db.Model, AllFeaturesMixin):
    """Эксгаустер"""

    id = db.Column(db.Integer, primary_key=True, index=True)
    name = db.Column(db.String(8))
    aglomachine_id = db.Column(db.ForeignKey('aglomachine.id'))

    # связи к ротору, подшипникам и данным
    rotor = db.relationship("Rotor", backref="eksgauster", uselist=False)
    bearings = db.relationship('Bearing', backref='eksgauster')
    datas = db.relationship('EksgausterData', backref='eksgauster')

    mapping = db.relationship(EksgausterMapping, backref="eksgauster",
                              uselist=False)

    @property
    def one_to_many_relations(self):
        """Связи таблицы один-ко многим.

        При добавлении новой связи указываем её здесь дополнительно,
        для преобразования в json"""

        return ('bearings', 'datas')

    @property
    def one_to_one_relations(self):
        """Связи таблицы один-к-одному.

        При добавлении новой связи указываем её здесь дополнительно,
        для преобразования в json"""

        return ('rotor',)

    def to_dict(self):
        our_dict = {}

        for field in self.__table__.columns:
            our_dict[field.name] = str(getattr(self, field.name))

        for relation_name in self.one_to_many_relations:
            our_dict[relation_name] = []
            for element in getattr(self, relation_name):
                our_dict[relation_name].append(element.to_dict())

        for relation_name in self.one_to_one_relations:
            our_dict[relation_name] = getattr(self, relation_name).to_dict()

        # print(our_dict)
        return our_dict


class AglomachineCriticalValue(db.Model, AllFeaturesMixin):
    """Константы критических значений эксгаустера"""
    # Т.к. для эксгаустеров в разных агломашинах критические значения
    # различаются, привяжем их к конкретной агломашине, что позволит проще
    # масштабироваться в дальнейшем

    id = db.Column(db.Integer, primary_key=True, index=True)
    aglomachine_id = db.Column(db.ForeignKey('aglomachine.id'), unique=True)

    # Маслосистема
    oil_level_alarm_min = db.Column(db.Integer)
    oil_level_warning_min = db.Column(db.Integer)

    oil_pressure_alarm_min = db.Column(db.Float)

    # Главный привод
    rotor_current_warning_max = db.Column(db.Float)

    stator_current_alarm_max = db.Column(db.Float)
    stator_current_warning_max = db.Column(db.Float)

    # Охладитель
    water_temperature_before_warning_max = db.Column(db.Float)
    water_temperature_after_warning_max = db.Column(db.Float)

    oil_temperature_before_warning_max = db.Column(db.Float)
    oil_temperature_after_warning_max = db.Column(db.Float)


    def check_status(self):
        return 'ok'


class EksgausterData(db.Model, AllFeaturesMixin):
    """Данные эксгаустера"""
    id = db.Column(db.Integer, primary_key=True, index=True)
    eksgauster_id = db.Column(db.ForeignKey('eksgauster.id'))
    added_at = db.Column(db.DateTime, default=db.func.now())

    # Маслосистема
    oil_level = db.Column(db.Float)
    oil_pressure = db.Column(db.Float)
    starting_oil_pump_started = db.Column(db.Boolean)
    emergency_oil_pump_started = db.Column(db.Boolean)

    # Главный привод
    rotor_current = db.Column(db.Float)
    rotor_voltage = db.Column(db.Float)
    stator_current = db.Column(db.Float)
    starter_voltage = db.Column(db.Float)
    stator_temperature = db.Column(db.Float)

    # Охладитель
    water_temperature_before = db.Column(db.Float)
    water_temperature_after = db.Column(db.Float)
    oil_temperature_before = db.Column(db.Float)
    oil_temperature_after = db.Column(db.Float)

    # Положение задвижки
    gas_valve_closed = db.Column(db.Boolean)
    gas_valve_open = db.Column(db.Boolean)
    gas_valve_position = db.Column(db.Float)

    # Газовый коллектор
    collector_temperature_before = db.Column(db.Float)
    collector_underpressure_before = db.Column(db.Float)

    # Работа эксгаустера
    work = db.Column(db.Boolean)
    motor_air_temperature_1 = db.Column(db.Float)
    motor_air_temperature_2 = db.Column(db.Float)
    motor_air_temperature_3 = db.Column(db.Float)
    temperature_front_eksgauster = db.Column(db.Float)
    vacuum_front_eksgauster = db.Column(db.Float)

    filed_titles = {
        'oil_level': 'Уровень масла',
        'oil_pressure': 'Давление масла',
        'starting_oil_pump_started': 'Запущен пусковой маслонасос эксгаустера',
        'emergency_oil_pump_started': 'Запущен аварийный маслонасос эксгаустера',
        'rotor_current': 'Ток ротора',
        'rotor_voltage': 'Напряжение ротора',
        'stator_current': 'Ток статора',
        'starter_voltage': 'Напряжение статора',
        'stator_temperature': 'Температура статора',
        'water_temperature_before': 'Температура воды до',
        'water_temperature_after': 'Температура воды после',
        'oil_temperature_before': 'Температура масла до',
        'oil_temperature_after': 'Температура масла после',
        'gas_valve_closed': 'ЗАКРЫТО задвижка',
        'gas_valve_open': 'ОТКРЫТО задвижка',
        'gas_valve_position': 'Положение задвижки',
        'collector_temperature_before': 'Коллектор температуры до',
        'collector_underpressure_before': 'Коллектор давление до',
        'work': 'Состояние работы эксгаустера',
        'motor_air_temperature_1': 'Температура воздуха двигателя 1',
        'motor_air_temperature_2': 'Температура воздуха двигателя 2',
        'motor_air_temperature_3': 'Температура воздуха двигателя 3',
        'temperature_front_eksgauster': 'Температура перед эксгаустером',
        'vacuum_front_eksgauster': 'Разряжение перед эксгаустером',
    }

    components = {
        'Маслосистема': [
            'oil_level',
            'oil_pressure',
            'starting_oil_pump_started',
            'emergency_oil_pump_started',
        ],
        'Главный привод': [
            'rotor_current',
            'rotor_voltage',
            'stator_current',
            'starter_voltage',
            'stator_temperature',
        ],
        'Охладитель': [
            'water_temperature_before',
            'water_temperature_after',
            'oil_temperature_before',
            'oil_temperature_after',
        ],
        'Газовый коллектор': [
            'collector_temperature_before',
            'collector_underpressure_before',
        ],
        'Работа эксгаустера': [
            'work',
            'motor_air_temperature_1',
            'motor_air_temperature_2',
            'motor_air_temperature_3',
            'temperature_front_eksgauster',
            'vacuum_front_eksgauster',
        ],
    }

    def to_dict(self):
        our_dict = {}
        for key in self.components.keys():
            our_dict[key] = {}

        critical_values_obj = self.eksgauster.aglomachine.critical_values

        for field in self.__table__.columns:
            if field.name not in self.filed_titles:
                our_dict[field.name] = str(getattr(self, field.name))
            else:
                added = False

                status = {}
                for critical_value in critical_values_obj.__table__.columns:
                    if field.name in critical_value.name:
                        status = {
                            'status': critical_values_obj.check_status(
                                field.name,
                                getattr(self, field.name)
                            ),
                        }

                for key in self.components.keys():
                    if field.name in self.components[key]:
                        our_dict[key].update({
                            'value': {
                                'number': str(getattr(self, field.name)),
                            },
                            'title': self.filed_titles[field.name]
                        })

                        if status:
                            our_dict[key]['value'].update(status)

                        added = True
                        break

                if not added:
                    our_dict[field.name] = {
                        'value': {
                            'number': str(getattr(self, field.name)),
                        },
                        'title': self.filed_titles[field.name]
                    }

                    if status:
                        our_dict[field.name]['value'].update(status)
        return our_dict


class Rotor(db.Model, AllFeaturesMixin):
    """Ротор"""

    id = db.Column(db.Integer, primary_key=True, index=True)
    rotor_number = db.Column(db.String(4))
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    eksgauster_id = db.Column(db.ForeignKey('eksgauster.id'))

    def to_dict(self):
        our_dict = {}

        for field in self.__table__.columns:
            our_dict[field.name] = str(getattr(self, field.name))

        return our_dict


class Bearing(db.Model, AllFeaturesMixin):
    """Подшипник"""

    id = db.Column(db.Integer, primary_key=True, index=True)
    number = db.Column(db.Integer)
    eksgauster_id = db.Column(db.ForeignKey('eksgauster.id'))

    datas = db.relationship('BearingData', backref='bearing')

    mapping = db.relationship(BearingMapping,
                              backref="bearing",
                              uselist=False)

    @property
    def one_to_many_relations(self):
        return ('datas',)

    def to_dict(self):
        our_dict = {}

        for field in self.__table__.columns:
            our_dict[field.name] = getattr(self, field.name)

        for relation_name in self.one_to_many_relations:
            our_dict[relation_name] = []
            for element in getattr(self, relation_name):
                our_dict[relation_name].append(element.to_dict())

        return our_dict


class BearingData(db.Model, AllFeaturesMixin):
    """Данные подшипника"""
    id = db.Column(db.Integer, primary_key=True, index=True)
    bearing_id = db.Column(db.ForeignKey('bearing.id'))
    added_at = db.Column(db.DateTime, default=db.func.now())

    # Температура
    temperature = db.Column(db.Float)
    temperature_alarm_max = db.Column(db.Float)
    temperature_alarm_min = db.Column(db.Float)
    temperature_warning_max = db.Column(db.Float)
    temperature_warning_min = db.Column(db.Float)

    # Вертикальная вибрация
    vibration_vertical = db.Column(db.Float)
    vibration_vertical_alarm_max = db.Column(db.Float)
    vibration_vertical_alarm_min = db.Column(db.Float)
    vibration_vertical_warning_max = db.Column(db.Float)
    vibration_vertical_warning_min = db.Column(db.Float)

    # Горизонтальная вибрация
    vibration_horizontal = db.Column(db.Float)
    vibration_horizontal_alarm_max = db.Column(db.Float)
    vibration_horizontal_alarm_min = db.Column(db.Float)
    vibration_horizontal_warning_max = db.Column(db.Float)
    vibration_horizontal_warning_min = db.Column(db.Float)

    # Осевая вибрация
    vibration_axial = db.Column(db.Float)
    vibration_axial_alarm_max = db.Column(db.Float)
    vibration_axial_alarm_min = db.Column(db.Float)
    vibration_axial_warning_max = db.Column(db.Float)
    vibration_axial_warning_min = db.Column(db.Float)

    fields_title = {
        'temperature': 'Т',
        'vibration_vertical': 'Верт',
        'vibration_horizontal': 'Гориз',
        'vibration_axial': 'Ось',
    }

    alarm_max_values = {
        'temperature': 75
    }

    alarm_min_values = {

    }

    warning_max_values = {
        'temperature': 65
    }

    warning_min_values = {

    }

    def get_parameter_status(self, parameter_name):
        value = getattr(self, parameter_name)
        alarm_max = getattr(self, f'{parameter_name}_alarm_max')
        alarm_min = getattr(self, f'{parameter_name}_alarm_min')
        warning_max = getattr(self, f'{parameter_name}_warning_max')
        warning_min = getattr(self, f'{parameter_name}_warning_min')

        if value and (value >= alarm_max or value <= alarm_min):
            return 'alarm'
        if value and (value >= warning_max or value <= warning_min):
            return 'warning'
        return 'ok'

    @property
    def main_fields(self):
        """Значащие поля, остальные являются уставками"""
        return ('temperature', 'vibration_vertical', 'vibration_horizontal',
                'vibration_axial',)

    @property
    def excluded_fields(self):
        ustavki = ['alarm_max', 'alarm_min', 'warning_max', 'warning_min']
        fields = []

        for field in self.__table__.columns:
            for ustavka in ustavki:
                if ustavka in field.name:
                    fields.append(field.name)
                    break
        return fields

    def to_dict(self):
        our_dict = {
            'parameters': []
        }
        excluded_fields = self.excluded_fields

        for field in self.__table__.columns:
            if field.name in excluded_fields:
                continue
            if field.name not in self.fields_title:
                our_dict[field.name] = str(getattr(self, field.name))
            else:
                our_dict['parameters'].append({
                    'value': {
                        'number': str(getattr(self, field.name)),
                        'status': self.get_parameter_status(field.name),
                    },
                    'title': self.fields_title[field.name]
                })

        return our_dict

# class RotorSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Rotor
#
#
# class BearingDataSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = BearingData
#
#
# class BearingSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Bearing
#         exclude = ('id',)
#
#     datas = ma.Nested(BearingDataSchema, many=True)
#
#
# class EksgausterDataSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = EksgausterData
#
#
# class EksgausterSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Eksgauster
#
#     bearings = ma.Nested(BearingSchema, many=True)
#     datas = ma.Nested(EksgausterDataSchema, many=True)
#     rotor = ma.Nested(RotorSchema)
#
#
# class AglomachineSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Aglomachine
#
#     eksgausters = ma.Nested(EksgausterSchema, many=True)
