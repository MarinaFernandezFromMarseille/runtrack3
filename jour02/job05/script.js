document.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPosition = window.scrollY;
    var scrollPercentage = scrollPosition / scrollHeight;

    // Calcul de la couleur en fonction du pourcentage de défilement
    // L'intensité de la couleur verte varie de 0 à 255
    var greenValue = Math.min(255, Math.floor(255 * scrollPercentage));

    // Met à jour la couleur du fond du footer
    footer.style.backgroundColor = `rgb(0, ${greenValue}, 0)`;
});