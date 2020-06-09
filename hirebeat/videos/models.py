from django.db import models
from django.contrib.auth.models import User
from questions.models import Question
from django.utils.translation import gettext_lazy as _

class Video(models.Model):
    # id is auto created
    url = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="videos", on_delete = models.CASCADE, null = True)
    q_description = models.CharField(default="Sample question", max_length=500)
    class QuestionType(models.TextChoices):
        BehaviorQuestion = 'Behavior Question', _('Behavior Question')
        TechniqueQuestion = 'Technique Question', _('Technique Question')
    q_type= models.CharField(max_length=50, choices=QuestionType.choices,default=QuestionType.BehaviorQuestion)
    # review related
    needed_expert_review = models.BooleanField(default=False)
    is_expert_reviewed = models.BooleanField(default=False)
    needed_ai_review = models.BooleanField(default=False)
    is_ai_reviewed = models.BooleanField(default=False)
    #tags = models.TextField(default="Good job")
    comments = models.TextField(default="No comments yet")
    score = models.FloatField(default=5.0)
    reviewer = models.ForeignKey(User, related_name="reviewed_videos", on_delete= models.SET_NULL, null=True, blank=True)
    # More fields to add
    def __str__(self):
        return self.owner.username + '|' + self.created_at.strftime("%m/%d/%Y")
