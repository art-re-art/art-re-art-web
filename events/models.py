from django.db import models
from django.urls import reverse
from django.conf import settings
from xml.etree import ElementTree
import qrcode
import qrcode.image.svg

from artreart.utils import create_thumbnails


class Event(models.Model):
    title = models.CharField(max_length=255)
    datetime = models.DateTimeField()
    location = models.ForeignKey(
        to="events.EventLocation", on_delete=models.CASCADE, related_name="events"
    )
    _featured_image = models.ImageField("Featured image", blank=True, null=True)

    class Meta:
        ordering = ["-datetime"]

    def __str__(self):
        return self.title

    @property
    def month(self):
        return self.datetime.strftime("%b")

    @property
    def day(self):
        return self.datetime.strftime("%d")

    @property
    def time(self):
        return self.datetime.strftime("%I:%M %p")

    @property
    def api_url(self):
        return settings.BASE_URL + reverse("event-detail", kwargs={"pk": self.pk})

    @property
    def qrcode(self):
        factory = qrcode.image.svg.SvgImage
        img = qrcode.make(self.api_url, box_size=20, image_factory=factory)
        svg = ElementTree.tostring(img.get_image(), encoding="utf-8", method="xml")
        return svg.decode("utf-8")

    @property
    def number_of_images(self):
        return str(self.images.count())

    @property
    def featured_image(self):
        return create_thumbnails(self._featured_image)


class EventImage(models.Model):
    event = models.ForeignKey(Event, related_name="images", on_delete=models.CASCADE)
    _image = models.ImageField()
    description = models.CharField(blank=True, null=True, max_length=200)

    def __str__(self):
        return self.description

    @property
    def image(self):
        return create_thumbnails(self._image)


class EventLocation(models.Model):
    title = models.CharField(max_length=255)
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    postal = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return self.title
