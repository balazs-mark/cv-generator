from .models import *
from .serializers import *
from .variables import everybody, only_civils, only_govs, categories


def fetch_content_from_database(language, for_who):
    if for_who == only_civils:
        excluded_for_who = only_govs
    elif for_who == only_govs:
        excluded_for_who = only_civils

    try:
        general_content_from_database = General.objects.get(language=language)
        personal_infos_from_database = PersonalInfos.objects.get(language=language, for_who=for_who)
        education_from_database = Datas.objects.filter(language=language, category="Education").exclude(for_who="Nobody").exclude(for_who=excluded_for_who).order_by("-date")
        work_experience_from_database = Datas.objects.filter(language=language, category="Work Experience").exclude(for_who="Nobody").exclude(for_who=excluded_for_who).order_by("-date")
        it_skills_from_database = Datas.objects.filter(language=language, category="IT skills").exclude(for_who="Nobody").exclude(for_who=excluded_for_who)
        spoken_languages_from_database = Datas.objects.filter(language=language, category="Spoken languages").exclude(for_who="Nobody").exclude(for_who=excluded_for_who)
        others_from_database = Datas.objects.filter(language=language, category="Others").exclude(for_who="Nobody").exclude(for_who=excluded_for_who)

        serialised_general_content = GenenralSerialiser(general_content_from_database, many=False).data
        serialised_personal_infos = PersonalInfosSerialiser(personal_infos_from_database, many=False).data
        serialised_education = DatasSerialiser(education_from_database, many=True).data
        serialised_work_experience = DatasSerialiser(work_experience_from_database, many=True).data
        serialised_it_skills = DatasSerialiser(it_skills_from_database, many=True).data
        serialised_spoken_languages = DatasSerialiser(spoken_languages_from_database, many=True).data
        serialised_others = DatasSerialiser(others_from_database, many=True).data


        language = language.lower()

        return {
            "general": serialised_general_content,
            "personal_infos": serialised_personal_infos,
            "datas": [
                {"category": categories[0][language],
                "list": serialised_education},
                {"category": categories[1][language],
                "list": serialised_work_experience},
                {"category": categories[2][language],
                "list": serialised_it_skills},
                {"category": categories[3][language],
                "list": serialised_spoken_languages},
                {"category": categories[4][language],
                "list": serialised_others},
            ]
        }
    except:
        return {
            "general": "",
            "personal_infos": "",
            "datas": []
        }
