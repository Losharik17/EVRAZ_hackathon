import pandas as pd
from backend.app.models import EksgausterData
from backend.app import create_app


with create_app().app_context():
    tags = []
    parametrs = []
    id = 2
    for tag in EksgausterData.__annotations__:
        tags.append(tag)
    tags.append('added_at')
    tags.remove('id')
    index = range(0, EksgausterData.query.filter_by(eksgauster_id=id).count(), 1)
    multi_iter1 = {'index': index}
    for field in tags:
            multi_iter1[field] = [eval('Eksgauter' + '.' + str(field)) for Eksgauter in EksgausterData.query.filter_by(eksgauster_id=id).all()]

    index_2 = multi_iter1.pop('index')
    df = pd.DataFrame(multi_iter1, index=index_2)
    df = df.reindex(columns=sorted(df.columns))


    excel_file = 'test.xlsx'
    sheet_name = 'Графическая информация'

    writer = pd.ExcelWriter(excel_file, engine='xlsxwriter')
    df.to_excel(writer, sheet_name=sheet_name)


    workbook = writer.book
    worksheet = writer.sheets[sheet_name]


    chart = workbook.add_chart({'type': 'line'})
    col = 1

    for i in range(len(tags)):
        col +=  1
        chart.add_series({
            'name':       ['Графическая информация', 0, col], #Название полей в графике, не будет изменяться
            'categories': ['Графическая информация', 1, 1, EksgausterData.query.filter_by(eksgauster_id=id).count(), 1], #Тут вместо 21, соответственно количество данных
            'values':     ['Графическая информация', 1, col, EksgausterData.query.filter_by(eksgauster_id=id).count(), col], #Та же самая история
        })


chart.set_x_axis({'name': 'Время'})
chart.set_y_axis({'name': 'Значения', 'major_gridlines': {'visible': False}})


worksheet.insert_chart('G2', chart)


writer.save()
