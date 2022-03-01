from django.urls import path
from . import views

urlpatterns = [
    path('',views.land1,name="signup"),
    path('log',views.land2,name='login'),
]