from django.urls import path
from .views import QuestionAPIView
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('questions',QuestionAPIView.as_view()),  # when in root path, run that index method to render the html
]
# The API URLs are now determined automatically by the router.
