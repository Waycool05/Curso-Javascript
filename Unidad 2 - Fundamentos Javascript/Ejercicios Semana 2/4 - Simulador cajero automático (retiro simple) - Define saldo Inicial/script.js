// ### **Ejercicio 4: Simulador de cajero automático (retiro simple)**

// Define un saldo inicial, por ejemplo: `$1000`.

// Pide al usuario un monto para retirar.

// - Si el monto es menor o igual al saldo, realiza el retiro y muestra el nuevo saldo.
// - Si no, muestra "Fondos insuficientes".



const saldoInicial = 100000;

let saldoCapital= saldoInicial;

for(;;){ // ejemplo de un bucle infinito
    let retiroDinero=(prompt(`Ingrese un monto a retirar (su saldo actual es ${saldoCapital}`));
    if (retiroDinero===null) {
        alert(`Operación Cancelada`);
        break;
    }
    retiroDinero=parseInt(retiroDinero);
    if (isNaN(retiroDinero)|| retiroDinero<=0) {
        alert("ingrese un monto válido");
        continue;
    }
    if (retiroDinero>saldoCapital) {
        alert(`Por favor ingrese un valor menor, su saldo actual es: ${saldoCapital}`);
    } else {
        saldoCapital-= retiroDinero;
        alert(`Su nuevo saldop es: ${saldoCapital}`);
    }   
    if (saldoCapital<=0) {
        alert(`no hay saldo suficiente para continuar`);
        break;
    }
}
  