# Generated by Django 2.2.1 on 2019-06-01 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("forms", "0001_initial")]

    operations = [
        migrations.CreateModel(
            name="MailchimpSignup",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("first_name", models.CharField(blank=True, max_length=255, null=True)),
                ("last_name", models.CharField(blank=True, max_length=255, null=True)),
                ("email", models.EmailField(max_length=255)),
            ],
        )
    ]
