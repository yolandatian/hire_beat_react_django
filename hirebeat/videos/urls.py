from rest_framework import routers
from videos.api.viewsets import VideoViewSet

router = routers.DefaultRouter()
router.register(
    "api/videos", VideoViewSet, "videos"
)  # Tell django this path is mapped to Videos in the database

urlpatterns = router.urls
