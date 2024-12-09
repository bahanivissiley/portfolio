from django.contrib import admin
from main.models import Category, Tag, Comment, Post, Prospect, Portfolio, ImagePortfolio

# Register your models here.

admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Comment)
admin.site.register(Post)
admin.site.register(Prospect)
admin.site.register(Portfolio)
admin.site.register(ImagePortfolio)