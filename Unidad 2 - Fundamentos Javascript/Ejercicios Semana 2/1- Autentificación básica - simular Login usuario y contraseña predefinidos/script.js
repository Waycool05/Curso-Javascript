// ### **Ejercicio 1: Autenticación básica**

// Simula un login con usuario y contraseña predefinidos.

// - Usuario correcto: `"admin"`
// - Contraseña correcta: `"1234"`
    
//    Pide al usuario que los ingrese y muestra si el acceso es concedido o denegado.



const admin = "admin";
const pass ="1234";

let usuario =prompt("Ingrese su Usuario: ");
let Contraseña =prompt("ingrese su contraseña");

if (usuario===admin && Contraseña===pass){
    alert("Acceso concedido, bienvenido " + usuario);
}   else {
    alert("Acceso DENEGADO, intente nuevamente.");
}
