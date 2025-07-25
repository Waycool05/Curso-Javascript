// ### Ejercicio 9: Ordenador de puntajes

// > Array de puntajes (números).
// > 
// > 
// > Función que devuelva los puntajes ordenados de mayor a menor.
// >
function ordenarPuntajes() {
    // 1. Pedir datos al usuario
    let entrada = prompt("Ingresa los puntajes separados por comas (ej: 100,50,75):");
    
    // 2. Convertir entrada a array de números
    let puntajes = entrada.split(',').map(function(item) {
        return parseFloat(item.trim());
    });

    // 3. Ordenar usando función tradicional (sin flecha)
    puntajes.sort(function(a, b) {
        // Explicación del sort:
        // Si a > b → devuelve número positivo (a va antes)
        // Si a < b → devuelve número negativo (b va antes)
        // Si son iguales → devuelve 0
        return b - a; // Orden descendente (mayor a menor)
    });

    // 4. Mostrar resultado
    alert("Puntajes ordenados:\n" + puntajes.join(', '));
}

// Ejecutar el programa
ordenarPuntajes();