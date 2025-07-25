// ### Ejercicio 11: Encuesta de edades

// > Recibe un array de edades.
// > 
// > 
// > Función que devuelva cuántos son menores, adultos y mayores.
// >

// Array de ejemplo de edades
const edades = [15, 22, 8, 45, 67, 34, 18, 19, 2, 90, 55, 12];

// Función que clasifica las edades
function clasificarEdades(listaDeEdades) {
    // Inicializamos los contadores
    let menores = 0;
    let adultos = 0;
    let mayores = 0;

    // Recorremos cada edad del array
    for (let i = 0; i < listaDeEdades.length; i++) {
        const edad = listaDeEdades[i];

        // Clasificamos según la edad
        if (edad < 18) {
            menores++;
        } else if (edad >= 18 && edad < 65) {
            adultos++;
        } else {
            mayores++;
        }
    }

    // Devolvemos un objeto con los resultados
    return {
        menores: menores,
        adultos: adultos,
        mayores: mayores
    };
}

// Ejecutamos la función y guardamos el resultado
const resultadoEncuesta = clasificarEdades(edades);

// Mostramos el resultado al usuario
alert(
    "Resultados de la encuesta de edades:\n\n" +
    `Menores de edad (0-17): ${resultadoEncuesta.menores}\n` +
    `Adultos (18-64): ${resultadoEncuesta.adultos}\n` +
    `Mayores de 65: ${resultadoEncuesta.mayores}`
);