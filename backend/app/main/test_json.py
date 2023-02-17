import json
from copy import deepcopy
import datetime as dt


messages = None
with open('example_kafka.json') as json_file:
    messages = json.load(json_file)

kafka_machine_numbers = KMN = [0, 2, 3]
egsgauters_numbers = EGSN = [[3, 4], [1, 2], [5, 6]]
big_bearings = [1, 2, 7, 8]

key = 'SM_Exgauster\\[{}:{}]'
key_point = 'SM_Exgauster\\[{}.{}]'

for message in messages:
    message = message['Message']
    date = dt.datetime.strptime(message['moment'], '%Y-%m-%dT%H:%M:%S.%f')

    for i in range(3):
        eksgauster_1 = {
            'bearing_1': {},
            'bearing_2': {},
            'bearing_3': {},
            'bearing_4': {},
            'bearing_5': {},
            'bearing_6': {},
            'bearing_7': {},
            'bearing_8': {},
            'bearing_9': {},
        }
        eksgauster_2 = deepcopy(eksgauster_1)

        eksgausters = [eksgauster_1, eksgauster_2]

        for j in range(len(big_bearings)):
            # Получаем значения horiz, vert и axis для подшипников 1, 2, 7, 8
            shift = 3 * j
            element = f'bearing_{big_bearings[j]}'

            for k, eksgauster in enumerate(eksgausters):
                start_shift = 0 if k == 0 else 12

                eksgauster[element]['horiz'] = \
                    message[key.format(KMN[i], start_shift + shift)]

                eksgauster[element]['vert'] = \
                    message[key.format(KMN[i], start_shift + 1 + shift)]

                eksgauster[element]['axis'] = \
                    message[key.format(KMN[i], start_shift + 2 + shift)]

        for j in range(0, 9):
            # Получаем значения temperature для всех подшипников
            eksgauster_1[f'bearing_{j + 1}']['temperature'] = \
                message[key.format(KMN[i], 27 + j)]

            # приходится учитывать сдвиг из-за кривой компоновки данных
            shift = 1 if j >= 3 else 0
            eksgauster_2[f'bearing_{j + 1}']['temperature'] = \
                message[key.format(KMN[i], 43 + j + shift)]

        for j, eksgauster in enumerate(eksgausters):
            # Получаем температуры воды и масла
            if j == 0:
                start_shift = 37
                oil_shift = 5
            else:
                start_shift = 53
                oil_shift = 6

            eksgauster['water_temperature_before'] = \
                message[key.format(KMN[i], start_shift)]
            eksgauster['water_temperature_after'] = \
                message[key.format(KMN[i], start_shift + 1)]

            eksgauster['oil_temperature_before'] = \
                message[key.format(KMN[i], start_shift + oil_shift)]
            eksgauster['oil_temperature_after'] = \
                message[key.format(KMN[i], start_shift + oil_shift + 1)]

        for j, eksgauster in enumerate(eksgausters):
            eksgauster['work'] = message[key_point.format(KMN[i], j)]

        identifier_shift = 1 if i == 0 else 2

        for j, eksgauster in enumerate(eksgausters):
            # Получаем уровень и давление масла и состояние задвижки
            if j == 0:
                shift = 0
                gas_shift = 1
            else:
                shift = 7
                gas_shift = 6


            eksgauster['oil_level'] = \
                message[key.format(KMN[i] + identifier_shift, shift)]
            eksgauster['oil_pressure'] = \
                message[key.format(KMN[i] + identifier_shift, shift + 1)]

            eksgauster['gas_valve_position'] = \
                message[key.format(KMN[i] + identifier_shift, 6 + shift)]
            eksgauster['gas_valve_closed'] = \
                message[key_point.format(KMN[i] + identifier_shift, gas_shift)]
            eksgauster['gas_valve_open'] = \
                message[key_point.format(KMN[i] + identifier_shift,
                                         gas_shift + 1)]

    break
