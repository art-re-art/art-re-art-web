# Generated by Django 2.2.2 on 2019-06-22 22:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("artists", "0014_remove_artistworkimage_is_featured")]

    operations = [
        migrations.AddField(
            model_name="artist",
            name="_qrcode",
            field=models.ImageField(
                blank=True, null=True, upload_to="", verbose_name="Image"
            ),
        )
    ]
