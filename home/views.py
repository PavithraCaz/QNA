from signal import SIGHUP
from unicodedata import name
from urllib import request
from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'master.html')