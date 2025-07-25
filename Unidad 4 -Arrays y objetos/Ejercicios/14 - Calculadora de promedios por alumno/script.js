// ### Ejercicio 14: Calculadora de promedios por alumno

// > Array de objetos con nombre y array de notas.
// > 
// > 
// > Función que retorne el promedio por alumno.
// >

// Array de ejemplo con los datos de los alumnos
const alumnos = [
    {
        nombre: "Ana",
        notas: [8, 9, 7, 10]
    },
    {
        nombre: "Carlos",
        notas: [6, 5, 7, 8]
    },
    {
        nombre: "María",
        notas: [10, 10, 9, 10]
    },
    {
        nombre: "Luis",
        notas: [4, 6, 5, 7]
    }
];

// Función que calcula el promedio de un array de notas
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

// Función principal que procesa a todos los alumnos y calcula sus promedios
function calcularPromediosPorAlumno(listaDeAlumnos) {
    // Creamos un array para guardar los resultados
    const resultados = [];

    // Recorremos cada alumno de la lista
    for (let i = 0; i < listaDeAlumnos.length; i++) {
        const alumno = listaDeAlumnos[i];
        
        // Calculamos el promedio del alumno actual
        const promedio = calcularPromedio(alumno.notas);
        
        // Guardamos el nombre y el promedio en un nuevo objeto
        resultados.push({
            nombre: alumno.nombre,
            promedio: promedio
        });
    }

    return resultados;
}

// 1. Ejecutamos la función para obtener los promedios
const promediosFinales = calcularPromediosPorAlumno(alumnos);

// 2. Mostramos los resultados al usuario
let mensajeSalida = "Promedios de los alumnos:\n\n";
for (let i = 0; i < promediosFinales.length; i++) {
    const resultado = promediosFinales[i];
    mensajeSalida += `${resultado.nombre}: ${resultado.promedio.toFixed(2)}\n`;
}

alert(mensajeSalida);