// ### Ejercicio 9: Simulador de sorteos

// > Función que genera un número aleatorio entre 1 y 10.
// > 
// > 
// > El usuario intenta adivinarlo.
// > 
// > Función aparte compara y muestra si acertó.
// >

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function compararNumero(numeroUsuario, numeroSorteado) {
    if (numeroUsuario === numeroSorteado) {
        alert(`¡Felicidades! Adivinaste el número, era ${numeroSorteado}. 🎉`);
    } else {
        alert(`Lo siento, no acertaste. El número era ${numeroSorteado}. 😢`);
    }
}

function simuladorDeSorteo() {
    const numeroSorteado = generarNumeroAleatorio();

    let intento = prompt("Adivina el número sorteado entre 1 y 10:");
    
    if (intento === null) {
        alert("Juego cancelado por el usuario.");
        return;
    }

    intento = parseInt(intento);

    if (isNaN(intento) || intento < 1 || intento > 10) {
        alert("Por favor, ingresa un número válido entre 1 y 10.");
        return;
    }

    compararNumero(intento, numeroSorteado);
}

simuladorDeSorteo();