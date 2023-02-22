from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ConnectSerializer
from connectApp.models import Connect
@api_view(['GET'])
def getData(request):
    items=Connect.objects.all()
    serializer=ConnectSerializer(items,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addItem(request):
    serializer=ConnectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
    