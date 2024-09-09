// Déclaration de la fonction afficherjourssemaines
function afficherjourssemaines() {
    // Création du tableau des jours de la semaine
    const jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    
    // Boucle for pour afficher chaque jour du tableau
    for (let i = 0; i < jourssemaines.length; i++) {
        console.log(jourssemaines[i]);
    }
}

// Appel de la fonction pour afficher les jours de la semaine
afficherjourssemaines();
