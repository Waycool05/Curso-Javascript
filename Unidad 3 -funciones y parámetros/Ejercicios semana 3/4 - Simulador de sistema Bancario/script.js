// ### Ejercicio 4: Simulación de sistema bancario

// > Crea funciones para consultar saldo, depositar y retirar.
// > 
// > 
// > Simula una sesión de operaciones bancarias básicas.
// >

let saldo=100;

function consultaSaldo(){
    alert(`tu saldo es: $${saldo}`);
}

function deposito() {
    let depositoSaldo=prompt('Por favor ingrese saldo a Depositar');
    if (depositoSaldo===null){
    alert("Operación abortada por el usuario");
    return;
} else if (isNaN(depositoSaldo) || (depositoSaldo<=0)){
    
    alert('Ingrese un monto válido');
    return;
} else {
    depositoSaldo=Number(depositoSaldo);
    saldo+=depositoSaldo;
    alert(`Su nuevo saldo es $${saldo}`);
}}

function retiro() {
    let retiroSaldo=prompt('Por favor ingrese saldo a Retirar');
    if (retiroSaldo===null){
    alert("Operación abortada por el usuario");
    return;
} else if (isNaN(retiroSaldo) || (retiroSaldo<=0)){
    
    alert('Ingrese un monto válido');
    return;
} else {
    retiroSaldo=Number(retiroSaldo);
    saldo-=retiroSaldo;
    alert(`Su nuevo saldo es $${saldo}`);
    return;
}
}

while (true) {
    let opciones = prompt(
        'Seleccionar una Opción: \n'+
        '1 - Consultar saldo\n'+
        '2 - Depositar.\n' +
        '3 - Retiro\n' +
        '4 - Salir');
    if (opciones===null){
    alert("Operación Cancelada por el Usuario");
    break;
    } if (opciones==="1") {
        consultaSaldo();
    } else if (opciones==="2"){
        deposito();
    } else if (opciones==="3") {
        retiro();
    } else if (opciones==="4"){
        break;
    } else {
        alert('Opción inválida, elija la Opción correcta');
    }
}    
