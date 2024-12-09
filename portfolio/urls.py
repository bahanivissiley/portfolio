from django.contrib import admin
from django.urls import path, include
from main.views import index, portfolio, blog, blog_details, contact
from django.conf.urls.static import static
from ckeditor_uploader import views as ckeditor_views
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='home'),
    path('portfolio/', portfolio, name="portfolio"),
    path('blog/', blog, name='blog'),
    path('blog/<slug:slug>/', blog_details, name='details_blog'),
    path('contact/', contact, name='contact'),
    path('ckeditor/', include('ckeditor_uploader.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
