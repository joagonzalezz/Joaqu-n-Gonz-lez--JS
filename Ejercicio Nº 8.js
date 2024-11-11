const prompt = require('prompt-sync')();

let año = prompt("Ingrese el año: ");
año = parseInt(año);

function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let bisiesto = esBisiesto(año);

if (bisiesto) {
    console.log("El año ingresado es bisiesto");
} else {
    console.log("El año ingresado no es bisiesto");
}