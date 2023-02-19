from functools import lru_cache

from sqlalchemy_mixins import AllFeaturesMixin

from app import db
from app.mapping_models import (AglomachineMapping, BearingMapping,
                                EksgausterMapping)


class AglomachineCriticalValue(db.Model, AllFeaturesMixin):
    """Константы критических значений эксгаустера"""
    # Т.к. для эксгаустеров в разных агломашинах критические значения
    # различаются, привяжем их к конкретной агломашине, что позволит проще
    # масштабироваться в дальнейшем

    id = db.Column(db.Integer, primary_key=True, index=True)
    aglomachine_id = db.Column(db.ForeignKey("aglomachine.id"), unique=True)

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


class Aglomachine(db.Model, AllFeaturesMixin):
    """Агломашина"""

    id = db.Column(db.Integer, primary_key=True, index=True)
    number = db.Column(db.Integer, index=True)
    eksgausters = db.relationship("Eksgauster", backref="aglomachine")
    datas = db.relationship("AglomachineData", backref="aglomachine")

    crit_value = db.relationship(AglomachineCriticalValue,
                                 backref="aglomachine",
                                 uselist=False)

    mapping = db.relationship(AglomachineMapping,
                              backref="aglomachine",
                              uselist=False)

    @property
    def one_to_many_relations(self):
        """Связи таблицы один-ко многим.

        При добавлении новой связи указываем её здесь дополнительно,
        для преобразования в json"""

        return ("datas", "elsgausters")

    def to_dict(self):
        our_dict = {}

        for field in self.__table__.columns:
            our_dict[field.name] = getattr(self, field.name)

        our_dict["datas"] = getattr(self, "datas")[0].to_dict()
        our_dict["eksgausters"] = []
        for eksgausters in self.eksgausters:
            our_dict["eksgausters"].append(eksgausters.to_dict_current())

        return our_dict


class AglomachineData(db.Model, AllFeaturesMixin):
    """Данные агломашины"""
    id = db.Column(db.Integer, primary_key=True, index=True)
    aglomachine_id = db.Column(db.ForeignKey("aglomachine.id"))
    added_at = db.Column(db.DateTime, default=db.func.now())

    vacuum_collector = db.Column(db.Float)
    temperature_collector = db.Column(db.Float)
    speed = db.Column(db.Float)
    work = db.Column(db.Boolean)

    field_titles = {
        "vacuum_collector": "Разрежение в общем коллекторе",
        "temperature_collector": "Температура в общем коллекторе",
        "speed": "Скорость агломашины",
        "work": "Работа агломашины",
    }

    excluded_fields = ("aglomachine_id", )
    def to_dict(self):
        our_dict = {}

        for field in self.__table__.columns:
            if field.name in self.excluded_fields:
                continue
            if field.name == "added_at":
                our_dict[field.name] = getattr(
                    self, field.name
                ).strftime("%Y-%m-%d %H:%M:%S.%f")
                continue
            if field.name not in self.field_titles:
                our_dict[field.name] = getattr(self, field.name)
            else:
                parameter_data = {
                    "value": {
                        "number": getattr(self, field.name),
                    },
                    "title": self.field_titles[field.name]
                }
                our_dict[field.name] = parameter_data

        return our_dict


