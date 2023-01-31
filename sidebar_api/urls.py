from django.urls import path
from . import views

urlpatterns = [
    path('en', views.send_normal_english_sidebar, name='send_normal_english_sidebar'),
    path('hu', views.send_normal_hungarian_sidebar, name='send_normal_hungarian_sidebar'),
    path('gov/en', views.send_gov_english_sidebar, name='send_gov_english_sidebar'),
    path('gov/hu', views.send_gov_hungarian_sidebar, name='send_gov_hungarian_sidebar'),
]
