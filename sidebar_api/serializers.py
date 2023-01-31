from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class SidebarButtonSerialiser(serializers.ModelSerializer):
    class Meta:
        model = SidebarButton
        fields = ['button_id', 'text_on_button', 'alt_for_icon', 'path_of_icon', 'path_to_open_on_click']