class Eksgauster(db.Model, AllFeaturesMixin):
    """Эксгаустер"""

    id = db.Column(db.Integer, primary_key=True, index=True)
    name = db.Column(db.String(8))
    aglomachine_id = db.Column(db.ForeignKey("aglomachine.id"))

    # связи к ротору, подшипникам и данным
    rotor = db.relationship("Rotor", backref="eksgauster", uselist=False)
    bearings = db.relationship("Bearing", backref="eksgauster")
    datas = db.relationship("EksgausterData", backref="eksgauster")

    mapping = db.relationship(EksgausterMapping, backref="eksgauster",
                              uselist=False)

    excluded_fields = ("aglomachine_id",)

    @property
    def one_to_one_relations(self):
        """Связи таблицы один-к-одному.

        При добавлении новой связи указываем её здесь дополнительно,
        для преобразования в json"""

        return ("rotor",)

    structure = {
        "bearings": {
            "title": "Подшипники",
            "items": [
                {
                    "title": "ПС 1",
                    "parameters": {
                        "temperature": "Т",
                        "vibration_vertical": "Верт",
                        "vibration_horizontal": "Гориз",
                        "vibration_axial": "Ось"
                    }
                },
                {
                    "title": "ПС 2",
                    "parameters": {
                        "temperature": "Т",
                        "vibration_vertical": "Верт",
                        "vibration_horizontal": "Гориз",
                        "vibration_axial": "Ось"
                    }
                },
                {
                    "title": "ПС 3",
                    "parameters": {
                        "temperature": "Т"
                    }
                },
                {
                    "title": "ПС 4",
                    "parameters": {
                        "temperature": "Т"
                    }
                },
                {
                    "title": "ПС 5",
                    "parameters": {
                        "temperature": "Т"
                    }
                },
                {
                    "title": "ПС 6",
                    "parameters": {
                        "temperature": "Т"
                    }
                },
                {
                    "title": "ПС 7",
                    "parameters": {
                        "temperature": "Т",
                        "vibration_vertical": "Верт",
                        "vibration_horizontal": "Гориз",
                        "vibration_axial": "Ось"
                    }
                },
                {
                    "title": "ПС 8",
                    "parameters": {
                        "temperature": "Т",
                        "vibration_vertical": "Верт",
                        "vibration_horizontal": "Гориз",
                        "vibration_axial": "Ось"
                    }
                },
                {
                    "title": "ПС 9",
                    "parameters": {
                        "temperature": "Т"
                    }
                }
            ]
        },
        "oil": {
            "title": "Маслобак",
            "oil_level": "Уровень масла",
            "oil_pressure": "Уровень масла"
        },
        "oil_pump": {
            "title": "Маслонасос",
            "starting_oil_pump_started": "Запущен пусковой маслонасос эксгаустера",
            "emergency_oil_pump_started": "Запущен аварийный маслонасос эксгаустера"
        },
        "main_drive": {
            "title": "Главный привод",
            "rotor_current": "Ток ротора",
            "rotor_voltage": "Напряжение ротора",
            "stator_current": "Ток статора",
            "stator_voltage": "Напряжение статора",
            "stator_temperature": "Температура статора"
        },
        "cooler": {
            "title": "Охладитель",
            "water_temperature_before": "Температура воды до",
            "water_temperature_after": "Температура воды после",
            "oil_temperature_before": "Температура масла до",
            "oil_temperature_after": "Температура масла после"
        },
        "gas_manifold": {
            "title": "Газовый коллектор",
            "collector_temperature_before": "Коллектор температура до",
            "collector_underpressure_before": "Коллектор давление до"
        },
        "eksgauster_operation": {
            "title": "Эксгаустер",
            "work": "Состояние работы эксгаустера",
            "motor_air_temperature_1": "Температура воздуха двигателя 1",
            "motor_air_temperature_2": "Температура воздуха двигателя 2",
            "motor_air_temperature_3": "Температура воздуха двигателя 3",
            "temperature_front_eksgauster": "Температура перед эксгаустером",
            "vacuum_front_eksgauster": "Разряжение перед эксгаустером"
        }
    }

    def to_dict_current(self):
        our_dict = {}

        for field in self.__table__.columns:
            if field.name not in self.excluded_fields:
                our_dict[field.name] = getattr(self, field.name)

        datas = getattr(self, "datas")[0]

        our_dict["datas"] = datas.to_dict_current()
        our_dict["work"] = {
            "value": {
                "number": datas.work,
            },
            "title": "Работа эксгаустера"
        }

        our_dict["bearings"] = []
        for bearing in self.bearings:
            our_dict["bearings"].append(bearing.to_dict_current())

        our_dict["warnings"] = []
        for bearing in our_dict["bearings"]:
            for parameter in bearing["current"]["parameters"]:
                if parameter["value"]["status"] != "idle":
                    our_dict["warnings"].append(bearing["number"])
                    break

        for relation_name in self.one_to_one_relations:
            our_dict[relation_name] = getattr(self, relation_name).to_dict_current()

        return our_dict

    def to_dict_all_current(self):
        our_dict = {}

        for field in self.__table__.columns:
            if field.name not in self.excluded_fields:
                our_dict[field.name] = getattr(self, field.name)

        our_dict["datas"] = getattr(self, "datas")[0].to_dict_all_current()

        our_dict["bearings"] = {}
        our_dict["warnings"] = {}
        for bearing in self.bearings:
            our_dict["bearings"][bearing.number] = bearing.to_dict_current()
            for parameter in our_dict["bearings"][bearing.number]['current']["parameters"]:
                our_dict["warnings"][bearing.number] = parameter["value"]["status"]
        #
        # for bearing in our_dict["bearings"].values():
        #     print(bearing)
        #     for parameter in bearing["current"]["parameters"]:
        #         if parameter["value"]["status"] != "idle":
        #             our_dict["bearings"]["warnings"].append(bearing["number"])
        #             break

        return our_dict

    def parameter(self):
        ...


