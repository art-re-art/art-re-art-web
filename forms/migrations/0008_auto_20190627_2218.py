# Generated by Django 2.2.2 on 2019-06-28 02:18

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [("forms", "0007_auto_20190622_1719")]

    operations = [
        migrations.AlterModelOptions(
            name="mailchimpsignup", options={"ordering": ["-submitted"]}
        ),
        migrations.AddField(
            model_name="mailchimpsignup",
            name="submitted",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
    ]
