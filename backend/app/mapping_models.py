from app import db


class AglomachineMapping(db.Model):
    """Mapping для данных в Kafka для агломашины

    Т.к. данные в кафке имеют неясную структуру и расположены в разнобой,
    было принято решение создать собственный mapping,
    чтобы упростить добавление новых установок в дальнейшем.

    В полях хранятся значения типа '2:45'"""
    id = db.Column(db.Integer, primary_key=True, index=True)
    aglomachine_id = db.Column(db.ForeignKey('aglomachine.id'), unique=True)

    vacuum_collector = db.Column(db.String(8), unique=True)
    temperature_collector = db.Column(db.String(8), unique=True)
    speed = db.Column(db.String(8), unique=True)
    work = db.Column(db.String(8), unique=True)

    @property
    def excluded_fields(self):
        return ('id', 'aglomachine_id')


class EksgausterMapping(db.Model):
    """Mapping для эксгаустера"""

    id = db.Column(db.Integer, primary_key=True, index=True)
    eksgauster_id = db.Column(db.ForeignKey('eksgauster.id'), unique=True)

    # Маслосистема
    oil_level = db.Column(db.String(8), unique=True)
    oil_pressure = db.Column(db.String(8), unique=True)
    starting_oil_pump_started = db.Column(db.String(8), unique=True)
    emergency_oil_pump_started = db.Column(db.String(8), unique=True)

    # Главный привод
    rotor_current= db.Column(db.String(8), unique=True)
    rotor_voltage = db.Column(db.String(8), unique=True)
    stator_current = db.Column(db.String(8), unique=True)
    starter_voltage = db.Column(db.String(8), unique=True)
    stator_temperature = db.Column(db.String(8), unique=True)

    # Охладитель
    water_temperature_before = db.Column(db.String(8), unique=True)
    water_temperature_after = db.Column(db.String(8), unique=True)
    oil_temperature_before = db.Column(db.String(8), unique=True)
    oil_temperature_after = db.Column(db.String(8), unique=True)

    # Положение задвижки
    gas_valve_closed = db.Column(db.String(8), unique=True)
    gas_valve_open = db.Column(db.String(8), unique=True)
    gas_valve_position = db.Column(db.String(8), unique=True)

    # Газовый коллектор
    collector_temperature_before = db.Column(db.String(8), unique=True)
    collector_underpressure_before = db.Column(db.String(8), unique=True)

    # Работа эксгаустера
    work = db.Column(db.String(8), unique=True)
    motor_air_temperature_1 = db.Column(db.String(8), unique=True)
    motor_air_temperature_2 = db.Column(db.String(8), unique=True)
    motor_air_temperature_3 = db.Column(db.String(8), unique=True)
    temperature_front_eksgauster = db.Column(db.String(8), unique=True)
    vacuum_front_eksgauster = db.Column(db.String(8), unique=True)

    @property
    def excluded_fields(self):
        return ('id', 'eksgauster_id')


class BearingMapping(db.Model):
    """Mapping для подшипника"""

    id = db.Column(db.Integer, primary_key=True, index=True)
    bearing_id = db.Column(db.ForeignKey('bearing.id'), unique=True)

    # Температура
    temperature = db.Column(db.String(8), unique=True)
    temperature_alarm_max = db.Column(db.String(8), unique=True)
    temperature_alarm_min = db.Column(db.String(8), unique=True)
    temperature_warning_max = db.Column(db.String(8), unique=True)
    temperature_warning_min = db.Column(db.String(8), unique=True)

    # Вертикальная вибрация
    vibration_vertical = db.Column(db.String(8), unique=True)
    vibration_vertical_alarm_max = db.Column(db.String(8), unique=True)
    vibration_vertical_alarm_min = db.Column(db.String(8), unique=True)
    vibration_vertical_warning_max = db.Column(db.String(8), unique=True)
    vibration_vertical_warning_min = db.Column(db.String(8), unique=True)

    # Горизонтальная вибрация
    vibration_horizontal = db.Column(db.String(8), unique=True)
    vibration_horizontal_alarm_max = db.Column(db.String(8), unique=True)
    vibration_horizontal_alarm_min = db.Column(db.String(8), unique=True)
    vibration_horizontal_warning_max = db.Column(db.String(8), unique=True)
    vibration_horizontal_warning_min = db.Column(db.String(8), unique=True)

    # Осевая вибрация
    vibration_axial = db.Column(db.String(8), unique=True)
    vibration_axial_alarm_max = db.Column(db.String(8), unique=True)
    vibration_axial_alarm_min = db.Column(db.String(8), unique=True)
    vibration_axial_warning_max = db.Column(db.String(8), unique=True)
    vibration_axial_warning_min = db.Column(db.String(8), unique=True)

    @property
    def excluded_fields(self):
        return ('id', 'bearing_id')
