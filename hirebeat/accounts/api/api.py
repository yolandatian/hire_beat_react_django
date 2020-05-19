from rest_framework import generics,permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from accounts.models import ReviewerInfo

#Register API

class ResgisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        print(request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        _, token = AuthToken.objects.create(user)
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })

# Login API

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        ## user info
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        ### token
        _, token = AuthToken.objects.create(user)
        ### reviewer info
        reviewer_info = ReviewerInfo.objects.filter(user=user)
        count = 0
        if reviewer_info:
            count = reviewer_info[0].review_count
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token,
            "review_count": count
        })

# GET User API

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user