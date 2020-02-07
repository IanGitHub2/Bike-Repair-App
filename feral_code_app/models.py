from django.db import models

# Create your models here.
class Repairs(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=150)
    repair_time = models.CharField(max_length=30)
    repair_price = models.DecimalField(default=0, decimal_places=2, max_digits=10)

    def __str__(self):
        return self.name


class Bicycle(models.Model):
    name = models.CharField(max_length=100)
    image_url = models.TextField(default='')
    repair_time = models.CharField(max_length=30)
    repair_price = models.DecimalField(default=0, decimal_places=2, max_digits=10)

    def __str__(self):
        return self.name


class Order(models.Model):
    pick_date = models.CharField(max_length=30)
    order_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    special_request = models.TextField(max_length=220)
    repair = models.ManyToManyField(Repairs)
    bicycle = models.ForeignKey(Bicycle, on_delete=models.PROTECT, related_name='bicycles')

    def __str__(self):
        return self.order_name

