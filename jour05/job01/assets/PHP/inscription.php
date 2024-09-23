<?php
// Paramètres de connexion à la base de données
$host = 'localhost';
$dbname = 'job01jour5';
$user = 'root';
$password = '';

try {
    // Créer une connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer les données envoyées depuis JavaScript
    $firstname = htmlspecialchars(trim($_POST['firstname'] ?? ''));
    $lastname = htmlspecialchars(trim($_POST['lastname'] ?? ''));
    $address = htmlspecialchars(trim($_POST['address'] ?? ''));
    $codePostal = htmlspecialchars(trim($_POST['postal_code'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $password = $_POST['password'] ?? ''; // Pas besoin de nettoyer le mot de passe avant le hachage

    // Vérifier si l'email existe déjà
    $stmt = $pdo->prepare("SELECT * FROM utilisateur WHERE email = :email");
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Si l'utilisateur existe déjà
    if ($user) {
        $response = [
            'status' => 'error',
            'message' => 'Cet email est déjà utilisé : ' . htmlspecialchars($user['email'])
        ];
    } else {
        // Si l'email n'existe pas, insérer les nouvelles données
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $insertStmt = $pdo->prepare("INSERT INTO utilisateur (firstname, lastname, address, postal_code, email, password) VALUES (:firstname, :lastname, :address, :postal_code, :email, :password)");
        $insertStmt->execute([
            'firstname' => $firstname,
            'lastname' => $lastname,
            'address' => $address,
            'postal_code' => $codePostal,
            'email' => $email,
            'password' => $hashedPassword
        ]);

        $response = [
            'status' => 'success',
            'message' => 'Inscription réussie !'
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
?>

