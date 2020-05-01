from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .api.serializers import VideoSerializer
from .models import Video

#decorator
def allowed_users(allowed_groups=[]):
    def decorator(view_func):
        def wrapper_func(request, *args, **kwargs):
            group = None
            if request.user.groups.exists():
                group = request.user.groups.all()[0]
            if str(group) in allowed_groups:
                return view_func(request, *args, **kwargs)
            else:
                return HttpResponse({"You are not authorized to view this page"})
        return wrapper_func
    return decorator

@allowed_users(allowed_groups=['admin','reviewers'])
@api_view(['GET'])
def get_unreviewed_video(request):
    videos = Video.objects.filter(is_reviewed=False).order_by('-created_at')
    video= None
    for v in videos:
        video = v
        break
    serializer = VideoSerializer(video)
    return Response(serializer.data)
