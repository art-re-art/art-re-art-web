# Generated by Django 2.2.2 on 2019-06-07 01:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('artists', '0005_artistwork_artistworkimage'),
    ]

    operations = [
        migrations.RenameField(
            model_name='artistworkimage',
            old_name='image',
            new_name='_image',
        ),
    ]
