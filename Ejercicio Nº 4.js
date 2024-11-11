// Pedir un número al usuario y guardarlo en una variable
let numero = parseFloat(prompt("Introduce un número:"));

// Función para verificar si un número es divisible por 5
function esDivisiblePor5(num) {
    return num % 5 === 0;
}

// Usar la función para verificar la divisibilidad y guardar el resultado
let resultado = esDivisiblePor5(numero);

// Mostrar el resultado en la consola
console.log("El número " + numero + " es divisible por 5: " + resultado);
