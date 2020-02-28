from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('repairs', views.RepairsView)
router.register('bicycle', views.BicycleView)
router.register('order', views.OrderView)

urlpatterns = [
    path('/',include(router.urls))
]