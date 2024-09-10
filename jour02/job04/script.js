document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keypress', function(event) {
        // Vérifie si la touche appuyée est une lettre de l'alphabet
        if (event.key.match(/^[a-z]$/i)) {
            var textarea = document.getElementById('keylogger');
            var addition = event.key;
            
            // Vérifie si le focus est actuellement dans le textarea
            if (document.activeElement === textarea) {
                addition += event.key; // Ajoute la lettre deux fois si le focus est dans le textarea
            }

            // Ajoute la lettre (ou les lettres) au contenu du textarea
            textarea.value += addition;
        }
    });
});