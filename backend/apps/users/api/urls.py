# Django imports
from django.urls import path

# Views imports
from apps.users.api.views import (
    UserApiView,
    CreateUserApiView, 
    UserDetailApiView,
    AuthLoginAPIView
)

# Urls
urlpatterns = [
    path('user-list/', UserApiView.as_view(), name='user_list'),
    path('create-user/', CreateUserApiView.as_view(), name='create'),
    path('detail-user/<int:pk>/', UserDetailApiView.as_view(), name='details'),
    path('login/', AuthLoginAPIView.as_view(), name='auth'),
]

