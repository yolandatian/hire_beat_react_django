from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("", include("frontend.urls")),
    path("", include("videos.urls")), 
    path("", include("accounts.urls")), 
    path("", include("questions.urls")),
    path("admin/", admin.site.urls),
]
