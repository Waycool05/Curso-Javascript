// 2. **Biblioteca de Libros**
//     - Clase Libro con título y autor.
//     - Clase Biblioteca con método buscarPorAutor(autor).
//     - Guarda la biblioteca en localStorage.

 // 1. Clase Libro
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

// 2. Clase Biblioteca
class Biblioteca {
    constructor() {
        // Inicializamos el array de libros. 
        // Primero, intentamos cargar lo que haya en localStorage.
        this.libros = this.cargarDesdeLocalStorage();
    }

    // Método para agregar un libro
    agregarLibro(libro) {
        // Verificamos si el libro ya existe (por título y autor)
        const existe = this.libros.some(l => 
            l.titulo.toLowerCase() === libro.titulo.toLowerCase() && 
            l.autor.toLowerCase() === libro.autor.toLowerCase()
        );
        if (existe) {
            alert(`El libro "${libro.titulo}" de "${libro.autor}" ya existe en la biblioteca.`);
            return false;
        }
        this.libros.push(libro);
        this.guardarEnLocalStorage(); // Actualizamos localStorage
        alert(`Libro "${libro.titulo}" agregado con éxito.`);
        return true;
    }

    // Método para buscar libros por autor
    buscarPorAutor(autor) {
        // Filtramos el array para encontrar libros cuyo autor coincida (ignorando mayúsculas/minúsculas)
        const resultados = this.libros.filter(libro => 
            libro.autor.toLowerCase().includes(autor.toLowerCase())
        );
        return resultados;
    }

    // Método para mostrar todos los libros
    mostrarTodosLosLibros() {
        if (this.libros.length === 0) {
            alert("La biblioteca está vacía.");
            return;
        }
        let mensaje = "Biblioteca de Libros:\n\n";
        this.libros.forEach((libro, index) => {
            mensaje += `${index + 1}. "${libro.titulo}" - ${libro.autor}\n`;
        });
        alert(mensaje);
    }

    // Método para guardar la biblioteca en localStorage
    guardarEnLocalStorage() {
        // Convertimos el array de libros a una cadena JSON para guardarlo
        localStorage.setItem('biblioteca', JSON.stringify(this.libros));
    }

    // Método para cargar la biblioteca desde localStorage
    cargarDesdeLocalStorage() {
        const bibliotecaGuardada = localStorage.getItem('biblioteca');
        // Si hay algo guardado, lo parseamos de JSON a un array. Si no, devolvemos un array vacío.
        return bibliotecaGuardada ? JSON.parse(bibliotecaGuardada) : [];
    }
}

// --- Interacción con el usuario ---

// Creamos una instancia de nuestra Biblioteca
const miBiblioteca = new Biblioteca();

function iniciarBiblioteca() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt(
            "--- Biblioteca de Libros ---\n\n" +
            "1. Agregar Libro\n" +
            "2. Buscar Libros por Autor\n" +
            "3. Mostrar Todos los Libros\n" +
            "4. Salir\n\n" +
            "Elige una opción:"
        );

        switch (opcion) {
            case "1":
                const titulo = prompt("Introduce el título del libro:");
                const autor = prompt("Introduce el autor del libro:");
                if (titulo && autor) {
                    const nuevoLibro = new Libro(titulo, autor);
                    miBiblioteca.agregarLibro(nuevoLibro);
                } else {
                    alert("Datos inválidos. Asegúrate de introducir un título y un autor.");
                }
                break;

            case "2":
                const autorBusqueda = prompt("Introduce el nombre del autor a buscar:");
                if (autorBusqueda) {
                    const resultados = miBiblioteca.buscarPorAutor(autorBusqueda);
                    if (resultados.length > 0) {
                        let mensaje = `Libros encontrados para "${autorBusqueda}":\n\n`;
                        resultados.forEach((libro, index) => {
                            mensaje += `${index + 1}. "${libro.titulo}" - ${libro.autor}\n`;
                        });
                        alert(mensaje);
                    } else {
                        alert(`No se encontraron libros del autor "${autorBusqueda}".`);
                    }
                } else {
                    alert("Debes introducir un nombre de autor.");
                }
                break;

            case "3":
                miBiblioteca.mostrarTodosLosLibros();
                break;

            case "4":
                if (confirm("¿Estás seguro de que quieres salir? Los cambios se guardarán.")) {
                    continuar = false;
                    alert("Saliendo de la biblioteca. ¡Hasta luego!");
                }
                break;

            default:
                alert("Opción no válida. Por favor, elige 1, 2, 3 o 4.");
                break;
        }
    }
}

// Iniciamos la biblioteca
iniciarBiblioteca();