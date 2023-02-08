from app import admin, db
from app.admin_panel.views import (ArticleView, EventView, NewsView, PlanView,
                                   TextView)
from app.models import AcademicPlan, Article, Event, News, Text

admin.add_view(NewsView(News, db.session, name='Новости'))
admin.add_view(EventView(Event, db.session, name='События'))
admin.add_view(TextView(Text, db.session, name='Текста'))
admin.add_view(PlanView(AcademicPlan, db.session, name='Отрезки'))
admin.add_view(ArticleView(Article, db.session, name='Статьи'))
