# Generated by Django 4.1.5 on 2023-01-28 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cv_api', '0008_alter_datas_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personalinfos',
            name='google_maps_link_for_address',
            field=models.URLField(max_length=256),
        ),
    ]
