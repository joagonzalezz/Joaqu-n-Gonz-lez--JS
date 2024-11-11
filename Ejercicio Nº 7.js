const prompt = require('prompt-sync')();

let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

function obtenerMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
//Si num1 es mayor que num2, retorna num1; de lo contrario, retorna num2.
}
let mayor = obtenerMayor(numero1, numero2);
console.log("El número mayor es: " + mayor);