// ### **Ejercicio 8: Temporizador regresivo**

// Pide al usuario un número entero positivo.

// Cuenta regresivamente hasta 0 usando un bucle, mostrando cada número.

while (true) {
    let ingresoNumero= prompt(`Por favor ingrese un número entero positivo`);

    if (ingresoNumero===null) {
        alert("operación Cancelada por el usuario.");
        break;
    }
    let numPrueba=parseInt(ingresoNumero);
        if (isNaN(numPrueba) || numPrueba<=0) {
        alert("El número ingresado debe ser mayor a 0");
        continue;
    }
    for (let i=numPrueba; i >=0; i--) {
        alert(i);
    }
    break;
}   

