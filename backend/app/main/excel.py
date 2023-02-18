import pandas as pd
from backend.app.models import EksgausterData
from backend.app import create_app
from backend.app import db


with create_app().app_context():
    tags = []
    id = 2
    for tag in EksgausterData.__table__.columns:
        tags.append(tag.name)
    index = range(0, EksgausterData.query.filter_by(eksgauster_id=id).count(), 1)
    multi_iter1 = {'index': index}
    for field in tags:
            multi_iter1[field] = [eval('Eksgauter' + '.' + str(field)) for Eksgauter in EksgausterData.query.filter_by(eksgauster_id=id).all()]

    index_2 = multi_iter1.pop('index')
    df = pd.DataFrame(multi_iter1, index=index_2)
    df['Date'] = [d.date() for d in df['added_at']]
    df['Time'] = [d.time() for d in df['added_at']]
    df.pop('added_at')
    df.pop('id')
    df.pop('eksgauster_id')
    df = df.reindex(columns=sorted(df.columns))
    new_titles = ['Дата', 'Время']
    for value in EksgausterData.filed_titles.values():
        new_titles.append(value)
    df.columns = new_titles

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
            'categories': ['Графическая информация', 1, 1, EksgausterData.query.filter_by(eksgauster_id=id).count(), 2], #Тут вместо 21, соответственно количество данных
            'values':     ['Графическая информация', 1, col, EksgausterData.query.filter_by(eksgauster_id=id).count(), col], #Та же самая история
            'smooth': True,
            'overlap': 1,
        })

chart.set_x_axis({'name': 'Время'})
chart.set_y_axis({'name': 'Значения', 'major_gridlines': {'visible': False}})

worksheet.insert_chart('G2:G5', chart)


writer.save()
