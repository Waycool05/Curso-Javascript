// ### Ejercicio 16: Sistema de votación

// > Array con votos (ej: "A", "B", "A", "C").
// > 
// > 
// > Función que devuelva cuántos votos tuvo cada opción.
// >

// Array de ejemplo con los votos
const votos = ["A", "B", "A", "C", "B", "A", "B", "B", "C", "A"];

// Función que cuenta los votos para cada opción
function contarVotos(listaDeVotos) {
    // Creamos un objeto para almacenar los resultados
    const recuento = {};

    // Recorremos cada voto en el array
    for (let i = 0; i < listaDeVotos.length; i++) {
        const opcion = listaDeVotos[i];

        // Si la opción ya existe en el objeto, incrementamos su contador
        if (recuento[opcion]) {
            recuento[opcion]++;
        } else {
            // Si no existe, la creamos con un contador de 1
            recuento[opcion] = 1;
        }
    }

    return recuento;
}

// Ejecutamos la función para obtener el recuento
const resultadoVotacion = contarVotos(votos);

// Mostramos el resultado al usuario de forma legible
let mensajeSalida = "Recuento de votos:\n\n";
for (const opcion in resultadoVotacion) {
    mensajeSalida += `Opción ${opcion}: ${resultadoVotacion[opcion]} votos\n`;
}

alert(mensajeSalida);