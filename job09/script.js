function tri(numbers, order) {
    // Fonction de comparaison personnalisée
    if (order === "asc") {
        // Tri ascendant
        numbers.sort(function(a, b) {
            return a - b; // Si a est plus petit que b, le place avant
        });
    } else if (order === "desc") {
        // Tri décroissant
        numbers.sort(function(a, b) {
            return b - a; // Si b est plus petit que a, le place avant
        });
    } else {
        // Si "order" n'est ni "asc" ni "desc", on retourne le tableau sans modification
        console.log("L'ordre spécifié n'est pas valide, utilisez 'asc' ou 'desc'.");
        return numbers;
    }
    
    // Retourne le tableau trié
    return numbers;
}

// Exemples d'utilisation
let tableau1 = [5, 3, 8, 1, 9];
console.log(tri(tableau1, "asc"));   // Résultat: [1, 3, 5, 8, 9]

let tableau2 = [5, 3, 8, 1, 9];
console.log(tri(tableau2, "desc"));  // Résultat: [9, 8, 5, 3, 1]
