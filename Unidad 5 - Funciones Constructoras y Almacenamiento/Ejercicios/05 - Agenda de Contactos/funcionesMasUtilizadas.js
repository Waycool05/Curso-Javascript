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
    let reIntento=true;

    while(reIntento) {
        entrada = (prompt(promptText));
        if (entrada === null) return null;
        
        if (esNumero) {
            entrada = parseFloat(entrada);
            if (isNaN(entrada)) {
                alert("❌ Debe ingresar un número válido.");
                continue;
            }
        }
        const confirmacion = confirm(`¿Valor ingresado: "${entrada}"\n ¿Es Correcto?`);
        if (confirmacion) {
            return entrada;
        }else {
            reIntento=askContinue();
        }
    } 
    return null;
}

function askContinue() {
    return confirm("¿Quieres Continuar?");
}


