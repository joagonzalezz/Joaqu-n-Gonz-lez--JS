const prompt = require('prompt-sync')();

// Solicita al usuario que ingrese un color
let color = prompt("Ingresa un color: ").toLowerCase();

// Función que traduce el color al inglés usando un switch
function AdquirirColorIngles(color) {
    switch (color) {
        case 'azul':
            return 'blue';
        case 'rojo':
            return 'red';
        case 'verde':
            return 'green';
        case 'naranja':
            return 'orange';
        case 'amarillo':
            return 'yellow';
        default:
            return 'Color not found';
    }
}

// Obtiene el color en inglés y lo muestra en la consola
let colorEnIngles = AdquirirColorIngles(color);
console.log(colorEnIngles);
