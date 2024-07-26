from rest_framework.generics import ListAPIView
from rest_framework import permissions

from .models import Languaje
from .serializers import LanguajeSerializer

class LanguajeListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Languaje.objects.all().order_by('languaje')
    serializer_class = LanguajeSerializer
    pagination_class = None
