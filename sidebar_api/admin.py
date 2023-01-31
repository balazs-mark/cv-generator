from django.contrib import admin

from .models import *


question_mark_icon = '<img src="/static/admin/img/icon-unknown.svg" alt="None">'


class SidebarButtonAdmin(admin.ModelAdmin):
    list_display = ('text_on_button', 'language', 'for_who', 'button_id', 'alt_for_icon', 'path_of_icon', 'path_to_open_on_click')
    list_display_links = ('text_on_button',)
    list_filter = ('language', 'for_who',)
    search_fields = ('text_on_button', 'language', 'for_who', 'alt_for_icon', 'path_of_icon', 'path_to_open_on_click')
    list_per_page = 25
    empty_value_display = question_mark_icon


admin.site.register(SidebarButton, SidebarButtonAdmin)
