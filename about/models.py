from django.db import models

MONTH_CHOICES = (
    ("January", "January"),
    ("February", "February"),
    ("March", "March"),
    ("April", "April"),
    ("May", "May"),
    ("June", "June"),
    ("July", "July"),
    ("August", "August"),
    ("September", "September"),
    ("October", "October"),
    ("November", "November"),
    ("December", "December"),
)


class Latest(models.Model):
    img = models.ImageField(upload_to="images", default="default/default.png")
    date = models.CharField(max_length=2)
    month = models.CharField(max_length=20, choices=MONTH_CHOICES)

    title = models.CharField(max_length=25)
    desc = models.TextField(max_length=140)

    def __str__(self):
        return self.title


class Charity(models.Model):
    img = models.ImageField(upload_to="recent")
    title = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Charities"

    def __str__(self):
        return self.title
