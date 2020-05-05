from rest_framework import viewsets, permissions
from .serializers import VideoSerializer
from videos.models import Video
from rest_framework.response import Response
from rest_framework import status

class VideoViewSet(viewsets.ModelViewSet):
    # permission_classes = [permissions.AllowAny] allow all access
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = VideoSerializer

    # queryset = Video.objects.all() get all videos
    def get_queryset(self):
        return self.request.user.videos.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def partial_update(self, request, pk=None):
        video = Video.objects.filter(id=pk)[0]
        try:
            video.score = request.data['score']
            video.tags = request.data['tags']
            video.comments = request.data['comments']
        except:
            return Response("no param",status=status.HTTP_400_BAD_REQUEST)
        video.is_reviewed = True
        video.save()
        return Response({ "video":VideoSerializer(video).data}, status=status.HTTP_200_OK)


