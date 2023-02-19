from app.models import BearingData, Bearing
from app import create_app
import datetime as dt
import numpy as np
from statistics import median

dat = dt.datetime.now()


def Algorithm():
    with create_app().app_context():
        for eksgauter_id in range(1, 7):
            data = Bearing.where(
                number=7,
                eksgauster_id=eksgauter_id
            ).all()[0]
            all_data = BearingData.where(
                added_at__between=(dat - dt.timedelta(days=21), dat),
                bearing_id=data.id
            ).all()
            day_data = BearingData.where(
                added_at__between=(dat - dt.timedelta(days=7), dat),
                bearing_id=data.id
            ).all()
            all_axis_list = []
            for all in all_data:
                if all.vibration_axial is not None: all_axis_list.append(all.vibration_axial)
            day_axis_list = []
            for day in day_data:
                if day.vibration_axial is not None: day_axis_list.append(day.vibration_axial)
            if np.var(day_axis_list) > np.var(all_axis_list):
                print('Пора заменить')
            else:
                print('Оптимально')

Algorithm()