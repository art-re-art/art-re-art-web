from rest_framework import serializers

from events.models import Event, EventLocation
from artists.models import Artist, ArtistMedium
from forms.models import ArtistSignup, ArtistSignupWork, MailchimpSignup


class MailchimpSignupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MailchimpSignup
        fields = ("url", "first_name", "last_name", "email")


class ArtistMediumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ArtistMedium
        fields = ("url", "title")


class ArtistSerializer(serializers.HyperlinkedModelSerializer):
    medium = ArtistMediumSerializer(many=True, read_only=True)

    class Meta:
        model = Artist
        fields = (
            "url",
            "id",
            "name",
            "instagram",
            "website",
            "medium",
            "events",
            "qrcode",
        )


class EventLocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = EventLocation
        fields = (
            "url",
            "title",
            "street",
            "city",
            "state",
            "postal",
            "latitude",
            "longitude",
        )


class EventArtistSerializer(serializers.HyperlinkedModelSerializer):
    medium = ArtistMediumSerializer(many=True, read_only=True)

    class Meta:
        model = Artist
        fields = ("url", "name", "instagram", "website", "medium")


class EventSerializer(serializers.HyperlinkedModelSerializer):
    artists = EventArtistSerializer(many=True, read_only=True)
    location = EventLocationSerializer(read_only=True)

    class Meta:
        model = Event
        fields = (
            "url",
            "id",
            "title",
            "datetime",
            "month",
            "day",
            "time",
            "location",
            "artists",
            "qrcode",
        )


class ArtistSignupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ArtistSignup
        fields = (
            "url",
            "name",
            "email",
            "phone_number",
            "city",
            "state",
            "artist_statement",
            "website",
            "instagram",
        )
