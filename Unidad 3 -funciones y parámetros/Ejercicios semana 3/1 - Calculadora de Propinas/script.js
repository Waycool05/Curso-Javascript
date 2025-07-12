// ### Ejercicio 1: Calculadora de propinas

// > Crea una función que reciba el total de una cuenta y el porcentaje de propina.
// > 
// > 
// > Devuelve el monto total a pagar.
// > 
// > Simula el uso en un restaurante.
// >

function totalconPropina(totalCuenta, porcentajePropina) {

    let propina = totalCuenta * (porcentajePropina/100);
    let totalaPagar = totalCuenta + propina;
    
    return totalaPagar;
}

let cuenta=(prompt("Ingrese el total de la cuenta"));
if (cuenta===null) {
    alert("Ingrese un valor válido");
} else {
    cuenta = Number(cuenta);
}
let propina=prompt(
    "Ingrese el % de propina que quiere dejar \n" +
    "1 - 5%\n" +
    "2 - 10%\n" +
    "3 - 15%");
switch(propina) {
    case "1":
        propina=5;
        break;
    case "2":
        propina=10;
        break;
    case "3": 
        propina=15;
        break;
    default: 
        alert("por favor ingrese una Opcion válida");
        propina=NaN;
        break;
}

if (isNaN(cuenta) || cuenta<=0 || isNaN(propina) || propina<=0) {
    alert("por favor ingrese un valor válido");
} else {
    let totalcalculado = totalconPropina(cuenta,propina);
    alert ("El total a pagar es: $" + totalcalculado.toFixed(2))
}