import django_filters
from .models import Topic


class TopicFilter(django_filters.FilterSet):
    class Meta:
        model = Topic
        fields = {
            "small_title": ["icontains"]
        }
