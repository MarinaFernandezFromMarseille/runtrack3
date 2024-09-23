const form = document.getElementById('registration-form');

// Fonction de validation du prélastname
function validatefirstname(firstname) {
    if (firstname.length < 2) {
        return 'Le prénom doit contenir au moins 2 caractères';
    }
    return '';
}

// Fonction de validation du lastname
function validatelastname(lastname) {
    if (lastname.length < 2) {
        return 'Le nom doit contenir au moins 2 caractères';
    }
    return '';
}

// Fonction de validation de l'email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Veuillez entrer une address email valide';
    }
    return '';
}

// Fonction de validation du code postal
function validateCodePostal(codePostal) {
    const postalRegex = /^[0-9]{5}$/;
    if (!postalRegex.test(codePostal)) {
        return 'Le code postal doit être un lastnamebre à 5 chiffres';
    }
    return '';
}

// Fonction de validation du password
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.;?!*@]).+$/;
    if (!passwordRegex.test(password)) {
        return 'Le password doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial parmi .;?!*@';
    }

    if (password.length < 12) {
        return 'Le password doit contenir au moins 12 caractères';
    }
    return '';
}

// Validation en direct
form.addEventListener('input', (event) => {
    const target = event.target;
    let errorMessage = '';

    if (target.id === 'firstname') {
        errorMessage = validatefirstname(target.value);
    }

    if (target.id === 'lastname') {
        errorMessage = validatelastname(target.value);
    }

    if (target.id === 'email') {
        errorMessage = validateEmail(target.value);
    }

    if (target.id === 'postal_code') {
        errorMessage = validateCodePostal(target.value);
    }

    if (target.id === 'password') {
        errorMessage = validatePassword(target.value);
    }

    // Affiche le message d'erreur sous le champ correspondant
    document.getElementById(`${target.id}-error`).textContent = errorMessage;
});

// Soumission du formulaire
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Données à envoyer au script PHP
    const formData = new FormData(form);

    // Faire la requête avec fetch
    fetch('../PHP/inscription.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Convertir la réponse en JSON
    .then(data => {
        // Afficher le message retourné par PHP dans l'élément #result
        document.getElementById('result').textContent = data.message;
    })
    .catch(error => console.error('Erreur:', error));
});
