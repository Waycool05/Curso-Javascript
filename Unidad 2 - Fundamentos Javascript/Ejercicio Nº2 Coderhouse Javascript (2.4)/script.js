// condicionales

// const edad = parseInt(prompt("por favor ingrese su edad"));

// if (edad >=18) {
//     console.log("puedes pasar, por un pelo");
// } else if (edad >18) {
//     console.log("Pasa,eres un adulto");
// } else {
//     console.log("Eres menor, vuelve a tu casa");
// }

// const usuario ="admin";
// const pass="1234";

// const usuarioIngresado = prompt("Ingrese su usuario");
// const passIngresado = prompt("Ingrese su contraseña");

// if (usuarioIngresado === usuario && passIngresado === pass){
//     alert ("Ingreso permitido");
// } else {
//     alert ("los siento no puedes ingresar");
// }

// for (let i=0; i < 3; i++){ //el bucle repite código
// const usuario ="admin";
// const pass="1234";

// const usuarioIngresado = prompt("Ingrese su usuario");
// const passIngresado = prompt("Ingrese su contraseña");

// if (usuarioIngresado === usuario && passIngresado === pass){
//     alert ("Ingreso permitido");
// } else {
//     alert ("los siento no puedes ingresar");
// }
//     alert ("error, intente nuevamente"); 
// }

aler ("Welcome to PERRITO CON CHAUCHA STORE");
const opcion = prompt("ingrese la opción deseada. 1)mostrar/comprar productos, 2) ver carrito, 3) programar envío");

switch(opcion) {
    case "1":
        alert("mostrando productos...");
        break;
    case "2":
        alert("mostrando carrito");
        break;
    case "3":
        alert("programando envío...");
        break;
    default:
        alert("no entiendo lo que me decís");
        break;
}

let numero = Number(prompt("Ingresá un número"));

while (isNaN(numero)) {
    numero = Number(prompt("Ingresá un Número válido"));
}

// pedir un número
// validarlo
// evaluar si es par o impar - n % 2 = 0
// if (n % 2 = 0) {alert ("es par")} else {alert ("es impar")}
