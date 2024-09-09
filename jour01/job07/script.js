function jourtravaille(date) {
    // Liste des jours fériés en 2020
    const joursFeries = [
        new Date(2020, 0, 1),   // 1er Janvier
        new Date(2020, 3, 13),  // Lundi de Pâques (13 Avril)
        new Date(2020, 4, 1),   // Fête du Travail (1er Mai)
        new Date(2020, 4, 8),   // Victoire 1945 (8 Mai)
        new Date(2020, 4, 21),  // Ascension (21 Mai)
        new Date(2020, 5, 1),   // Lundi de Pentecôte (1er Juin)
        new Date(2020, 6, 14),  // Fête Nationale (14 Juillet)
        new Date(2020, 7, 15),  // Assomption (15 Août)
        new Date(2020, 10, 1),  // Toussaint (1er Novembre)
        new Date(2020, 10, 11), // Armistice 1918 (11 Novembre)
        new Date(2020, 11, 25)  // Noël (25 Décembre)
    ];

    // Extraire jour, mois et année
    const jour = date.getDate();
    const mois = date.getMonth() + 1; // Mois commence à 0, on ajoute 1
    const annee = date.getFullYear();

    // Vérifier si c'est un week-end (samedi ou dimanche)
    const jourSemaine = date.getDay();
    if (jourSemaine === 6 || jourSemaine === 0) {
        console.log(`Non, le ${jour}/${mois}/${annee} est un week-end`);
        return;
    }

    // Vérifier si la date correspond à un jour férié en 2020
    for (let i = 0; i < joursFeries.length; i++) {
        if (date.getTime() === joursFeries[i].getTime()) {
            console.log(`Le ${jour}/${mois}/${annee} est un jour férié`);
            return;
        }
    }

    // Si ce n'est ni un week-end ni un jour férié
    console.log(`Oui, le ${jour}/${mois}/${annee} est un jour travaillé`);
}

// Exemple d'utilisation de la fonction
let date = new Date(2020, 0, 1);  // 1er janvier 2020
jourtravaille(date);

date = new Date(2020, 6, 14);     // 14 juillet 2020 (jour férié)
jourtravaille(date);

date = new Date(2020, 5, 20);     // 20 juin 2020 (samedi)
jourtravaille(date);

date = new Date(2020, 3, 15);     // 15 avril 2020 (jour travaillé)
jourtravaille(date);
