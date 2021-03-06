from django.db import models
from django.core.exceptions import ValidationError


class About(models.Model):
    title = models.CharField(max_length=255)
    website = models.URLField(max_length=255)
    description = models.TextField()

    class Meta:
        verbose_name = "About"
        verbose_name_plural = "About"

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if About.objects.exists() and not self.pk:
            raise ValidationError(
                "Only one About object can be created, please update the existing object."
            )
        return super().save(*args, **kwargs)

    @property
    def developer_list(self):
        if self.developers.exists():
            return ", ".join([developer.name for developer in self.developers.all()])

    @property
    def organizers_list(self):
        if self.organizers.exists():
            return ", ".join([organizers.name for organizer in self.organizers.all()])


class AboutOrganizer(models.Model):
    _order = models.PositiveSmallIntegerField(blank=True, null=True)
    about = models.ForeignKey(
        to="about.About", on_delete=models.CASCADE, related_name="organizers"
    )
    name = models.CharField(max_length=255)
    website = models.URLField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name = "About Organizer"
        verbose_name_plural = "About Organizers"
        ordering = ["_order"]

    def __str__(self):
        return self.name


class AboutDeveloper(models.Model):
    _order = models.PositiveSmallIntegerField(blank=True, null=True)
    about = models.ForeignKey(
        to="about.About", on_delete=models.CASCADE, related_name="developers"
    )
    name = models.CharField(max_length=255)
    website = models.URLField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name = "About Developer"
        verbose_name_plural = "About Developers"
        ordering = ["_order"]

    def __str__(self):
        return self.name


class AboutFAQ(models.Model):
    _order = models.PositiveSmallIntegerField(blank=True, null=True)
    about = models.ForeignKey(
        to="about.About", on_delete=models.CASCADE, related_name="faqs"
    )
    question = models.CharField(max_length=255)
    answer = models.TextField()
    is_mobile = models.BooleanField(default=True)

    class Meta:
        verbose_name = "About FAQ"
        verbose_name_plural = "About FAQs"
        ordering = ["_order"]

    def __str__(self):
        return self.question
