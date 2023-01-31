from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *


en = "English"
hu = "Hungarian"
everybody = "Everybody"
only_civils = "Only civils"
only_govs = "Only GOVs"


def fetch_sidebar_buttons_from_database(language, for_who):
    if for_who == only_civils:
        excluded_for_who = only_govs
    elif for_who == only_govs:
        excluded_for_who = only_civils
    buttons_from_database = SidebarButton.objects.filter(language=language).exclude(for_who="Nobody").exclude(for_who=excluded_for_who)
    
    serialised_buttons = SidebarButtonSerialiser(buttons_from_database, many=True).data
    return serialised_buttons


@api_view(["GET"])
def send_normal_english_sidebar(request):
    response = fetch_sidebar_buttons_from_database(language=en, for_who=only_civils)
    return Response(response)


@api_view(["GET"])
def send_normal_hungarian_sidebar(request):
    response = fetch_sidebar_buttons_from_database(language=hu, for_who=only_civils)
    return Response(response)


@api_view(["GET"])
def send_gov_english_sidebar(request):
    response = fetch_sidebar_buttons_from_database(language=en, for_who=only_govs)
    return Response(response)


@api_view(["GET"])
def send_gov_hungarian_sidebar(request):
    response = fetch_sidebar_buttons_from_database(language=hu, for_who=only_govs)
    return Response(response)
