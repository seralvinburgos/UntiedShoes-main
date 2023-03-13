from django.urls import path
from .views import PageHomeView, PageAboutView, ShoesListView, ShoeDetailView, ShoeEditView, ShoeDeleteView, ShoeCreateView

urlpatterns = [
    path("", PageHomeView.as_view(), name="home"),
    path("about/", PageAboutView.as_view(), name="about"),
    path("shoes/", ShoesListView.as_view(), name="shoes"),
    path("shoes/create/", ShoeCreateView.as_view(), name="shoe_create"),
    path("shoes/<int:pk>/", ShoeDetailView.as_view(), name="shoe_detail"),
    path("shoes/<int:pk>/edit/", ShoeEditView.as_view(), name="shoe_edit"),
    path("shoes/<int:pk>/delete/", ShoeDeleteView.as_view(), name="shoe_delete"),
]
