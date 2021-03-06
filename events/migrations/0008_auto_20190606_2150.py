# Generated by Django 2.2.2 on 2019-06-07 01:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("events", "0007_auto_20190606_2106")]

    operations = [
        migrations.RenameField(
            model_name="eventimage", old_name="image", new_name="_image"
        ),
        migrations.AlterField(
            model_name="event",
            name="_featured_image",
            field=models.ImageField(
                blank=True, null=True, upload_to="", verbose_name="Featured image"
            ),
        ),
    ]
