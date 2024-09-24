document.querySelector('#form-connexion form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les données du formulaire
    const formData = new FormData(this);

    // Faire une requête POST à connexion.php
    fetch('./assets/PHP/connexion.php', { // Corrige le chemin si nécessaire
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Convertir la réponse en JSON
    .then(data => {
        // Afficher le message retourné par PHP dans l'élément #result
        document.getElementById('result').textContent = data.message;

        if (data.status === 'success') {
            // Si la connexion est réussie, afficher un message de succès et masquer le formulaire de connexion
            setTimeout(function() {
                document.getElementById('form-connexion').style.display = 'none';
                document.getElementById('result').textContent = "Vous êtes connecté avec succès !";
                
                // Optionnel: Tu peux afficher d'autres éléments réservés aux utilisateurs connectés
                location.reload(); // Recharger la page pour afficher les éléments de session
            }, 3000);
        }
    })
    .catch(error => console.error('Erreur:', error));
});
