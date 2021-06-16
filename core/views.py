from re import L
from django.db.models import query
from rest_framework import response
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import serializers
from . import models 
import json 

# Create your views here.
class TrackingAPIView(APIView):
    serializer_class = serializers.TrackIDSerializer

    def get(self, request):
        return Response({
            "message": "Enter your Tracking Number"
        }, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            consignment = models.Consignment.objects.filter(tracking_number=serializer.validated_data['trk_number'])

            if len(consignment.values_list()) > 0:
                serialized = serializers.TrackingSerializer(consignment, many=True)
                return Response(serialized.data, status=status.HTTP_200_OK)

            else:
                return Response({
                    "error": "No Data Found"
                }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)