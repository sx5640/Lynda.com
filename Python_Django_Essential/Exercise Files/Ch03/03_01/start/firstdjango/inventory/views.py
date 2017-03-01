from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    return HttpResponse('<p>In index</p>')

def item_detail(request, idea):
    return HttpResponse('<>In id {0}'.format(id))
