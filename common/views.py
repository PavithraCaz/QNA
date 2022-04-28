from signal import SIGHUP
from unicodedata import name
from urllib import request
from django.shortcuts import render

# Create your views here.
def signup(request):
    return render(request, 'common/signup.html')

def login(request):
    return render(request, 'common/login.html')