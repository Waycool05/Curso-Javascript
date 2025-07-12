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

let cuenta=parseFloat(prompt("Ingrese el total de la cuenta"));
let propina=parseFloat(prompt("Ingrese el % de propina que desea dejar"));

if (isNaN(cuenta) || cuenta<=0 || isNaN(propina) || propina<=0) {
    alert("por favor ingrese un valor válido");
} else {
    let totalcalculado = totalconPropina(cuenta,propina);
    alert ("El total a pagar es: $" + totalcalculado.toFixed(2))
}