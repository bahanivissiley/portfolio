
// script.js

// Attendre que la page soit complètement chargée
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading");
    const content = document.getElementById("content");

    // Masquer l'écran de chargement après 1 seconde
    setTimeout(() => {
        loadingScreen.style.display = "none";
        content.style.display = "block";
    }, 200);
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
}

function HideMenu() {
    const menu = document.getElementById('icon');
    menu.classList.remove('show');
}

const ratio = 0.2
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            console.log('Element visible')
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        } else {
            console.log('Element invisible')
        }
    });

}

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observer.observe(r)
})


// Sélection de la barre de navigation
const headerNav = document.querySelector('.header_nav');

// Fonction pour gérer l'effet de défilement
function handleScroll() {
    const logo = document.getElementById('logo');
    const headerNav = document.querySelector('.header_nav'); // Définition de headerNav
    const elements = document.getElementsByClassName("menu-icon"); // Collection d'éléments
    const liens = document.querySelectorAll(".header-others .header_nav ul li a");

    if (window.scrollY > 50) { // Seuil de 50px avant de fixer la barre
        headerNav.classList.add('nav-fixed');
        logo.src = "{% static 'images/logo.png' %}";

        // Appliquer la couleur aux éléments menu-icon (pour tous les éléments dans la collection)
        Array.from(elements).forEach(element => {
            element.style.color = "black";
        });

        // Changer la couleur des liens
        liens.forEach((lien) => {
            lien.style.color = "black"; // Change la couleur à noir
        });

    } else {
        headerNav.classList.remove('nav-fixed');
        logo.src = "{% static 'images/logo-lt.png' %}";

        // Vérifier si l'élément avec l'ID 'show' existe
        const icon = document.getElementById('icon');

        if (icon.classList.contains('show')) {
            Array.from(elements).forEach(element => {
                element.style.color = "white"; // Remettre la couleur par défaut
            });
            // Réinitialiser la couleur des liens
            liens.forEach((lien) => {
                lien.style.color = "black"; // Remettre la couleur blanche par défaut
            });
        } else {
            Array.from(elements).forEach(element => {
                element.style.color = "white"; // Remettre la couleur par défaut
            });

            // Réinitialiser la couleur des liens
            liens.forEach((lien) => {
                lien.style.color = "white"; // Remettre la couleur blanche par défaut
            });
        }





    }
}

// Appel de la fonction à chaque scroll
window.addEventListener('scroll', handleScroll);




// script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.bento-container');
    const masonry = new Masonry(container, {
        itemSelector: '.bento-item',
        columnWidth: 250,
        gutter: 20
    });
});
