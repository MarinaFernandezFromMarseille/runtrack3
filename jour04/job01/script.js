// On ajoute un  évènement à l' élément HTML portant l'id "button". Lorsque ce bouton est cliqué, la fonction associée est exécutée.
document.getElementById('button').addEventListener('click', function() {
    // On envoie une requète HTTP vers le fichier "expression.txt" et on récupère le texte répondu.
    fetch('expression.txt')
        .then(response => response.text())
        .then(text => {
            // On met à jour le contenu de l' élément HTML portant l'id "expression" avec le texte récupéré.
            document.getElementById('expression').textContent = text;
        })
        .catch(error => {
            // Si une erreur survient lors du chargement du fichier, on l'affiche dans la console.
            console.error('Erreur lors du chargement du fichier :', error);
        });
});
