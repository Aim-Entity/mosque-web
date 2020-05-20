from django.shortcuts import render, redirect
from .forms import CommunityForm
from .models import Home
from topic.models import Topic, Chapter


def home(request):
    if request.method == "POST":
        community = CommunityForm(request.POST)

        if community.is_valid():
            community.save()

            return redirect("home")

    else:
        community = CommunityForm()

    home_object = Home.objects.first()
    # Getting the first topic object with a certain type
    topic1 = Topic.objects.filter(topic_type="Main")[0]
    topic2 = Topic.objects.filter(topic_type="Main")[1]
    topic3 = Topic.objects.filter(topic_type="Main")[2]
    # Getting 4 chapter objects which is ordered by publish date first
    latest = Chapter.objects.all().order_by("-pub_date")[0: 5]

    context = {
        "community": community,
        "home": home_object,
        "topic1": topic1,
        "topic2": topic2,
        "topic3": topic3,
        "latest": latest
    }

    return render(request, "home/home.htm", context)
