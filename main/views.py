from django.shortcuts import render, get_object_or_404, redirect
from django.db.models import Count
from main.models import Portfolio, Post, Prospect, Comment, Category, Tag

# Create your views here.

def index(request):
    posts = Post.objects.all().order_by('-created_at')[:3]
    context = {'posts' : posts}
    return render(request, 'index.html', context=context)


def portfolio(request):
    portfolios = Portfolio.objects.all()
    context = {'portfolios' : portfolios}
    return render(request, 'portfolio.html', context=context)


def blog(request):
    posts = Post.objects.filter(is_published=True)  # Afficher seulement les posts publiés

    # Initialiser les filtres
    category_slug = request.GET.get('category')
    tag_query = request.GET.get('tag', '')  # Recherche par nom de tag
    date_filter = request.GET.get('date')

    # Filtrage par catégorie
    if category_slug:
        posts = posts.filter(category__slug=category_slug)

    # Filtrage par tag (par nom insensible à la casse)
    if tag_query:
        posts = posts.filter(tags__name__icontains=tag_query)

    # Filtrage par date
    if date_filter:
        posts = posts.filter(created_at__date=date_filter)

    # Trier les posts par date décroissante
    posts = posts.order_by('-created_at')

    # Récupérer les catégories et les tags disponibles
    categories = Category.objects.annotate(post_count=Count('post'))
    tags = Tag.objects.all()

    return render(request, 'blogs.html', {
        'posts': posts,
        'categories': categories,
        'tags': tags,
        'tag_query': tag_query,
        'category_slug': category_slug,
        'date_filter': date_filter,
    })




def blog_details(request, slug):
    post = get_object_or_404(Post, slug=slug)
    comments = post.comments.filter(is_approved=True).order_by('-created_at')


    return render(request, 'details_blog.html', {
        'post': post,
        'comments': comments,
    })


def contact(request):
    return render(request, 'contact.html', context={})



def add_contact(request):
    return render(request, 'contact.html', context={})