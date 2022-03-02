from django.urls import path
from . import views

urlpatterns = [
    path('hom',views.home),
]