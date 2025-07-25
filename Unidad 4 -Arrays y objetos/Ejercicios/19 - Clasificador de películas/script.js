// ### Ejercicio 19: Clasificador de películas

// > Array con películas (título, año, género).
// > 
// > 
// > Función que devuelva las de un género específico.
// >

// Array de ejemplo con películas
const peliculas = [
    { titulo: "Inception", año: 2010, genero: "Ciencia ficción" },
    { titulo: "El Padrino", año: 1972, genero: "Drama" },
    { titulo: "Toy Story", año: 1995, genero: "Animación" },
    { titulo: "Parásitos", año: 2019, genero: "Drama" },
    { titulo: "Interstellar", año: 2014, genero: "Ciencia ficción" },
    { titulo: "Buscando a Nemo", año: 2003, genero: "Animación" }
];

// --- NUEVA FUNCIÓN PARA QUITAR ACENTOS ---
function quitarAcentos(texto) {
    // Mapeamos los caracteres acentuados a sus equivalentes sin acento
    return texto
        .replace(/[áÁ]/g, 'a')
        .replace(/[éÉ]/g, 'e')
        .replace(/[íÍ]/g, 'i')
        .replace(/[óÓ]/g, 'o')
        .replace(/[úÚüÜ]/g, 'u');
}

// Función que filtra las películas por género (ahora usando la normalización)
function filtrarPorGenero(listaDePeliculas, generoBuscado) {
    const peliculasFiltradas = [];

    for (let i = 0; i < listaDePeliculas.length; i++) {
        const pelicula = listaDePeliculas[i];
        const generoNormalizado = quitarAcentos(pelicula.genero.toLowerCase());
        const generoBuscadoNormalizado = quitarAcentos(generoBuscado.toLowerCase());

        if (generoNormalizado === generoBuscadoNormalizado) {
            peliculasFiltradas.push(pelicula);
        }
    }

    return peliculasFiltradas;
}

// Función principal para interactuar con el usuario (sin cambios)
function iniciarClasificador() {
    let genero = prompt("Ingresa el género de película que quieres buscar (ej: Ciencia ficcion, Drama, Animacion):");

    if (!genero) {
        alert("Búsqueda cancelada.");
        return;
    }

    const resultado = filtrarPorGenero(peliculas, genero);

    if (resultado.length > 0) {
        let mensaje = `Películas de género "${genero}":\n\n`;
        for (let i = 0; i < resultado.length; i++) {
            const p = resultado[i];
            mensaje += `${p.titulo} (${p.año})\n`;
        }
        alert(mensaje);
    } else {
        alert(`No se encontraron películas del género "${genero}".`);
    }
}

// Iniciamos el programa
iniciarClasificador();