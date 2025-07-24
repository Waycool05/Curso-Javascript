// ### Ejercicio 3: Promedio de calificaciones

// > Array con notas numéricas.
// > 
// > 
// > Función que calcule y devuelva el promedio.
// >

// Array con notas numéricas
const notas = [7, 8, 6, 9, 10, 5, 8];

// Función que calcula y devuelve el promedio
function calcularPromedio(arrayNotas) {
    let suma = 0;

    for (let i = 0; i < arrayNotas.length; i++) {
        suma += arrayNotas[i]; // Acumulamos cada nota
    }

    const promedio = suma / arrayNotas.length;
    return promedio; // Devuelve el promedio calculado
}

// Ejecutar y mostrar el resultado
const promedioFinal = calcularPromedio(notas);
console.log("El promedio de las calificaciones es: " + promedioFinal.toFixed(2));
alert("El promedio de las calificaciones es: " + promedioFinal.toFixed(2) + " \nlas notas promediadas fueron: " + notas.join(", "));