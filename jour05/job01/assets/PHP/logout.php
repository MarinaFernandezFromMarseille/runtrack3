<?php
session_start();
session_destroy(); // Détruire la session en cours
header('Location: connexion.html'); // Rediriger vers la page de connexion
exit;
?>
