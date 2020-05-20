from django.urls import path
from . import views

urlpatterns = [
    path("topic/", views.TopicListView.as_view(), name="topic"),
    path("speaker/", views.SpeakerView.as_view(), name="speaker"),
    path("speaker/<str:slug>", views.SpeakerDetailView.as_view(),
         name="speaker-detail"),
    path("chapter/<int:pk>", views.ChapterDetailView.as_view(),
         name="chapter-detail")
]
