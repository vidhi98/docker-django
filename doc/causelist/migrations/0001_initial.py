# Generated by Django 3.1.1 on 2020-09-27 10:29

import causelist.models
import datetime
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Case',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=20, null=True)),
                ('state', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Notes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_by', models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='added_by')),
                ('added_on', models.DateTimeField(default=django.utils.timezone.now, verbose_name='start date')),
                ('note', models.TextField(blank=True, default='', null=True, verbose_name='note')),
                ('case', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='causelist.case')),
            ],
        ),
        migrations.CreateModel(
            name='Documents',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('added_on', models.DateField(default=datetime.date.today, verbose_name='added_on')),
                ('doc_name', models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='doc_name')),
                ('doc_type', models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='doc_type')),
                ('added_by', models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='added_by')),
                ('doc', models.FileField(blank=True, null=True, upload_to=causelist.models.upload_location, verbose_name='document_file')),
                ('case', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='causelist.case')),
            ],
        ),
    ]
