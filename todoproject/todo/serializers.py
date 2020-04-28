from rest_framework import serializers
from django.contrib.auth.models import User
from todo.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
