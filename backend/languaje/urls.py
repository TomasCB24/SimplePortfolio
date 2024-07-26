from django.urls import path
from .views import LanguajeListView

urlpatterns = [
  path('', LanguajeListView.as_view()),
]
        