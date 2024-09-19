// Fonction pour récupérer les utilisateurs
async function fetchUsers() {
    try {
        console.log('Tentative de récupération des utilisateurs...');
        const response = await fetch('users.php'); // On récupère les données depuis le fichier PHP
        console.log('Réponse reçue:', response);

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json(); // On convertit les données en JSON
        console.log('Données JSON:', data);

        if (Array.isArray(data)) {
            const tableBody = document.querySelector('#users tbody'); // On sélectionne le tbody de la table

            // On vide le tableau avant de le remplir pour éviter les doublons
            tableBody.innerHTML = '';

            // On boucle sur chaque utilisateur pour créer une ligne dans le tableau
            data.forEach(user => {
                const row = document.createElement('tr'); // On crée une nouvelle ligne

                // On crée une cellule <td> pour chaque donnée (ID, nom, prénom, email)
                const idCell = document.createElement('td');
                idCell.textContent = user.id;

                const nomCell = document.createElement('td');
                nomCell.textContent = user.nom;

                const prenomCell = document.createElement('td');
                prenomCell.textContent = user.prenom;

                const emailCell = document.createElement('td');
                emailCell.textContent = user.email;

                // On ajoute toutes les cellules <td> dans la ligne <tr>
                row.appendChild(idCell);
                row.appendChild(nomCell);
                row.appendChild(prenomCell);
                row.appendChild(emailCell);

                // On ajoute la ligne complète <tr> dans le <tbody> du tableau
                tableBody.appendChild(row);
            });
            console.log('Table mise à jour avec succès');
        } else {
            console.error('Les données reçues ne sont pas un tableau:', data);
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
}

// Appel de la fonction pour récupérer les utilisateurs lorsque le bouton est cliqué
document.getElementById('update-btn').addEventListener('click', fetchUsers);
