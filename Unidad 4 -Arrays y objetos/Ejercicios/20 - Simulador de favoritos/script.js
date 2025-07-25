// ### Ejercicio 20: Simulador de favoritos

// > Array de objetos con nombre y favorito: true/false.
// > 
// > 
// > Función que devuelva los elementos marcados como favoritos.
// >

// Array de ejemplo con elementos y su estado de favorito
const elementos = [
    { nombre: "Música clásica", favorito: true },
    { nombre: "Película de acción", favorito: false },
    { nombre: "Libro de fantasía", favorito: true },
    { nombre: "Videojuego de estrategia", favorito: false },
    { nombre: "Podcast de tecnología", favorito: true },
    { nombre: "Receta de cocina", favorito: false }
];

// Función que filtra y devuelve solo los elementos favoritos
function obtenerFavoritos(listaDeElementos) {
    const favoritos = [];

    // Recorremos cada elemento de la lista
    for (let i = 0; i < listaDeElementos.length; i++) {
        const elemento = listaDeElementos[i];

        // Verificamos si la propiedad 'favorito' es true
        if (elemento.favorito) {
            // Si es favorito, lo agregamos al array de resultados
            favoritos.push(elemento);
        }
    }

    return favoritos;
}

// Ejecutamos la función para obtener la lista de favoritos
const listaDeFavoritos = obtenerFavoritos(elementos);

// Mostramos los resultados al usuario
let mensajeSalida = "Tus elementos favoritos son:\n\n";

if (listaDeFavoritos.length > 0) {
    for (let i = 0; i < listaDeFavoritos.length; i++) {
        const favorito = listaDeFavoritos[i];
        mensajeSalida += `- ${favorito.nombre}\n`;
    }
} else {
    mensajeSalida = "Aún no tienes elementos favoritos.";
}

alert(mensajeSalida);

