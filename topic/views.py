from django.shortcuts import render
from .models import Topic, Chapter, Author
from django.views.generic import ListView, DetailView
from .filters import TopicFilter


class TopicListView(ListView):
    template_name = "topic/topic.htm"
    model = Topic
    context_object_name = "topics"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["filter"] = TopicFilter(
            self.request.GET, queryset=self.get_queryset())
        return context  # Creating the filter by getting the queryset's title


class SpeakerView(ListView):
    template_name = "topic/speaker.htm"
    paginate_by = 6
    model = Author
    context_object_name = "speakers"


class SpeakerDetailView(DetailView):  # Sort of both a DetailView and ListView
    template_name = "topic/speaker_detail.htm"
    model = Author
    context_object_name = "speaker"


class ChapterDetailView(DetailView):
    template_name = "topic/chapter_detail.htm"
    model = Chapter
    context_object_name = "chapter"
