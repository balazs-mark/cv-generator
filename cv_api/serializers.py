from rest_framework import serializers
from .models import *


class GenenralSerialiser(serializers.ModelSerializer):
    class Meta:
        model = General
        fields = ["title",]


class PersonalInfosSerialiser(serializers.ModelSerializer):
    phone_number = serializers.CharField(source='phone_number.phone_number')
    email = serializers.CharField(source='email.email')
    skype = serializers.CharField(source='skype.skype')
    github = serializers.CharField(source='github.github')

    class Meta:
        model = PersonalInfos
        fields = ['name', 'birthday', 'address', 'google_maps_link_for_address', 'phone_number', 'email', 'skype', 'path_to_my_small_photo', 'path_to_my_large_photo', 'github']


class DatasSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Datas
        fields = ['date', 'text', 'path_to_the_document']
