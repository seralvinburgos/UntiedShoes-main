from django.contrib import admin

# Register your models here.

from .models import Brand, ShoeType, ShoeGender, ShoeColor, ShoeMaterial,  Shoe

admin.site.register(Brand)
admin.site.register(ShoeType)
admin.site.register(ShoeColor)
admin.site.register(ShoeGender)
admin.site.register(ShoeMaterial)
admin.site.register(Shoe)
