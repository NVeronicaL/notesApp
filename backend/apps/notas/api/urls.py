# Django import
from django.urls import path

# Views
from apps.notas.api.views import (
    NotaApiView,
    CreateNotaApiView, 
    NotaDetailApiView
)

# Urls
urlpatterns = [
    path('nota-list/', NotaApiView.as_view(), name='nota_list'),
    path('create-nota/', CreateNotaApiView.as_view(), name='create'),
    path('detail-nota/<int:pk>/', NotaDetailApiView.as_view(), name='details'),
]
