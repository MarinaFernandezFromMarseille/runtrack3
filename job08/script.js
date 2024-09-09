// Fonction qui vérifie si un nombre est premier
function estPremier(nombre) {
    if (nombre <= 1) {
        return false; // Les nombres inférieurs ou égaux à 1 ne sont pas premiers
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; // Si le nombre est divisible par un autre, il n'est pas premier
        }
    }
    return true; // Si aucun diviseur n'a été trouvé, le nombre est premier
}

// Fonction qui prend deux variables et vérifie si ce sont des nombres premiers
function sommenombrespremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b; // Retourne la somme si les deux sont premiers
    } else {
        return false; // Retourne false si l'un des deux ou les deux ne sont pas premiers
    }
}

// Exemple d'utilisation
console.log(sommenombrespremiers(3, 5));  // 8 (3 et 5 sont premiers)
console.log(sommenombrespremiers(4, 5));  // false (4 n'est pas premier)
console.log(sommenombrespremiers(11, 13)); // 24 (les deux sont premiers)
