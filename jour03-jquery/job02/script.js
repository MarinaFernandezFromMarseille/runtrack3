$(document).ready(function() {
    const $dropZone = $('#dropZone');
    const $imageContainer = $('#imageContainer');
    const $images = $('.draggable');
    const $shuffleButton = $('#shuffleButton');

    // Ajouter l'événement "dragstart" à chaque image
    $images.on('dragstart', function(e) {
        e.originalEvent.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            $(e.target).addClass('hidden');  // Rendre l'image temporairement invisible
        }, 0);
    });

    $images.on('dragend', function(e) {
        $(e.target).removeClass('hidden');  // Rendre l'image visible après le drag
    });

    // Permettre de drop dans la zone
    $(document).ready(function() {
        const $dropZone = $('#dropZone');
        const $imageContainer = $('#imageContainer');
        const $images = $('.draggable');
        const $shuffleButton = $('#shuffleButton');
    
        // Ajouter l'événement "dragstart" à chaque image
        $images.on('dragstart', function(e) {
            e.originalEvent.dataTransfer.setData('text/plain', e.target.id);
            setTimeout(() => {
                $(e.target).addClass('hidden');  // Rendre l'image temporairement invisible
            }, 0);
        });
    
        $images.on('dragend', function(e) {
            $(e.target).removeClass('hidden');  // Rendre l'image visible après le drag
        });
    
        // Permettre de drop dans la zone
        $dropZone.on('dragover', function(e) {
            e.preventDefault();
            $(this).addClass('over');
        });
    
        $dropZone.on('dragleave', function() {
            $(this).removeClass('over');
        });
    
        $dropZone.on('drop', function(e) {
            e.preventDefault();
            const imgId = e.originalEvent.dataTransfer.getData('text/plain');
            const $draggedElement = $('#' + imgId);
            // Vérifier si l'image est déjà dans la zone de drop pour éviter les duplications
            if (!$draggedElement.parent().is($dropZone)) {
                $(this).append($draggedElement);  // Ajouter l'image à la zone de drop
            }
            $(this).removeClass('over');
        });
    
        // Fonction pour mélanger les images
        function shuffleImages() {
            const $imagesArray = $imageContainer.children().toArray();
            // Mélanger les images
            for (let i = $imagesArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [$imagesArray[i], $imagesArray[j]] = [$imagesArray[j], $imagesArray[i]];
            }
            // Réordonner les images dans le conteneur
            $imagesArray.forEach(img => $imageContainer.append(img));
        }
    
        // Ajouter un événement au bouton pour mélanger les images
        $shuffleButton.on('click', shuffleImages);
    });
    

    // Fonction pour mélanger les images
    function shuffleImages() {
        const $imagesArray = $imageContainer.children().toArray();
        // Mélanger les images
        for (let i = $imagesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [$imagesArray[i], $imagesArray[j]] = [$imagesArray[j], $imagesArray[i]];
        }
     
    }

    // Ajouter un événement au bouton pour mélanger les images
    $shuffleButton.on('click', shuffleImages);
});
