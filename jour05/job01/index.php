<?php
session_start(); // Démarrer la session

// Vérifier si l'utilisateur est connecté
if (isset($_SESSION['email'])) {
    $email= $_SESSION['email'];
    echo "<p>Bonjour, $email !</p>";
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Corrige les chemins des fichiers CSS -->
    <link rel="stylesheet" href="./assets/CSS/connexion.css">
    <link rel="stylesheet" href="./assets/CSS/inscription.css">

    <title>Accueil</title>
</head>

<body>
    <header>

        <h1>Jour05</h1>
        <p class = "title">job 01</p>
        <nav>
            <ul>
                <li><a href="./assets/includes/_inscription.html">Inscription</a></li>
                <li><a href="./assets/includes/_connexion.html">Connexion</a></li>
            </ul>
        </nav>

    </header>

    <!-- Ajout des liens pour naviguer entre les pages d'inscription et de connexion -->

    <!-- Corrige les chemins des fichiers JS -->
    <script src="./assets/JS/inscription.js"></script>
    <script src="./assets/JS/connexion.js"></script>
</body>

</html>