window.onload = function() {
    // Sélectionne le bouton par son ID et ajoute un écouteur d'événements
    document.getElementById('button').addEventListener('click', addone);
}

function addone() {
    // Récupère l'élément <p> et incrémente sa valeur
    var compteur = document.getElementById('compteur');
    var count = parseInt(compteur.textContent); // Convertit le texte en nombre
    compteur.textContent = count + 1; // Incrémente et met à jour le texte
}
