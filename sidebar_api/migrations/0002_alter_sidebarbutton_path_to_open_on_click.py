# Generated by Django 4.0.1 on 2022-01-08 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sidebar_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sidebarbutton',
            name='path_to_open_on_click',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]