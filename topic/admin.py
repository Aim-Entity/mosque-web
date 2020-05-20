from django.contrib import admin
from .models import Author, Topic, Chapter
admin.site.site_header = "Administration"
admin.site.index_title = "Database Administration"


class TopicAdmin(admin.ModelAdmin):
    list_filter = ("small_title",)


class AuthorAdmin(admin.ModelAdmin):
    list_filter = ("name", "topic")


class ChapterAdmin(admin.ModelAdmin):
    list_filter = ("pub_date", "title", "author")


admin.site.register(Topic, TopicAdmin)
admin.site.register(Author, AuthorAdmin)
admin.site.register(Chapter, ChapterAdmin)
