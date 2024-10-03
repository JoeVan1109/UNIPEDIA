function banner () {

    document.addEventListener("DOMContentLoaded", function () {
        let title = document.querySelector(".title-product-peluche");
        let imgPeluche = document.querySelector(".banniere-img-peluche");
    
        title.classList.add("active-title");
        imgPeluche.classList.add("active-banniere");
    });
}

function product() {
    const cards = document.querySelectorAll('.card-1, .card-2, .card-3, .card-4');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-peluche-active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Déclenche quand 10% de la carte est visible
    });

    cards.forEach(card => observer.observe(card));
}

// Appeler la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', product);

banner();
