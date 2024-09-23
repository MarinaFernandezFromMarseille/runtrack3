<?php
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION['user_id'])) {
    header('Location: connexion.html'); // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    exit;
}

// Afficher un message de bienvenue
echo "Bienvenue, " . htmlspecialchars($_SESSION['prenom']) . " !";
?>

<a href="logout.php">Se déconnecter</a>
