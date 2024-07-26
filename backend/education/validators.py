import os
from django.core.exceptions import ValidationError

def validate_file_image_extension(value):
  ext = os.path.splitext(value.name)[1]
  valid_extensions = ['.jpg', '.jpeg', '.png', '.gif']  
  if not ext.lower() in valid_extensions:
    raise ValidationError('Unsupported file extension')