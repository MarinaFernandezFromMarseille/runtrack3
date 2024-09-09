

function isYearBiOrNot ($année) {

    if (($année % 4 == 0 && $année % 100 != 0) || ($année % 400 == 0)){

        console.log("year is bi!");
        return true;
        
    }

    else {
        console.log("year is hetero :(");
        return false;
    }


}

isYearBiOrNot(2024);