<?php
// Configuration de la connexion à la base de données
$host = 'localhost'; // Adresse du serveur de base de données
$dbname = 'utilisateurs'; // Nom de la base de données
$user = 'root'; // Nom d'utilisateur de la base de données
$pass = ''; // Mot de passe de la base de données

// Création de la connexion à la base de données
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass); // La syntaxe correcte
    $pdo->setAttribute(PDO::ATTR_ERRMODE,  PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Connexion échouée: ' . $e->getMessage()]);
    exit;
}

// Requête pour récupérer les utilisateurs
$sql = 'SELECT * FROM utilisateurs'; // Assurez-vous que "utilisateurs" est le nom correct de votre table

try {
    $stmt = $pdo->query($sql);
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Ajout de l'en-tête pour indiquer que la réponse est du JSON
    header('Content-Type: application/json');
    echo json_encode($users); // On retourne les utilisateurs sous forme de JSON
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erreur lors de la récupération des utilisateurs: ' . $e->getMessage()]);
}
