from django.contrib import admin

from .models import *


question_mark_icon = '<img src="/static/admin/img/icon-unknown.svg" alt="None">'


class GeneralAdmin(admin.ModelAdmin):
    list_display = ('title', 'language',)
    list_display_links = ('title',)
    list_filter = ('language',)
    search_fields = ('title', 'language',)
    list_per_page = 25
    empty_value_display = question_mark_icon


class PersonalInfosAdmin(admin.ModelAdmin):
    list_display = ('name', 'for_who', 'language', 'birthday', 'address', 'google_maps_link_for_address', 'phone_number', 'email', 'skype', 'path_to_my_small_photo', 'path_to_my_large_photo', 'github')
    list_display_links = ('name',)
    list_filter = ('for_who', 'language',)
    search_fields = ('name', 'for_who', 'language', 'birthday', 'address', 'google_maps_link_for_address', 'phone_number', 'email', 'skype', 'path_to_my_small_photo', 'path_to_my_large_photo', 'github')
    list_per_page = 25
    empty_value_display = question_mark_icon


class DatasAdmin(admin.ModelAdmin):
    list_display = ('text', 'for_who', 'language', 'category', 'date', 'path_to_the_document')
    list_display_links = ('text',)
    list_filter = ('for_who', 'language', 'category')
    search_fields = ('text', 'for_who', 'language', 'category', 'date', 'path_to_the_document')
    list_per_page = 25
    empty_value_display = question_mark_icon


admin.site.register(Email)
admin.site.register(Skype)
admin.site.register(GitHub)
admin.site.register(PhoneNumber)
admin.site.register(General, GeneralAdmin)
admin.site.register(PersonalInfos, PersonalInfosAdmin)
admin.site.register(Datas, DatasAdmin)
