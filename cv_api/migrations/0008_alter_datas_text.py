# Generated by Django 4.1.5 on 2023-01-23 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cv_api', '0007_alter_personalinfos_github'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datas',
            name='text',
            field=models.CharField(max_length=256),
        ),
    ]