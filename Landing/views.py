from signal import SIGHUP
from unicodedata import name
from urllib import request
from django.shortcuts import render

# Create your views here.
def land2(request):
    return render(request,'Login.html')
    
def land1(request):
    return render(request,'Signup.html')
