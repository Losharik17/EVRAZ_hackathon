import pandas as pd
import random
from backend.app.models import EksgausterData


tags = []
#Тут будут не все поля класса, а поля соответствующих данных, которые мне будут присылать
for tag in EksgausterData.__annotations__:
    tags.append(tag)
index_1 = range(0, 21, 1) #Тут будет не 21, а количество эксгаутеров
multi_iter1 = {'index': index_1}
for field in tags:
    multi_iter1[field] = [random.randint(10, 100) for x in index_1]


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


for i in range(len(tags)):
    col = i + 1
    chart.add_series({
        'name':       ['Sheet1', 0, col], #Название полей в графике, не будет изменяться
        'categories': ['Sheet1', 1, 0, 21, 0], #Тут вместо 21, соответственно количество данных
        'values':     ['Sheet1', 1, col, 21, col], #Та же самая история
    })


chart.set_x_axis({'name': 'Index'})
chart.set_y_axis({'name': 'Value', 'major_gridlines': {'visible': False}})


worksheet.insert_chart('G2', chart)


writer.save()