const form = document.getElementById('registration-form');

        // Fonction de validation du prénom
        function validatePrenom(prenom) {
            if (prenom.length < 2) {
                return 'Le prénom doit contenir au moins 2 caractères';
            }
            return '';
        }

        // Fonction de validation du nom
        function validateNom(nom) {
            if (nom.length < 2) {
                return 'Le nom doit contenir au moins 2 caractères';
            }
            return '';
        }

        // Fonction de validation de l'email
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return 'Veuillez entrer une adresse email valide';
            }
            return '';
        }

        // Fonction de validation du code postal
        function validateCodePostal(codePostal) {
            const postalRegex = /^[0-9]{5}$/;
            if (!postalRegex.test(codePostal)) {
                return 'Le code postal doit être un nombre à 5 chiffres';
            }
            return '';
        }

        // Fonction de validation du mot de passe
        function validatePassword(password) {
            if (password.length < 6) {
                return 'Le mot de passe doit contenir au moins 6 caractères';
            }
            return '';
        }

        form.addEventListener('input', (event) => {
            const target = event.target;
            let errorMessage = '';

            if (target.id === 'prenom') {
                errorMessage = validatePrenom(target.value);
            }

            if (target.id === 'nom') {
                errorMessage = validateNom(target.value);
            }

            if (target.id === 'email') {
                errorMessage = validateEmail(target.value);
            }

            if (target.id === 'code-postal') {
                errorMessage = validateCodePostal(target.value);
            }

            if (target.id === 'password') {
                errorMessage = validatePassword(target.value);
            }

            // Affiche le message d'erreur sous le champ correspondant
            document.getElementById(`${target.id}-error`).textContent = errorMessage;
        });