from rest_framework.decorators import api_view
from rest_framework.response import Response
from .fetch_content_from_database import fetch_content_from_database
from .variables import everybody, only_civils, only_govs, en, hu


@api_view(["GET"])
def send_normal_english_content(request):
    response = fetch_content_from_database(language=en, for_who=only_civils)
    return Response(response)


@api_view(["GET"])
def send_normal_hungarian_content(request):
    response = fetch_content_from_database(language=hu, for_who=only_civils)
    return Response(response)


@api_view(["GET"])
def send_gov_english_content(request):
    response = fetch_content_from_database(language=en, for_who=only_govs)
    return Response(response)


@api_view(["GET"])
def send_gov_hungarian_content(request):
    response = fetch_content_from_database(language=hu, for_who=only_govs)
    return Response(response)
