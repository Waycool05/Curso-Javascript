// ### **Ejercicio 9: Contador de letras en una palabra**

// Pide una palabra.

// Cuenta cuántos caracteres tiene **sin usar funciones de strings avanzadas** (simularlo con un bucle).

let palabra = prompt("Ingrese una Palabra.");
let letraInicial = 0;

if(palabra===null) {
    alert("Operación Cancelada.");

} else {
    for (;;) {
        if (palabra[letraInicial] === undefined) {
            break;
        }
        letraInicial++;
    }
alert (`La palabra "${palabra}" tiene ${letraInicial} Caracteres `);
}
