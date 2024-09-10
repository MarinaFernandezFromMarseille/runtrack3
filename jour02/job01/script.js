 // Fonction pour récupérer et afficher la citation
 function citation() {
    // Récupération du texte de l'élément ayant l'id 'citation'
    var texteCitation = document.getElementById('citation').innerText;
    // Affichage du texte dans la console de développement
    console.log(texteCitation);
}

// Ajout de l'écouteur d'événement au clic sur le bouton
document.getElementById('button').addEventListener('click', citation);