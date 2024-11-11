// Pedir el primer string al usuario y guardarlo en una variable
let string1 = prompt("Introduce el primer string:");

// Pedir el segundo string al usuario y guardarlo en otra variable
let string2 = prompt("Introduce el segundo string:");

// Crear una variable que compare si ambos strings son iguales
let sonIguales = string1 === string2;
//string1 === string2: Compara si ambos strings son exactamente iguales. true si son idénticos y false si no

// Crear una variable que compare la longitud de ambos strings
let mismaLongitud = string1.length === string2.length;
//string1.length === string2.length: Compara si la longitud de ambos strings es la misma.

// Mostrar los resultados en la consola
console.log("¿Los strings son iguales?: " + sonIguales);
console.log("¿Ambos strings tienen la misma longitud?: " + mismaLongitud);
