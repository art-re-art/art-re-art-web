# Generated by Django 2.2.1 on 2019-06-02 17:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [("events", "0004_event_image")]

    operations = [
        migrations.RenameField(
            model_name="event", old_name="image", new_name="featured_image"
        ),
        migrations.CreateModel(
            name="EventImage",
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
                ("image", models.ImageField(upload_to="")),
                (
                    "description",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "event",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="images",
                        to="events.Event",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="event",
            name="gallery",
            field=models.ManyToManyField(
                blank=True, related_name="images", to="events.EventImage"
            ),
        ),
    ]
