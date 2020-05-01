from rest_framework import viewsets, permissions
from .serializers import VideoSerializer
from videos.models import Video

class VideoViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.AllowAny] allow all access
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = VideoSerializer

    # queryset = Video.objects.all() get all videos
    def get_queryset(self):
        return self.request.user.videos.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)