class EksgausterData(db.Model, AllFeaturesMixin):
    """Данные эксгаустера"""
    id = db.Column(db.Integer, primary_key=True, index=True)
    eksgauster_id = db.Column(db.ForeignKey("eksgauster.id"))
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
    stator_voltage = db.Column(db.Float)
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
        "oil_level": "Уровень масла",
        "oil_pressure": "Давление масла",
        "starting_oil_pump_started": "Запущен пусковой маслонасос эксгаустера",
        "emergency_oil_pump_started": "Запущен аварийный маслонасос эксгаустера",
        "rotor_current": "Ток ротора, А",
        "rotor_voltage": "Напряжение ротора, кВт",
        "stator_current": "Ток статора, А",
        "stator_voltage": "Напряжение статера, кВи",
        "stator_temperature": "Температура статора, °С",
        "water_temperature_before": "Т, воды до",
        "water_temperature_after": "Т, воды после",
        "oil_temperature_before": "Т, масла до",
        "oil_temperature_after": "Т, масла после",
        "gas_valve_closed": "ЗАКРЫТО задвижка",
        "gas_valve_open": "ОТКРЫТО задвижка",
        "gas_valve_position": "Положение задвижки",
        "collector_temperature_before": "Коллектор, Т до",
        "collector_underpressure_before": "Коллектор, Д до",
        "work": "Состояние работы эксгаустера",
        "motor_air_temperature_1": "Т воздуха двигателя 1",
        "motor_air_temperature_2": "Т воздуха двигателя 2",
        "motor_air_temperature_3": "Т воздуха двигателя 3",
        "temperature_front_eksgauster": "Т, перед эксгаустером",
        "vacuum_front_eksgauster": "Разряжение перед эксгаустером",
    }

    components_on_first_page = {
        "oil": [
            "oil_level",
            "oil_pressure",
        ],
    }

    components = {
        "oil": [
            "oil_level",
            "oil_pressure",
        ],
        "oil_pump": [
            "starting_oil_pump_started",
            "emergency_oil_pump_started",
        ],
        "main_drive": [
            "rotor_current",
            "rotor_voltage",
            "stator_current",
            "stator_voltage",
            "stator_temperature",
        ],
        "cooler": [
            "water_temperature_before",
            "water_temperature_after",
            "oil_temperature_before",
            "oil_temperature_after",
        ],
        "gas_manifold": [
            "collector_temperature_before",
            "collector_underpressure_before",
        ],
        "eksgauster_operation": [
            "work",
            "motor_air_temperature_1",
            "motor_air_temperature_2",
            "motor_air_temperature_3",
            "temperature_front_eksgauster",
            "vacuum_front_eksgauster",
        ],
    }

    excluded_fields = ("gas_valve_open", "gas_valve_closed", "eksgauster_id")

    def get_parameter_status(self, field):
        critical_values_obj = self.eksgauster.aglomachine.crit_value
        crit_fields = [crit_field for crit_field in
                       critical_values_obj.__table__.columns]
        ### проверка

        return "idle"

    def to_dict_current(self):
        our_dict = {}

        for key in self.components_on_first_page.keys():
            our_dict[key] = {}

        critical_values_obj = self.eksgauster.aglomachine.crit_value
        critical_fields = [field.name for field in
                           critical_values_obj.__table__.columns]

        for key, fields in self.components_on_first_page.items():
            for field in fields:
                parameters = {
                    "value": {
                        "number": getattr(self, field),
                    },
                    "title": self.filed_titles[field],
                }
                for critical_field in critical_fields:
                    if field in critical_field:
                        parameters["value"][
                            "status"] = self.get_parameter_status(field)
                our_dict[key][field] = parameters
        return our_dict

    def to_dict_all_current(self):
        our_dict = {}

        for key in self.components.keys():
            our_dict[key] = {}

        critical_values_obj = self.eksgauster.aglomachine.crit_value
        critical_fields = [field.name for field in
                           critical_values_obj.__table__.columns]

        for key, fields in self.components.items():
            for field in fields:
                parameters = {
                    "value": {
                        "number": getattr(self, field),
                    },
                    "title": self.filed_titles[field],
                }
                for critical_field in critical_fields:
                    if field in critical_field:
                        parameters["value"][
                            "status"] = self.get_parameter_status(field)
                        break
                our_dict[key][field] = parameters
        our_dict["gas_valve_position"] = {
            "value": {
                "number": getattr(self, "gas_valve_position")
            },
            "title": self.filed_titles["gas_valve_position"]
        }
        return our_dict


