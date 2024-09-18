document.getElementById('filtrer').addEventListener('click', function() {
    // Récupère les valeurs des champs de formulaire
    const id = document.getElementById('id').value.trim();
    const nom = document.getElementById('nom').value.trim();
    const type = document.getElementById('type').value.trim();

    // Récupère les données du fichier JSON
    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            // Filtre les données
            const filteredData = data.filter(pokemon => {
                return (!id || String(pokemon.id) === id) &&
                       (!nom || (pokemon.name && pokemon.name.french.toLowerCase().includes(nom.toLowerCase()))) &&
                       (!type || (pokemon.type && pokemon.type.includes(type)));
            }); console.log(type);

            // Affiche les résultats
            const resultsList = document.getElementById('results');
            resultsList.innerHTML = ''; // Vide la liste précédente

            filteredData.forEach(pokemon => {
                const li = document.createElement('li');
                li.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name.french}, Type: ${pokemon.type}`;
                resultsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement du fichier JSON :', error);
        });
});

