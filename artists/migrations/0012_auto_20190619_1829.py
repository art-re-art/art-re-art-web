# Generated by Django 2.2.2 on 2019-06-19 22:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('artists', '0011_auto_20190619_1826'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='artistwork',
            options={'ordering': ['_order'], 'verbose_name': 'Artist Work', 'verbose_name_plural': 'Aritst Works'},
        ),
        migrations.AlterModelOptions(
            name='artistworkimage',
            options={'ordering': ['_order'], 'verbose_name': 'Artist Work Image', 'verbose_name_plural': 'Aritst Work Images'},
        ),
    ]