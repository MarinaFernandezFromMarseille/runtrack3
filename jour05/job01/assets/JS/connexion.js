document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les données du formulaire
    const formData = new FormData(this);

    // Faire une requête POST à connexion.php
    fetch('../PHP/inscription.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Convertir la réponse en JSON
    .then(data => {
        // Afficher le message retourné par PHP dans l'élément #result
        document.getElementById('result').textContent = data.message;

        if (data.status === 'success') {
            // Si la connexion est réussie, rediriger vers une autre page (par exemple dashboard.php)
            window.location.href = 'dashboard.php';
        }
    })
    .catch(error => console.error('Erreur:', error));
});
