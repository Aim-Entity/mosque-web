from django.urls import path
from . import views

urlpatterns = [
    path("disclaimer/", views.disclaimer, name="disclaimer"),
    path("policy/", views.policy, name="policy"),
]
