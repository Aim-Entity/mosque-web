from django.contrib import admin
from .models import Community, Home


class CommunityAdmin(admin.ModelAdmin):
    list_filter = ("email", "read")


admin.site.register(Community, CommunityAdmin)
admin.site.register(Home)
