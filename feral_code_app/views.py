from rest_framework import viewsets

from .serializers import RepairSerializer, BicycleSerializer, OrderSerializer
from .models import Repairs, Bicycle, Order

class RepairsView(viewsets.ModelViewSet):
    queryset = Repairs.object.all()
    serializer_class = RepairSerializer

class BicycleView(viewsets.ModelViewSet):
    queryset = Bicycle.object.all()
    serializer_class = BicycleSerializer

class OrderView(viewsets.ModelViewSet):
    queryset = Order.object.all()
    serializer_class = OrderSerializer