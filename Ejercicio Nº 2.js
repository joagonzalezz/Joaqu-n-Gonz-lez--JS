// Pedir el primer número al usuario y guardarlo en una variable
let numero1 = parseFloat(prompt("Introduce el primer número:")); 
//prompt: Solicita al usuario que introduzca un valor. se devuelve como una cadena de texto (string).

// Pedir el segundo número al usuario y guardarlo en otra variable
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
//parseFloat: Convierte la cadena de texto a un número, para realizar cálculos con los números introducidos.

// Crear una tercera variable que sume los dos números
let suma = numero1 + numero2;

// Mostrar el resultado en la consola
console.log("La suma de los dos números es: " + suma);
//console.log: Muestra el resultado en la consola.
