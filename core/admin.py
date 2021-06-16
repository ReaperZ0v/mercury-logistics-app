from django.contrib import admin
from . import models 

# Register your models here.
@admin.register(models.Consignment)
class PackageAdmin(admin.ModelAdmin):
    list_display = ["sender_email", "creation_date", "timestamp", "sender", "receiver", "shippment_charges", "tracking_number", "destination_address", "status", "weight_kg", "fragile"]