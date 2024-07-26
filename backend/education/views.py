from rest_framework.generics import ListAPIView
from rest_framework import permissions

from .models import Education
from .serializers import EducationSerializer

class EducationListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Education.objects.all()
  serializer_class = EducationSerializer
  pagination_class = None
