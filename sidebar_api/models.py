from django.db import models


WHO_CAN_SEE_CHOISES = [
    ("Everybody", "Everybody"),
    ("Only civils", "Only civils"),
    ("Only GOVs", "Only GOVs"),
    ("Nobody", "Nobody"),
]


LANGUAGE_CHOISES = [
    ("Hungarian", "Hungarian"),
    ("English", "English"),
]


class SidebarButton(models.Model):
    language = models.CharField(max_length=16, choices=LANGUAGE_CHOISES)
    for_who = models.CharField(max_length=16, choices=WHO_CAN_SEE_CHOISES)
    button_id = models.CharField(max_length=128)
    alt_for_icon = models.CharField(max_length=128)
    path_of_icon = models.CharField(max_length=128)
    text_on_button = models.CharField(max_length=128)
    path_to_open_on_click = models.CharField(max_length=128, blank=True, null=True)

    def __str__(self):
        return self.text_on_button