from django.shortcuts import render


def disclaimer(request):
    return render(request, "footer/disclaimer.htm")


def policy(request):
    return render(request, "footer/policy.htm")
