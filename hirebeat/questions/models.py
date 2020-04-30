from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class Question(models.Model):
    class QuestionCategory(models.TextChoices):
        Teamwork = 'Teamwork', _('Teamwork')
        TimeManagement = 'TimeManagement', _('TimeManagement')
        Integrity = 'Integrity', _('Integrity')

    # id is auto created
    title = models.TextField(default="A Question")
    description = models.TextField(default="No description")
    category = models.CharField(
        max_length=50,
        choices=QuestionCategory.choices,
        default=QuestionCategory.Teamwork
    )