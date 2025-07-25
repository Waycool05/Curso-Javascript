// ### Ejercicio 17: Simulador de encuesta de satisfacción

// > Array de objetos con usuario y puntaje (1–5).
// > 
// > 
// > Función que devuelva el promedio y los usuarios que votaron 5.
// >

// Array de ejemplo con usuarios y sus puntajes de satisfacción
const encuesta = [
    { usuario: "Ana", puntaje: 5 },
    { usuario: "Carlos", puntaje: 3 },
    { usuario: "María", puntaje: 5 },
    { usuario: "Luis", puntaje: 2 },
    { usuario: "Pedro", puntaje: 4 },
    { usuario: "Sofía", puntaje: 5 }
];

// Función que procesa la encuesta
function analizarEncuesta(listaDeVotos) {
    let sumaTotal = 0;
    const usuariosSatisfechos = []; // Array para guardar los usuarios que votaron 5

    // 1. Recorremos cada voto para calcular el total y encontrar a los usuarios satisfechos
    for (let i = 0; i < listaDeVotos.length; i++) {
        const voto = listaDeVotos[i];
        sumaTotal += voto.puntaje; // Sumamos el puntaje al total

        // Si el puntaje es 5, agregamos el usuario al array de satisfechos
        if (voto.puntaje === 5) {
            usuariosSatisfechos.push(voto.usuario);
        }
    }

    // 2. Calculamos el promedio
    const promedio = sumaTotal / listaDeVotos.length;

    // 3. Devolvemos un objeto con ambos resultados
    return {
        promedio: promedio,
        usuariosSatisfechos: usuariosSatisfechos
    };
}

// Ejecutamos la función para obtener los resultados
const resultados = analizarEncuesta(encuesta);

// Mostramos los resultados al usuario
let mensajeSalida = "Resultados de la encuesta de satisfacción:\n\n";
mensajeSalida += `Promedio general: ${resultados.promedio.toFixed(2)}\n\n`;
mensajeSalida += "Usuarios que votaron 5 (Muy satisfechos):\n";

if (resultados.usuariosSatisfechos.length > 0) {
    for (let i = 0; i < resultados.usuariosSatisfechos.length; i++) {
        mensajeSalida += `- ${resultados.usuariosSatisfechos[i]}\n`;
    }
} else {
    mensajeSalida += "Ningún usuario votó 5.\n";
}

alert(mensajeSalida);

