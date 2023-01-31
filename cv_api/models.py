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


class Email(models.Model):
    email = models.EmailField()
    
    def __str__(self):
        return self.email


class Skype(models.Model):
    skype = models.EmailField()
    
    def __str__(self):
        return self.skype


class GitHub(models.Model):
    github = models.CharField(max_length=32)
    
    def __str__(self):
        return self.github
    
    class Meta:
        verbose_name_plural = "GitHub Accounts"


class PhoneNumber(models.Model):
    phone_number = models.CharField(max_length=16)

    def __str__(self):
        return self.phone_number


class General(models.Model):
    language = models.CharField(max_length=16, choices=LANGUAGE_CHOISES)
    title = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.title} ({self.language})"


class PersonalInfos(models.Model):
    language = models.CharField(max_length=16, choices=LANGUAGE_CHOISES)
    for_who = models.CharField(max_length=16, choices=WHO_CAN_SEE_CHOISES)
    name = models.CharField(max_length=64)
    birthday = models.CharField(max_length=128)
    address = models.CharField(max_length=128)
    google_maps_link_for_address = models.URLField(max_length=512)
    phone_number = models.ForeignKey(PhoneNumber, on_delete=models.CASCADE)
    email = models.ForeignKey(Email, on_delete=models.CASCADE)
    skype = models.ForeignKey(Skype, on_delete=models.CASCADE)
    github = models.ForeignKey(GitHub, on_delete=models.CASCADE)
    path_to_my_small_photo = models.CharField(max_length=128)
    path_to_my_large_photo = models.CharField(max_length=128)
    my_photo_alt = models.CharField(max_length=32, default="my_photo")
    
    def __str__(self):
        return f"{self.name} ({self.for_who} - {self.language})"

    class Meta:
        verbose_name_plural = "Personal Infos"


class Datas(models.Model):
    language = models.CharField(max_length=16, choices=LANGUAGE_CHOISES)
    for_who = models.CharField(max_length=16, choices=WHO_CAN_SEE_CHOISES)
    CATEGORY_CHOISES = [
        ("Education", "Education"),
        ("Work Experience", "Work Experience"),
        ("IT skills", "IT skills"),
        ("Spoken languages", "Spoken languages"),
        ("Others", "Others"),
    ]
    category = models.CharField(max_length=64, choices=CATEGORY_CHOISES)
    date = models.CharField(max_length=64, blank=True, null=True)
    text = models.CharField(max_length=256)
    path_to_the_document = models.CharField(max_length=128, blank=True, null=True)

    def __str__(self):
        return f"{self.text} ({self.for_who} - {self.language})"
    
    class Meta:
        verbose_name_plural = "Datas"
