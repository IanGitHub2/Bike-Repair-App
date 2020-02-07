from django.contrib import admin
from .models import Repairs, Bicycle, Order

admin.site.register([Repairs, Bicycle, Order])
