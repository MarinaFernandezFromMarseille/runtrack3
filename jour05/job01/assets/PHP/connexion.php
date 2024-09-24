<?php
session_start(); // Démarrer la session dès le début

// Paramètres de connexion à la base de données
$host = 'localhost';
$dbname = 'job01jour5';
$user = 'root';
$password = '';

try {
    // Créer une connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer les données envoyées depuis le formulaire
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Vérifier si les champs sont remplis
    if (empty($email) || empty($password)) {
        $response = [
            'status' => 'error',
            'message' => 'Veuillez remplir tous les champs.'
        ];
        echo json_encode($response);
        exit;
    }

    // Requête pour vérifier si l'utilisateur existe dans la base de données
    $stmt = $pdo->prepare("SELECT * FROM utilisateur WHERE email = :email");
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Si l'utilisateur est trouvé
    if ($user) {
        // Vérifier le mot de passe
        if (password_verify($password, $user['password'])) {
            // Le mot de passe est correct
            $_SESSION['email'] = $user['email'];

            $response = [
                'status' => 'success',
                'message' => 'Connexion réussie.'
            ];
        } else {
            // Le mot de passe est incorrect
            $response = [
                'status' => 'error',
                'message' => 'Mot de passe incorrect.'
            ];
        }
    } else {
        // Aucun utilisateur trouvé avec cet email
        $response = [
            'status' => 'error',
            'message' => 'Aucun utilisateur trouvé avec cet email.'
        ];
    }

    // Envoyer la réponse en JSON
    header('Content-Type: application/json');
    echo json_encode($response);

} catch (PDOException $e) {
    // En cas d'erreur, renvoyer un message d'erreur
    $response = [
        'status' => 'error',
        'message' => 'Erreur de connexion à la base de données : ' . $e->getMessage()
    ];

    // Ajouter un code HTTP 500 (erreur serveur)
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode($response);
}
