from rest_framework import serializers
from . import models 


class TrackingSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super(TrackingSerializer, self).__init__(*args, **kwargs)
        for field in self.fields:
            self.fields[field].read_only = True

    class Meta:
        model = models.Consignment
        fields = ("__all__")


class TrackIDSerializer(serializers.Serializer):
    trk_number = serializers.CharField(max_length=12)
    
