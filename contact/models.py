from django.db import models
from django.core.validators import RegexValidator


class Contact(models.Model):
    fullname = models.CharField(max_length=95)
    email = models.EmailField(max_length=125)
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    # THE REGEX GIVES CUSTOM PARAMETERS TO THE FIELD
    phone_number = models.CharField(
        validators=[phone_regex], max_length=17, blank=True)  # validators should be a list

    message = models.TextField(max_length=250)
    read = models.BooleanField(default=False)

    def __str__(self):
        return f"Name: {self.fullname} Read: {self.read}"
