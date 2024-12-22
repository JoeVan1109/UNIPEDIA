// Burger menu

// Retrieving html elements for use in Javascript
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Function to open the side navigation
function openNav() {
    sidenav.classList.add("active");
}

// Function to close the side navigation
function closeNav() {
    sidenav.classList.remove("active");
}

// Add event listeners to open and close buttons
openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

const navEl = document.querySelector('.bandeau');
const navLinksEl = document.querySelectorAll('.nav-link');

let lastScrollTop = 0; // Variable to store the previous scroll position

// Add event listener for window scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Current scroll position
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navEl.classList.add('navbar-scrolled');
    } else {
        // Scrolling up
        navEl.classList.remove('navbar-scrolled');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Update the previous scroll position
});

