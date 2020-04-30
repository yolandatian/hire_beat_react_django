from django.db import models
from django.contrib.auth.models import User
from questions.models import Question

class Video(models.Model):
    # id is auto created
    url = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="videos", on_delete = models.CASCADE, null = True)
    title = models.TextField(default="My video")
    # More fields to add
