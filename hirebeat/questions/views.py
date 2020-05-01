from .models import Question
from rest_framework import generics, permissions
from .serializers import QuestionSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
import random

class QuestionAPIView(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        number = self.request.query_params.get('number')
        questions = Question.objects.all()
        if number is None :
            number = 3
        questions = random.sample(list(questions), int(number))
        return questions

