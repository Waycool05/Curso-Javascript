// ### Ejercicio 15: Agenda diaria

// > Crea un objeto con días como claves y actividades como valores.
// > 
// > 
// > Función que muestre actividades por día.
// >
// 1. Creamos el objeto agenda con días y actividades
const agenda = {
    lunes: ["Reunión con equipo", "Estudiar JavaScript"],
    martes: ["Gimnasio", "Comprar la cena"],
    miércoles: ["Proyecto personal", "Llamar a mamá"],
    jueves: ["Revisión de código", "Ver serie"],
    viernes: ["Salir con amigos", "Descansar"],
    sábado: ["Pasear al perro", "Ordenar la casa"],
    domingo: ["Planificar la semana", "Relajarse"]
};

// 2. Función para mostrar las actividades de un día específico
function mostrarActividadesDia() {
    // Pedimos al usuario que ingrese el día
    let diaBuscado = prompt("Ingresa el día de la semana para ver tus actividades (ej: lunes, martes, etc.):");

    // Si el usuario cancela o deja el campo vacío, salimos de la función
    if (diaBuscado===null || diaBuscado==="") {
        alert("Operación cancelada.");
        return;
    }

    // Normalizamos la entrada del usuario a minúsculas para que coincida con las claves del objeto
    diaBuscado = diaBuscado.toLowerCase();

    // 3. Verificamos si el día existe en nuestra agenda
    if (agenda.hasOwnProperty(diaBuscado)) {
        // Si existe, obtenemos el array de actividades
        const actividades = agenda[diaBuscado];
        
        // Creamos el mensaje para mostrar
        let mensaje = `Actividades para el ${diaBuscado}:\n\n`;
        for (let i = 0; i < actividades.length; i++) {
            mensaje += `${i + 1}. ${actividades[i]}\n`;
        }
        
        // Mostramos el resultado
        alert(mensaje);
    } else {
        // Si el día no existe, informamos al usuario
        alert(`No tienes actividades programadas para el día "${diaBuscado}".`);
    }
}

// 4. Función para mostrar toda la agenda
function mostrarTodaLaAgenda() {
    let mensaje = "Tu agenda semanal:\n\n";
    // Recorremos los días (claves) del objeto agenda
    for (const dia in agenda) {
        const actividades = agenda[dia];
        mensaje += `--- ${dia.toUpperCase()} ---\n`;
        for (let i = 0; i < actividades.length; i++) {
            mensaje += `  - ${actividades[i]}\n`;
        }
        mensaje += "\n"; // Espacio entre días
    }
    alert(mensaje);
}

// 5. Menú principal para que el usuario elija qué hacer
function iniciarAgenda() {
    let continuar = true;

    while (continuar) {
        // Mostramos el menú de opciones
        const opcion = prompt(
            "Bienvenido a tu agenda diaria. ¿Qué quieres hacer?\n\n" +
            "1. Ver actividades de un día específico\n" +
            "2. Ver toda la agenda\n" +
            "3. Salir"
        );
        if (opcion===null || opcion==="") {
        alert("Operación cancelada.");
        return;
        }

        // Procesamos la elección del usuario
        switch (opcion) {
            case "1":
                mostrarActividadesDia();
                break;
            case "2":
                mostrarTodaLaAgenda();
                break;
            case "3":
                // Confirmamos si realmente quiere salir
                if (confirm("¿Estás seguro de que quieres salir?")) {
                    continuar = false;
                    alert("¡Hasta luego!");
                }
                break;
            default:
                alert("Opción no válida. Por favor, elige 1, 2 o 3.");
                break;
        }
    }
}

// Iniciamos el programa
iniciarAgenda();