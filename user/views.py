from signal import SIGHUP
from unicodedata import name
from urllib import request
from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'user/home.html')
    
def timeline(request):
    return render(request,'user/timeline.html')

def space(request):
    return render(request,'user/space.html')

def notification(request):
    return render(request,'user/notification.html')

def settings(request):
    return render(request,'user/settings.html')

def profile(request):
    return render(request,'user/profile.html')