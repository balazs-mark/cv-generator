from django.urls import path
from . import views

urlpatterns = [
    path('en', views.send_normal_english_content, name='send_normal_english_content'),
    path('hu', views.send_normal_hungarian_content, name='send_normal_hungarian_content'),
    path('gov/en', views.send_gov_english_content, name='send_gov_english_content'),
    path('gov/hu', views.send_gov_hungarian_content, name='send_gov_hungarian_content'),
]
