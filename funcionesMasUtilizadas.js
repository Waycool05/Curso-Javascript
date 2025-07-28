function promptConCancelacion(mensaje) {
    const respuesta = prompt(mensaje);
    // Si el usuario presiona "Cancelar", prompt devuelve null.
    if (respuesta === null) {
        alert("Operación Cancelada por el Usuario. ");
        return
    } 
}

function quitarAcentos(texto) {
    // Mapeamos los caracteres acentuados a sus equivalentes sin acento
    return texto
        .replace(/[áÁ]/g, 'a')
        .replace(/[éÉ]/g, 'e')
        .replace(/[íÍ]/g, 'i')
        .replace(/[óÓ]/g, 'o')
        .replace(/[úÚüÜ]/g, 'u');
}

export {
    promptConCancelacion,
    quitarAcentos,
};