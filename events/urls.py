from django.urls import path

from . import views


urlpatterns = [
    path('', views.EventIndexView.as_view(), name='event_index')
]
