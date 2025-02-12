# Generated by Django 4.2.4 on 2024-07-23 12:10

from django.db import migrations, models
import education.validators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('degree', models.CharField(max_length=250)),
                ('school', models.CharField(max_length=250)),
                ('image', models.ImageField(upload_to='education', validators=[education.validators.validate_file_image_extension])),
                ('years', models.CharField(max_length=250)),
            ],
            options={
                'verbose_name': 'Education',
                'verbose_name_plural': 'Education',
            },
        ),
    ]
