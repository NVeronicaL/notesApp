from django.contrib import admin

# Models
from apps.users.models  import User

# Register your models here.
admin.site.register(User)