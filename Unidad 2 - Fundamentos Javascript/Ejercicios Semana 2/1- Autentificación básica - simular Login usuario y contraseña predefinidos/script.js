const admin = "admin";
const pass ="1234";

let usuario =prompt("Ingrese su Usuario: ");
let Contraseña =prompt("ingrese su contraseña");

if (usuario===admin && Contraseña===pass){
    alert("Acceso concedido, bienvenido " + usuario);
}   else {
    alert("Acceso DENEGADO, intente nuevamente.");
}
