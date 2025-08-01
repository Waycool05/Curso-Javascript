function cancelInput(mensaje) {
    const respuesta = prompt(mensaje);
    // Si el usuario presiona "Cancelar", prompt devuelve null.
    if (respuesta === null) {
        alert("Operación Cancelada por el Usuario. ");
        return
    } 
}

function removeAccents(texto) {
    // Mapeamos los caracteres acentuados a sus equivalentes sin acento
    return texto
        .replace(/[áÁ]/g, 'a')
        .replace(/[éÉ]/g, 'e')
        .replace(/[íÍ]/g, 'i')
        .replace(/[óÓ]/g, 'o')
        .replace(/[úÚüÜ]/g, 'u');
}


function removeAccentsPro(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
// Maneja TODOS los diacríticos (no solo vocales españolas)

function getInput(promptText, esNumero = false) {
    let entrada;
    do {
        entrada = prompt(promptText);
        if (entrada === null) return null;
        
        if (esNumero) {
            entrada = parseFloat(entrada);
            if (isNaN(entrada)) {
                alert("❌ Debe ingresar un número válido.");
                entrada = null;
            }
        }
    } while (entrada === null);
    
    return entrada;
}

function askContinue() {
    return confirm("¿Deseas agregar otra persona?");
}

let input=getInput()























export {
    cancelInput,
    removeAccents,
    getInput,
    askContinue,
    removeAccentsPro,
};