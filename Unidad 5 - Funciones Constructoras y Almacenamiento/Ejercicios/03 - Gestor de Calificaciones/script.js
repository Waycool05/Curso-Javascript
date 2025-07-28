// 3. **Gestor de Calificaciones**
//     - Clase Alumno con array de notas.
//     - Método para calcular promedio.
//     - Guarda cada alumno con sus notas en localStorage.

// --- CLASES Y LÓGICA DE NEGOCIO ---

// 1. Clase Alumno
class Alumno {
    constructor(nombre) {
        this.nombre = nombre;
        this.notas = [];
    }

    // Método para agregar una nota al alumno
    agregarNota(nota) {
        if (!isNaN(nota) && nota >= 0) {
            this.notas.push(nota);
        } else {
            console.error(`Nota inválida para el alumno ${this.nombre}: ${nota}`);
        }
    }

    // Método para calcular el promedio del alumno
    calcularPromedio() {
        if (this.notas.length === 0) {
            return 0; // Evita dividir por cero
        }
        const suma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return suma / this.notas.length;
    }
}

// 2. Clase GestorDeCalificaciones
class GestorDeCalificaciones {
    constructor() {
        // Inicializamos el array de alumnos. 
        // Primero, intentamos cargar lo que haya en localStorage.
        this.alumnos = this.cargarDesdeLocalStorage();
    }

    // Método para agregar un nuevo alumno
    agregarAlumno(nombre) {
        // Verificamos si el alumno ya existe
        const existe = this.alumnos.some(a => a.nombre.toLowerCase() === nombre.toLowerCase());
        if (existe) {
            alert(`El alumno "${nombre}" ya existe.`);
            return false;
        }
        const nuevoAlumno = new Alumno(nombre);
        this.alumnos.push(nuevoAlumno);
        this.guardarEnLocalStorage();
        alert(`Alumno "${nombre}" agregado.`);
        return true;
    }

    // Método para agregar una nota a un alumno existente
    agregarNotaAAlumno(nombreAlumno, nota) {
        const alumno = this.alumnos.find(a => a.nombre.toLowerCase() === nombreAlumno.toLowerCase());
        if (alumno) {
            alumno.agregarNota(nota);
            this.guardarEnLocalStorage();
            alert(`Nota ${nota} agregada al alumno "${nombreAlumno}".`);
            return true;
        } else {
            alert(`Alumno "${nombreAlumno}" no encontrado.`);
            return false;
        }
    }

    // Método para ver las calificaciones de un alumno
    verCalificaciones(nombreAlumno) {
        const alumno = this.alumnos.find(a => a.nombre.toLowerCase() === nombreAlumno.toLowerCase());
        if (alumno) {
            const promedio = alumno.calcularPromedio();
            let mensaje = `Calificaciones de ${alumno.nombre}:\n\n`;
            if (alumno.notas.length > 0) {
                alumno.notas.forEach((nota, index) => {
                    mensaje += `Nota ${index + 1}: ${nota}\n`;
                });
                mensaje += `\nPromedio: ${promedio.toFixed(2)}`;
            } else {
                mensaje += "No tiene notas registradas.";
            }
            alert(mensaje);
        } else {
            alert(`Alumno "${nombreAlumno}" no encontrado.`);
        }
    }

    // Método para mostrar todos los alumnos y su promedio
    mostrarTodosLosAlumnos() {
        if (this.alumnos.length === 0) {
            alert("No hay alumnos registrados.");
            return;
        }
        let mensaje = "Lista de Alumnos y sus Promedios:\n\n";
        this.alumnos.forEach(alumno => {
            const promedio = alumno.calcularPromedio();
            mensaje += `${alumno.nombre}: Promedio = ${promedio.toFixed(2)}\n`;
        });
        alert(mensaje);
    }

    // Métodos de persistencia (igual que en ejercicios anteriores)
    guardarEnLocalStorage() {
        localStorage.setItem('gestorDeCalificaciones', JSON.stringify(this.alumnos));
    }

    cargarDesdeLocalStorage() {
        const datosGuardados = localStorage.getItem('gestorDeCalificaciones');
        return datosGuardados ? JSON.parse(datosGuardados) : [];
    }
}


// --- INTERACCIÓN CON EL USUARIO ---

// Creamos una instancia de nuestro gestor
const miGestor = new GestorDeCalificaciones();

function iniciarGestor() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt(
            "--- Gestor de Calificaciones ---\n\n" +
            "1. Agregar Nuevo Alumno\n" +
            "2. Agregar Nota a un Alumno\n" +
            "3. Ver Calificaciones de un Alumno\n" +
            "4. Ver Todos los Alumnos\n" +
            "5. Salir\n\n" +
            "Elige una opción:"
        );

        if (opcion === null) {
            if (confirm("¿Estás seguro de que quieres salir? Los cambios se guardarán.")) {
                continuar = false;
                alert("Saliendo del gestor. ¡Hasta luego!");
            }
            continue;
        }

        switch (opcion) {
            case "1":
                const nombre = prompt("Introduce el nombre del nuevo alumno:");
                if (nombre) {
                    miGestor.agregarAlumno(nombre);
                } else {
                    alert("Nombre no válido.");
                }
                break;

            case "2":
                const nombreBusqueda = prompt("Introduce el nombre del alumno al que quieres agregar una nota:");
                if (nombreBusqueda) {
                    const notaStr = prompt("Introduce la nota a agregar:");
                    const nota = parseFloat(notaStr);
                    if (!isNaN(nota) && nota >= 0) {
                        miGestor.agregarNotaAAlumno(nombreBusqueda, nota);
                    } else {
                        alert("Nota no válida.");
                    }
                } else {
                    alert("Nombre no válido.");
                }
                break;

            case "3":
                const nombreVer = prompt("Introduce el nombre del alumno a consultar:");
                if (nombreVer) {
                    miGestor.verCalificaciones(nombreVer);
                } else {
                    alert("Nombre no válido.");
                }
                break;

            case "4":
                miGestor.mostrarTodosLosAlumnos();
                break;

            case "5":
                if (confirm("¿Estás seguro de que quieres salir? Los cambios se guardarán.")) {
                    continuar = false;
                    alert("Saliendo del gestor. ¡Hasta luego!");
                }
                break;

            default:
                alert("Opción no válida. Por favor, elige del 1 al 5.");
                break;
        }
    }
}

// Iniciamos el gestor
iniciarGestor();

