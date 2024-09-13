<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css?<?php echo time(); ?>">
    <title>Document</title>
</head>
<body>

  <!-- Bouton pour mélanger les images -->
  <button id="shuffleButton">Mélanger les images</button>

  <!-- Conteneur pour les images -->
  <div id="imageContainer">
    <?php
    // Récupérer tous les fichiers dans le dossier avec glob
    $files = glob("./pics/*.{jpg,jpeg,png,gif,bmp,PNG}", GLOB_BRACE);
    
    // Limiter à 6 images
    $files = array_slice($files, 0, 6);
    
    // Afficher chaque image
    foreach ($files as $file) {
        $filename = basename($file);
        echo "<img id='img_$filename' class='draggable' src='./pics/$filename' draggable='true' alt='Image'>";
    }
    ?>
  </div>

  <!-- Zone de drop -->
  <div id="dropZone">Déposez ici</div>

  <!-- Inclure jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <!-- Inclure le script JavaScript -->
  <script src="script.js"></script>
</body>
</html>
