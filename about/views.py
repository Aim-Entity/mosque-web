from django.shortcuts import render
from .models import Latest, Charity


def about(request):
    objects = Latest.objects.all()[:3]
    if len(Charity.objects.all()) == 0:
        charity = Charity.objects.all()

    elif len(Charity.objects.all()) == 1:
        charity = Charity.objects.all()[:1]

    elif len(Charity.objects.all()) == 2:
        charity = Charity.objects.all()[:2]

    elif len(Charity.objects.all()) == 3:
        charity = Charity.objects.all()[:3]

    elif len(Charity.objects.all()) == 4:
        charity = Charity.objects.all()[:4]

    elif len(Charity.objects.all()) == 5:
        charity = Charity.objects.all()[:5]

    else:
        charity = Charity.objects.all()[:6]

    # A poor version of checking number of objects

    context = {
        "objects": objects,
        "charity": charity
    }
    return render(request, "about/about.htm", context)
