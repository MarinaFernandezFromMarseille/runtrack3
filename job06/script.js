/*

function fizzbuzz() {
    let valeur = Math.floor(Math.random() * 152);


    for (let i = 0; i > 0 && i < 151; i++) {

        if (valeur * 3 );
        {
        console.log(Fizz);
    }

        elseif (valeur * 5);
        {
        console.log(Buzz);
}

        elseif (valeur * 3 && valeur * 5){
        console.log(FizzBuzz) ;
        }

        else {
            console.log(valeur)
        }


}*/

function fizzbuzz() {
    // Génération d'un nombre aléatoire entre 0 et 151
    let valeur = Math.floor(Math.random() * 152);

    // Boucle qui parcourt les nombres de 1 à 151 (l'intervalle que vous mentionnez)
    for (let i = 1; i <= valeur; i++) {

       
        // Si 'i' est divisible par 3, affiche "Fizz"
        if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Si 'i' est divisible par 5, affiche "Buzz"
        else if (i % 5 === 0) {
            console.log("Buzz");
        }

         // Si 'i' est divisible par 3 et 5, affiche "FizzBuzz"
        else if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Si aucune des conditions ci-dessus n'est remplie, affiche la valeur de 'i'
        else {
            console.log(i);
        }
    }
}
