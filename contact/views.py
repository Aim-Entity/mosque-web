from django.shortcuts import render, redirect
from .models import Contact
from .forms import ContactForm
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings


def contact(request):
    if request.method == "POST":
        contact = ContactForm(request.POST)

        if contact.is_valid():
            contact.save()

            name = contact.cleaned_data.get("fullname")
            phone = contact.cleaned_data.get("phone_number")
            message = contact.cleaned_data.get("message")
            email = contact.cleaned_data.get("email")
            send_mail(
                f"Contact Form: {name}",
                f"Message: \n{message}\nEmail: \n{email}\n\n\nPhone Number: {phone}",
                settings.EMAIL_HOST_USER,
                ["bilaluddin474@gmail.com"],
                fail_silently=False
            )  # Email sent to web owner or staff

            messages.success(
                request, f'Thank you, {name} for sending a message!')

            return redirect("home")

    else:
        contact = ContactForm()

    context = {
        "contact": contact
    }

    return render(request, "contact/contact.htm", context)
