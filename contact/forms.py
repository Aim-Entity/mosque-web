from django import forms
from .models import Contact


class ContactForm(forms.ModelForm):
    fullname = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-name c-forms'}), label='Fullname')

    email = forms.CharField(widget=forms.EmailInput(
        attrs={'class': 'form-email c-forms'}), label='Email')

    phone_number = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-phoneNumber c-forms'}), label='Phone Number')

    message = forms.CharField(widget=forms.Textarea(
        attrs={'class': 'form-message c-forms'}), label='Message')

    # LABEL IS NEEDED TO COMPLY WITH CRISPY FORMS
    class Meta:
        model = Contact
        fields = ("fullname", "email", "phone_number", "message")