class Rotor(db.Model, AllFeaturesMixin):
    """Ротор"""

    id = db.Column(db.Integer, primary_key=True, index=True)
    number = db.Column(db.String(8))
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    eksgauster_id = db.Column(db.ForeignKey("eksgauster.id"))

    excluded_fields = ("aglomachine_id", "end_date",)

    def to_dict_current(self):
        our_dict = {}

        for field in self.__table__.columns:
            if field.name in self.excluded_fields:
                continue
            if "date" in field.name:
                date = getattr(self, field.name)
                our_dict[field.name] = date.strftime("%Y-%m-%d %H:%M:%S.%f") \
                    if date else None
                continue

            our_dict[field.name] = getattr(self, field.name)

        return our_dict


class Bearing(db.Model, AllFeaturesMixin):
    """Подшипник"""

    id = db.Column(db.Integer, primary_key=True, index=True)
    number = db.Column(db.Integer)
    eksgauster_id = db.Column(db.ForeignKey("eksgauster.id"))

    datas = db.relationship("BearingData", backref="bearing")

    mapping = db.relationship(BearingMapping,
                              backref="bearing",
                              uselist=False)

    excluded_fields = ("eksgauster_id",)

    def to_dict_current(self):
        our_dict = {}

        for field in self.__table__.columns:
            if field not in self.excluded_fields:
                our_dict[field.name] = getattr(self, field.name)

        our_dict["current"] = getattr(self, "datas")[0].to_dict_current()

        return our_dict


class BearingData(db.Model, AllFeaturesMixin):
    """Данные подшипника"""
    id = db.Column(db.Integer, primary_key=True, index=True)
    bearing_id = db.Column(db.ForeignKey("bearing.id"))
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
        "temperature": "Т, °С",
        "vibration_vertical": "В, мм/с",
        "vibration_horizontal": "Г, мм/с",
        "vibration_axial": "О, мм/с",
    }

    def get_parameter_status(self, parameter_name):
        value = getattr(self, parameter_name)
        alarm_max = getattr(self, f"{parameter_name}_alarm_max")
        alarm_min = getattr(self, f"{parameter_name}_alarm_min")
        warning_max = getattr(self, f"{parameter_name}_warning_max")
        warning_min = getattr(self, f"{parameter_name}_warning_min")

        if value and (value >= alarm_max or value <= alarm_min):
            return "critical"
        if value and (value >= warning_max or value <= warning_min):
            return "warning"
        import random
        return random.choice(["idle", "warning", "critical"])

    @property
    def main_fields(self):
        """Значащие поля, остальные являются уставками"""
        return ("temperature", "vibration_vertical", "vibration_horizontal",
                "vibration_axial",)

    @property
    def excluded_fields(self):
        ustavki = ["alarm_max", "alarm_min", "warning_max", "warning_min"]
        fields = ["bearing_id", "id"]

        for field in self.__table__.columns:
            for ustavka in ustavki:
                if ustavka in field.name:
                    fields.append(field.name)
                    break
        return fields

    def to_dict_current(self):
        our_dict = {
            "parameters": []
        }
        excluded_fields = self.excluded_fields

        for field in self.__table__.columns:
            if field.name in excluded_fields:
                continue
            if field.name == "added_at":
                our_dict[field.name] = getattr(
                    self, field.name
                ).strftime("%Y-%m-%d %H:%M:%S.%f")
                continue
            if field.name not in self.fields_title:
                our_dict[field.name] = getattr(self, field.name)
            else:
                if self.bearing.number in [1, 2, 7, 8]:
                    our_dict["parameters"].append({
                        "value": {
                            "number": getattr(self, field.name),
                            "status": self.get_parameter_status(field.name),
                        },
                        "title": self.fields_title[field.name]
                    })
                elif field.name == 'temperature':
                    our_dict["parameters"].append({
                        "value": {
                            "number": getattr(self, field.name),
                            "status": self.get_parameter_status(field.name),
                        },
                        "title": self.fields_title[field.name]
                    })
        return our_dict
