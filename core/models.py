import decimal
from django.core import validators
from django.db import models
from django.core.validators import MaxLengthValidator, MinLengthValidator
from djmoney.models.fields import MoneyField
import os, binascii

def generate_number():
    id = "MTK" + str(binascii.b2a_hex(os.urandom(4))).replace("'", "").upper()
    return id 

# Create your models here.
class Consignment(models.Model):
    STATUS_CHECK = (
        ('Picked Up', 'Picked Up'),
        ('In-Transit', 'In-Transit'),
        ('Arrived', 'Arrived'),
        ('Shipped', 'Shipped')
    )

    sender_email = models.EmailField()
    creation_date = models.DateField(auto_now_add=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    sender = models.CharField(max_length=120)
    receiver = models.CharField(max_length=120)
    tracking_number = models.CharField(max_length=12, validators=[MaxLengthValidator(12), MinLengthValidator(12)], default=generate_number)
    destination_address = models.CharField(max_length=120)
    shippment_charges = MoneyField(max_digits=14, decimal_places=2, default_currency='USD')
    status = models.CharField(max_length=60, choices=STATUS_CHECK)
    weight_kg = models.DecimalField(max_digits=5, decimal_places=2)
    fragile = models.BooleanField(default=False)

    def __str__(self):
        return self.sender_email
