from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    description = models.CharField(max_length=500)
    owner = models.ForeignKey(
        User, related_name="todo", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
