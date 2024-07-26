import tempfile
from django.test import TestCase
from .models import Education

class EducationModelUnitTestCase(TestCase):
    def setUp(self):
        self.education = Education.objects.create(
            school='University of Seville',
            degree='Bachelor of Science in Computer Science',
            image=tempfile.NamedTemporaryFile(suffix='.png').name,
            years="2023-2024"
        )

    def test_education_model(self):
        data = self.education
        self.assertIsInstance(data, Education)
