document.getElementById('button').addEventListener('click', function() {
    fetch('expression.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('expression').textContent = text;
        })
        .catch(error => {
            console.error('Erreur lors du chargement du fichier :', error);
        });
});