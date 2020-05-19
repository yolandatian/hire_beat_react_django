from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ReviewerInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    review_count = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
