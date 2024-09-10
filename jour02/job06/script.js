(function() {
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let currentPosition = 0;

    document.addEventListener('keydown', function(e) {
        // Vérifie si la touche appuyée correspond à la séquence attendue
        if (e.key === konamiCode[currentPosition]) {
            currentPosition++;

            // Si la séquence complète est entrée
            if (currentPosition === konamiCode.length) {
                activateKonamiCode();
                currentPosition = 0; // Réinitialise pour permettre une réactivation
            }
        } else {
            currentPosition = 0; // Réinitialise la position si la séquence est incorrecte
        }
    });

    function activateKonamiCode() {
        // Applique le style Konami à la page
        document.body.classList.add('konami-style');
       
    }
})();