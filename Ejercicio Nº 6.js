// Pedir al usuario que introduzca los tres ángulos internos del triángulo
let angulo1 = parseFloat(prompt("Introduce el primer ángulo del triángulo (en grados):")); 
// Convertir el primer ángulo ingresado a un número de punto flotante

let angulo2 = parseFloat(prompt("Introduce el segundo ángulo del triángulo (en grados):"));
// Convertir el segundo ángulo ingresado a un número de punto flotante

let angulo3 = parseFloat(prompt("Introduce el tercer ángulo del triángulo (en grados):"));
// Convertir el tercer ángulo ingresado a un número de punto flotante

// Función para verificar si los ángulos forman un triángulo válido
function esTrianguloValido(a1, a2, a3) {
    return (a1 + a2 + a3 === 180);
    // Verifica si la suma de los tres ángulos es exactamente 180 grados, 
    // es necesario para que los ángulos formen un triángulo válido
}

// Usar la función para verificar la validez del triángulo
let esValido = esTrianguloValido(angulo1, angulo2, angulo3);
// Llama a la función `esTrianguloValido` con los ángulos ingresados para verificar si forman un triángulo válido

// Mostrar el resultado en la consola
if (esValido) {
    console.log("Los ángulos introducidos forman un triángulo válido.");
    // Si la función devuelve `true`, imprime que el triángulo es válido
} else {
    console.log("Los ángulos introducidos NO forman un triángulo válido.");
    // Si la función devuelve `false`, imprime que el triángulo no es válido
}