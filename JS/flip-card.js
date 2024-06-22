document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne l'élément avec la classe "card"
    const card = document.querySelector('.card');

    // Ajoute un gestionnaire d'événements de clic à la carte
    card.addEventListener('click', function () {
        // Bascule la classe "is-flipped" sur l'élément "card"
        card.classList.toggle('is-flipped');
    });

    // Assurez-vous que la carte démarre avec la face avant visible
    card.classList.remove('is-flipped');
});
