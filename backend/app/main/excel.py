import pandas as pd
from app.models import EksgausterData, BearingData, Bearing
from app import create_app
from app import db
import datetime as dt

dat = dt.datetime.strptime('2023-01-25 4:31:25.125007',
                           '%Y-%m-%d %H:%M:%S.%f')

with create_app().app_context():
    tags = []
    names = []
    eksgauter_id = 3
    id = 2
    for tag in BearingData.__table__.columns:
        tags.append(tag.name)
    for data in Bearing.where(
            datas___added_at__between=(dat, dat + dt.timedelta(days=23)),
            number=8,
            eksgauster_id = eksgauter_id
    ).all():
        names.append(data)
    index = range(0, BearingData.where(
        added_at__between=(dat, dat + dt.timedelta(days=23)),
        bearing_id=names[0].id
    ).count(), 1)
    multi_iter1 = {'index': index}
    for field in tags:
            multi_iter1[field] = [eval('Eksgauter' + '.' + str(field)) for Eksgauter in BearingData.where(
                added_at__between=(dat, dat + dt.timedelta(days=23)),
                bearing_id=names[0].id
            ).all()]
    index_2 = multi_iter1.pop('index')
    df = pd.DataFrame(multi_iter1, index=index_2)
    df['Date'] = [d.date() for d in df['added_at']]
    df['Time'] = [d.time() for d in df['added_at']]
    df = df.sort_values(by=['Date', 'Time'])
    df.pop('added_at')
    df.pop('id')
    df.pop('bearing_id')
    df = df.reindex(columns=sorted(df.columns))

    excel_file = 'test.xlsx'
    sheet_name = 'Графическая информация'

    writer = pd.ExcelWriter(excel_file, engine='xlsxwriter')
    df.to_excel(writer, sheet_name=sheet_name)


    workbook = writer.book
    worksheet = writer.sheets[sheet_name]

    chart = workbook.add_chart({'type': 'line'})

    for i in range(len(tags)):
        col =  i + 1
        if col < 3:
            col = 3
        chart.add_series({
            'name':       ['Графическая информация', 0, col], #Название полей в графике, не будет изменяться
            'categories': ['Графическая информация', 1, 1, BearingData.where(
                added_at__between=(dat, dat + dt.timedelta(days=23)),
                bearing_id=names[0].id
            ).count(), 2], #Тут вместо 21, соответственно количество данных
            'values':     ['Графическая информация', 1, col, BearingData.where(
                added_at__between=(dat, dat + dt.timedelta(days=23)),
                bearing_id=names[0].id
            ).count(), col], #Та же самая история
            'smooth': True,
            'overlap': 1,
            'gap': 500,
        })


chart.set_x_axis({'name': 'Время'})
chart.set_y_axis({'name': 'Значения', 'major_gridlines': {'visible': False}})

worksheet.insert_chart('G2', chart, {'x_scale': 2, 'y_scale': 2})


writer.save()
