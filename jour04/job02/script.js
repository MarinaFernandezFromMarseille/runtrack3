function jsonValueKey(jsonString, Key) {

    try {
        // Parse la chaîne JSON en un objet JavaScript
        const obj = JSON.parse(jsonString);

        // Vérifie si la clé existe dans l'objet et retourne la valeur associée
        if (obj.hasOwnProperty(key)) {
            return obj[key];
        } else {
            return `La clé "${key}" n'existe pas dans l'objet.`;
        }
    } catch (e) {
        // Gère les erreurs de parsing JSON
        return 'Erreur de parsing JSON : ' + e.message;
    }
}
    

   
    const jsonString = `{
        "name": "La Plateforme_",
        "address": "8 rue d'hozier",
        "city": "Marseille",
        "nb_staff": "11",
        "creation": "2019"
    }`;
    
    const key = "city";
    const value = jsonValueKey(jsonString, key);
    
    console.log(value);  // Affiche : Marseille

 

