const dropZone = document.getElementById('dropZone');
        const imageContainer = document.getElementById('imageContainer');
        const images = document.querySelectorAll('.draggable');
        const shuffleButton = document.getElementById('shuffleButton');

        // Ajouter l'événement "dragstart" à chaque image
        images.forEach(img => {
            img.addEventListener('dragstart', function (e) {
                e.dataTransfer.setData('text/plain', e.target.id);
                setTimeout(() => {
                    e.target.style.visibility = 'hidden';  // Rendre l'image temporairement invisible
                }, 0);
            });

            img.addEventListener('dragend', function (e) {
                e.target.style.visibility = 'visible';  // Rendre l'image visible après le drag
            });
        });

        // Permettre de drop dans la zone
        dropZone.addEventListener('dragover', function (e) {
            e.preventDefault();
            dropZone.classList.add('over');
        });

        dropZone.addEventListener('dragleave', function (e) {
            dropZone.classList.remove('over');
        });

        dropZone.addEventListener('drop', function (e) {
            e.preventDefault();
            const imgId = e.dataTransfer.getData('text');
            const draggedElement = document.getElementById(imgId);
            dropZone.appendChild(draggedElement);
            dropZone.classList.remove('over');
        });

        // Fonction pour mélanger les images
        function shuffleImages() {
            const imagesArray = Array.from(imageContainer.children);
            // Mélanger les images
            for (let i = imagesArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
            }
            // Réordonner les images dans le conteneur
            imagesArray.forEach(img => imageContainer.appendChild(img));
        }

        // Ajouter un événement au bouton pour mélanger les images
        shuffleButton.addEventListener('click', shuffleImages);