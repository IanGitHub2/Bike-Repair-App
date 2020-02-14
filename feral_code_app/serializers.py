from rest_framework import serializers

from .models import Repairs, Bicycle, Order

from rest_framework import serializers
from .models import Repairs, Bicycle, Order

class RepairSerializer(serializers.ModelSerializer):
    class Meta:
        model = Repairs
        fields = ('id', 'name', 'description', 'repair_time', 'repair_price')

class BicycleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bicycle
        fields = ('id','name', 'image_url', 'repair_time', 'repair_price')

class OrderSerializer(serializers.ModelSerializer):
    # repairs = RepairSerializer(many=True, read_only=True)
    # bicycle = BicycleSerializer(many=False, read_only=True)
    class Meta:
        model = Order
        fields = ('id', 'pick_date', 'order_name', 'phone_number', 'email', 'special_request', 'repair', 'bicycle')
