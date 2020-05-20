from django.shortcuts import render


def donation(request):
    context = {

    }

    return render(request, "donation/donation.htm", context)
