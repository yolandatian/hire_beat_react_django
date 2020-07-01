from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic.base import TemplateView

urlpatterns = [
    path("", include("frontend.urls")),
    path("", include("videos.urls")), 
    path("", include("accounts.urls")), 
    path("", include("questions.urls")),
    # This is visible to all on Github. Consider make the repo private later.
    # The trailing slash is required in browser.
    path("dontdobadthings/", admin.site.urls),

    ### let react router handle all other routes ###
    re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name="frontend/index.html")), 
]
