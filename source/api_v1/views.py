from django.shortcuts import render
from webapp.models import Task
from rest_framework import viewsets
from api_v1.serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.active().order_by('pk')
    serializer_class = TaskSerializer
    authentication_classes = []

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()
