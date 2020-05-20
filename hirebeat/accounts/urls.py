from django.urls import path,include
from .api.api import ResgisterAPI, LoginAPI, UserAPI, ProfileAPI
from knox import views as knox_views
from .views import sign_s3_upload
from .api.social_login import exchange_token

from django.contrib.auth import views as auth_views


urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', ResgisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/profile', ProfileAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(),name="knox_logout"), # invalidate the token
    
    ### AWS S3 signed url ###
    path('sign_auth',sign_s3_upload),

    ### social login token exchange ###
    path('exchange_token/<backend>',exchange_token),
    
    ### reset password ###
    path('password_reset',auth_views.PasswordResetView.as_view(template_name="accounts/password_reset.html"),name='password_reset'),
    path('password_reset_done',auth_views.PasswordResetDoneView.as_view(template_name="accounts/password_reset_sent.html"),name='password_reset_done'),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(template_name="accounts/password_reset_new_password.html"),name='password_reset_confirm'),
    path('password_reset_complete',auth_views.PasswordResetCompleteView.as_view(template_name="accounts/password_reset_done.html"),name='password_reset_complete'),
]

