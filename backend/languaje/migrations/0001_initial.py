# Generated by Django 4.2.4 on 2024-07-23 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Languaje',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('languaje', models.CharField(max_length=100)),
                ('level', models.CharField(max_length=100)),
            ],
        ),
    ]
