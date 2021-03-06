from django.contrib import admin
from .models import Contact


class ContactAdmin(admin.ModelAdmin):
    list_filter = ("email", "read")


admin.site.register(Contact, ContactAdmin)
