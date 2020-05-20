from django import forms
from .models import Community


class CommunityForm(forms.ModelForm):
    name = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-name c-forms', "placeholder": "Enter Name..."}), label='')

    email = forms.CharField(widget=forms.EmailInput
                            (attrs={'class': 'form-email c-forms',
                                    "placeholder": "Enter Email..."
                                    }), label='')

    class Meta:
        model = Community
        fields = ("name", "email")
