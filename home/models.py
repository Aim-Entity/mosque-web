from django.db import models


class Community(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=80)

    read = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Communities"

    def __str__(self):
        return f"Name: {self.name}, Read: {self.read}"


class Home(models.Model):
    title = models.CharField(max_length=100)
    quote = models.CharField(max_length=220)
    quote_author = models.CharField(max_length=100)

    testimonial = models.CharField(max_length=1000)
    testimonial_role = models.CharField(max_length=100)
    testimonial_name = models.CharField(max_length=100)
    testimonial_country = models.CharField(
        max_length=100, null=True, blank=True)

    def __str__(self):
        return self.title
