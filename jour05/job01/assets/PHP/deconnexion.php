<?php
session_start();

// Détruire la session pour déconnecter l'utilisateur
session_unset();  // Supprimer toutes les variables de session
session_destroy(); // Détruire la session

// Rediriger vers la page d'accueil après déconnexion
header("Location: ../../index.php");
exit();
