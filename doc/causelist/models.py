from django.db import models
import datetime
from datetime import date
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _

# Create your models here.


def upload_location(instance, filename):
    ext_set = filename.split(".")
    model = str(instance.__class__.__name__).lower()
    return "%s/%s.%s" % (model, timezone.now(), ext_set[-1])


def self(args):
    pass


class Case(models.Model):
    name = models.CharField(max_length=20, blank=True, null=True)
    state = models.CharField(max_length=20, blank=True, null=True)
    # causelist = JSONField("causelist", default="causelist", blank=True, null=True)

    def __str__(self):
        return self.name


class Notes(models.Model):
    case = models.ForeignKey(Case, models.CASCADE, blank=True, null=True)
    added_by = models.CharField(_("added_by"), max_length=255, blank=True, null=True, default="")
    added_on = models.DateTimeField(_("start date"), blank=False, null=False, default=timezone.now)
    note = models.TextField(_("note"), blank=True, null=True, default="")

    def __str__(self):
        return self.added_by


class Documents(models.Model):
    case = models.ForeignKey(Case, models.CASCADE, blank=True, null=True)
    added_on = models.DateField(_("added_on"), blank=False, null=False, default=date.today)
    doc_name = models.CharField(_("doc_name"), max_length=255, blank=True, null=True, default="")
    doc_type = models.CharField(_("doc_type"), max_length=255, blank=True, null=True, default="")
    added_by = models.CharField(_("added_by"), max_length=255, blank=True, null=True, default="")
    doc = models.FileField(_("document_file"), upload_to=upload_location, null=True, blank=True)

    def __str__(self):
        return self.doc_name







