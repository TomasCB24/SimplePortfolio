from django.db import models

class Languaje(models.Model):
    languaje = models.CharField(max_length=100)
    level = models.CharField(max_length=100)

    def __str__(self):
        return self.languaje
