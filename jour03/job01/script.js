   // Sélection des éléments
   const showButton = document.getElementById('showButton');
   const hideButton = document.getElementById('hideButton');
   const text = document.getElementById('text');

   // Afficher le texte au clic sur le bouton "Afficher"
   showButton.addEventListener('click', function() {
       text.style.display = 'block';
       showButton.style.display = 'none';
       hideButton.style.display = 'inline';
   });

   // Cacher le texte au clic sur le bouton "Cacher"
   hideButton.addEventListener('click', function() {
       text.style.display = 'none';
       hideButton.style.display = 'none';
       showButton.style.display = 'inline';
   });
   