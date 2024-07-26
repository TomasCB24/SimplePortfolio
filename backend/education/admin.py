from django.contrib import admin
from .models import Education

class EducationAdmin(admin.ModelAdmin):
  list_display = ('id', 'school', 'degree', 'image', 'years')
  list_display_links = ('id', 'degree')
  search_fields = ('school', 'degree')
  list_per_page = 20

admin.site.register(Education, EducationAdmin)