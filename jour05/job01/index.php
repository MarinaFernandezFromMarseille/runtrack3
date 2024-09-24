<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <link rel="stylesheet" href="./assets/CSS/index.css">
    <title>Accueil</title>
    <style>
        /* Masquer les formulaires par défaut */
        #form-connexion, #form-inscription {
            display: none;
        }
        .error-message {
            color: red;
        }
    </style>
</head>

<body>
    <header>
        <?php
        session_start(); // Démarrer la session

        // Vérifier si l'utilisateur est connecté
        if (isset($_SESSION['email'])) {
            $email = $_SESSION['email'];
            echo "<p>Bonjour, $email !</p>";
            echo '
            <form method="POST" action= "./assets/PHP/deconnexion.php">
                <button type="submit">Déconnexion</button>
            </form>';
        } else {
            echo "<p>Bienvenue sur notre site !</p>";
        }
        ?>
        <h1>Jour05</h1>
        <p class="title">job 01</p>
        <nav>
            <ul>
                <li><a href="#" id="show-inscription">Inscription</a></li>
                <li><a href="#" id="show-connexion">Connexion</a></li>
            </ul>
        </nav>
    </header>

    <!-- Formulaire d'inscription -->
    <div id="form-inscription">
        <h2>Inscription</h2>
        <form id="registration-form" method="post">
            <label for="firstname">Prénom</label>
            <input type="text" name="firstname" id="firstname" placeholder="Entrez votre prénom" required>
            <span class="error-message" id="firstname-error"></span>

            <label for="lastname">Nom</label>
            <input type="text" name="lastname" id="lastname" placeholder="Entrez votre nom" required>
            <span class="error-message" id="lastname-error"></span>

            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Entrez votre email" required>
            <span class="error-message" id="email-error"></span>

            <label for="address">Adresse</label>
            <input type="text" name="address" id="address" placeholder="Entrez votre adresse" required>

            <label for="postal_code">Code postal</label>
            <input type="text" name="postal_code" id="postal_code" placeholder="Entrez votre code postal" required>
            <span class="error-message" id="postal_code-error"></span>

            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe" required autocomplete="current-password">
            <span class="error-message" id="password-error"></span>

            <input type="submit" value="S'inscrire">
        </form>
    </div>

    <!-- Formulaire de connexion -->
    <div id="form-connexion">
        <h2>Connexion</h2>
        <form id="login-form" method="post">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Entrez votre email" required autocomplete="username">

            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe" required autocomplete="current-password">

            <input type="submit" value="Connexion">
        </form>
    </div>

    <div id="result"></div> <!-- Pour afficher les messages après inscription/connexion -->

    <script src="./assets/JS/inscription.js"></script>
    <script src="./assets/JS/connexion.js"></script>

    <script>
        // Gestion de l'affichage des formulaires
        document.getElementById('show-inscription').addEventListener('click', function() {
            document.getElementById('form-inscription').style.display = 'block';
            document.getElementById('form-connexion').style.display = 'none';
        });

        document.getElementById('show-connexion').addEventListener('click', function() {
            document.getElementById('form-connexion').style.display = 'block';
            document.getElementById('form-inscription').style.display = 'none';
        });
    </script>
</body>
</html>
