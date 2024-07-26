from rest_framework import serializers
from .models import Languaje

class LanguajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Languaje
        fields = '__all__'