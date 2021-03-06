# Generated by Django 2.2.1 on 2019-05-26 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [("events", "0002_initial_data")]

    operations = [
        migrations.CreateModel(
            name="ArtistMedium",
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
                ("title", models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name="Artist",
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
                ("name", models.CharField(max_length=255)),
                ("instagram", models.URLField(max_length=255)),
                ("website", models.URLField(max_length=255)),
                (
                    "events",
                    models.ManyToManyField(
                        blank=True, related_name="artists", to="events.Event"
                    ),
                ),
                (
                    "medium",
                    models.ManyToManyField(
                        blank=True, related_name="artists", to="artists.ArtistMedium"
                    ),
                ),
            ],
        ),
    ]
