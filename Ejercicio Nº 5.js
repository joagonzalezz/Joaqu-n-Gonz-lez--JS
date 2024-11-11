// Pedir la temperatura en grados Fahrenheit al usuario
let fahrenheit = parseFloat(prompt("Introduce la temperatura en grados Fahrenheit:"));

// Función para convertir Fahrenheit a Celsius
function fahrenheitACelsius(f) {
    return (f - 32) * 5 / 9;
}

// Convertir la temperatura a Celsius usando la función
let celsius = fahrenheitACelsius(fahrenheit);
//Función fahrenheitACelsius

// Mostrar el resultado en la consola
console.log("La temperatura en grados Celsius es: " + celsius.toFixed(2));
//celsius.toFixed(2): Redondea el resultado a dos decimales para una presentación más clara en la consola.