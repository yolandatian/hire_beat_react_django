# Generated by Django 3.0.7 on 2020-07-21 04:39

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_auto_20200721_0017'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='save_limit',
            field=models.IntegerField(default=5, validators=[django.core.validators.MaxValueValidator(1000), django.core.validators.MinValueValidator(5)]),
        ),
    ]
