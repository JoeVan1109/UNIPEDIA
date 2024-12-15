// Menu burger

const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

function openNav() {
    sidenav.classList.add("active");
}

function closeNav() {
    sidenav.classList.remove("active");
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);


const navEl = document.querySelector('.bandeau');
const navLinksEl = document.querySelectorAll('.nav-link');

let lastScrollTop = 0; // Variable pour stocker la position précédente du scroll

window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY;
    // Position actuelle du scroll
    if (scrollTop > lastScrollTop) {
        // Scroll vers le bas
        navEl.classList.add('navbar-scrolled');
    } else {
        // Scroll vers le haut
        navEl.classList.remove('navbar-scrolled');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Met à jour la position précédente du scroll
});

