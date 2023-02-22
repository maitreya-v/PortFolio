from rest_framework import serializers
from connectApp.models import Connect

class ConnectSerializer(serializers.ModelSerializer):
     class Meta:
          model=Connect
          fields='__all__'
