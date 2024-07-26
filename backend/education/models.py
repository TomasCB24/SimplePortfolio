from django.db import models
from .validators import validate_file_image_extension

class Education(models.Model):
    degree = models.CharField(max_length=250)
    school = models.CharField(max_length=250)
    image = models.ImageField(upload_to='education', validators=[validate_file_image_extension])
    years = models.CharField(max_length=250)

    class Meta:
        verbose_name = 'Education'
        verbose_name_plural = 'Education'

    def __str__(self):
        return self.degree
