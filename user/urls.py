from unicodedata import name
from django.urls import path
from . import views
app_name="user"
urlpatterns = [
    path('home',views.home,name="home"),
    path('timeline',views.timeline,name="timeline"),
    path('space',views.space,name="space"),
    path('notification',views.notification,name="notification"),
    path('settings',views.settings,name="settings"),
    path('profile',views.profile,name="profile")
]