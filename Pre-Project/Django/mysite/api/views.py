from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import EchoSerializer
from .models import Echo

class EchoViewSet(viewsets.ModelViewSet):
	queryset = Echo.objects.all().order_by('id')
	serializer_class = EchoSerializer


