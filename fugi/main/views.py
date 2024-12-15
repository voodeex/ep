from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

def about(requests):
    return render(requests,'main/about.html')

def registration(requests):
    return  render(requests,'main/registration.html')

def login(requests):
    return render(requests,'main/login.html')
