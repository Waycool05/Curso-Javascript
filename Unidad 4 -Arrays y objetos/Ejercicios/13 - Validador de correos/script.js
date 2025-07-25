// ### Ejercicio 13: Validador de correos

// > Recibe un array de emails.
// > 
// > 
// > Función que devuelva solo los válidos (contienen “@”).
// >

// Array de ejemplo con correos electrónicos
const correos = [
    "usuario@dominio.com",
    "contacto.gmail.com",      // Inválido: no tiene "@"
    ".usuario@dominio.com",    // Inválido: empieza con "."
    "info@miempresa.es",
    "soporte",                  // Inválido: no tiene "@"
    "ventas@tienda.com",
    "juan.perez@",              // Inválido: "@" está después de "."
    "alicia@universidad.edu",
    "nombre.apellido@dominio.com" // Válido
];

// Función que filtra y devuelve solo los correos VÁLIDOS
function filtrarCorreosValidos(listaDeCorreos) {
    const correosValidos = [];

    for (let i = 0; i < listaDeCorreos.length; i++) {
        const correo = listaDeCorreos[i];

        // 1. El correo DEBE contener "@"
        if (!correo.includes("@")) {
            continue; // Si no tiene "@", no es válido. Pasamos al siguiente.
        }

        // 2. El correo NO puede empezar con "."
        if (correo.startsWith(".")) {
            continue; // Si empieza con ".", no es válido. Pasamos al siguiente.
        }

        // 3. El "@" debe estar ANTES que el último "."
        // Primero, encontramos la posición del "@"
        const posicionArroba = correo.indexOf("@");
        // Luego, encontramos la posición del último "."
        const posicionUltimoPunto = correo.lastIndexOf(".");

        // Comparamos las posiciones
        if (posicionArroba < posicionUltimoPunto) {
            // Si la condición se cumple, el correo es válido
            correosValidos.push(correo);
        }
    }

    return correosValidos;
}

// 1. Ejecutamos la función
const correosFiltrados = filtrarCorreosValidos(correos);

// 2. Mostramos los resultados
let mensajeSalida = "Correos válidos encontrados:\n\n";
if (correosFiltrados.length > 0) {
    for (let i = 0; i < correosFiltrados.length; i++) {
        mensajeSalida += (i + 1) + ". " + correosFiltrados[i] + "\n";
    }
} else {
    mensajeSalida = "No se encontraron correos válidos que cumplan con las reglas.";
}

alert(mensajeSalida);