from django.db import models
from datetime import date

TOPIC_CHOICES = (
    ("Normal", "Normal"),
    ("Main", "Main"),
)


class Topic(models.Model):
    small_title = models.CharField(
        max_length=80, default="THIS SHOULD BE A SHORT TITLE")

    small_desc = models.TextField(
        max_length=100, default="THIS SHOULD BE A SHORT DESCRIPTION")

    topic_type = models.CharField(
        choices=TOPIC_CHOICES, max_length=100, default=TOPIC_CHOICES[0])

    def __str__(self):
        return self.small_title


class Author(models.Model):
    topic = models.ForeignKey(Topic, on_delete=None)
    profile = models.ImageField(upload_to="profile_img")
    name = models.CharField(max_length=160)
    status = models.CharField(max_length=100, default="speaker")
    facebook = models.URLField(max_length=950, blank=True)
    twitter = models.URLField(max_length=950, blank=True)
    slug = models.SlugField(default="Change-me", max_length=300)
    email = models.EmailField(max_length=300)

    def __str__(self):
        return self.name


class Chapter(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)

    title = models.CharField(max_length=200)

    desc = models.TextField(max_length=700)

    video = models.FileField(upload_to="topic_files")
    pub_date = models.DateField(default=date.today)
    thumbnail = models.ImageField(upload_to="thumbnails")

    def __str__(self):
        return f"Chapter: {self.title}"
