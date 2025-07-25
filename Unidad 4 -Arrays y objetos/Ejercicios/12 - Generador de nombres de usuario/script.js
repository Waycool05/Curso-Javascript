// ### Ejercicio 12: Generador de nombres de usuario

// > Recibe un array de nombres y apellidos.
// > 
// > 
// > Función que cree un nombre de usuario (ej: juan.perez).
// >

// Array de ejemplo con nombres y apellidos
const usuarios = [
    { nombre: "Juan", apellido: "Pérez" },
    { nombre: "María", apellido: "Gómez" },
    { nombre: "Carlos", apellido: "López" },
    { nombre: "Ana", apellido: "Martínez" },
    { nombre: "Pedro", apellido: "Rodríguez" }
];

// Función que genera un nombre de usuario
function generarNombreDeUsuario(usuario) {
    // Convertimos el nombre y apellido a minúsculas
    const nombreMinuscula = usuario.nombre.toLowerCase();
    const apellidoMinuscula = usuario.apellido.toLowerCase();
    
    // Creamos el nombre de usuario combinando ambos con un punto
    const nombreUsuario = nombreMinuscula + '.' + apellidoMinuscula;
    
    return nombreUsuario;
}

// Función para procesar la lista de usuarios y mostrar los resultados
function procesarUsuarios(listaDeUsuarios) {
    let salida = "Nombres de usuario generados:\n\n";
    
    // Recorremos el array de usuarios
    for (let i = 0; i < listaDeUsuarios.length; i++) {
        const usuarioActual = listaDeUsuarios[i];
        
        // Generamos el nombre de usuario para el usuario actual
        const usuarioGenerado = generarNombreDeUsuario(usuarioActual);
        
        // Añadimos la información al mensaje de salida
        salida += `${usuarioActual.nombre} ${usuarioActual.apellido} -> ${usuarioGenerado}\n`;
    }
    
    // Mostramos el resultado final al usuario
    alert(salida);
}

// Ejecutamos la función principal
procesarUsuarios(usuarios);