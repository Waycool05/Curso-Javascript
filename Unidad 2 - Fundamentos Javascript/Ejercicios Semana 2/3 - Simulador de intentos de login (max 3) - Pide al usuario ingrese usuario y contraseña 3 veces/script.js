// ### **Ejercicio 3: Simulación de intentos de login (máximo 3)**

// Permite al usuario intentar ingresar usuario y contraseña hasta 3 veces.

// Si acierta, muestra "Acceso concedido".

// Si falla 3 veces, muestra "Cuenta bloqueada".






const usuario = "admin";
const contraseña ="12345";

for (intentos=3; intentos>0;intentos--) {
    let usuarioIngresado = (prompt("Por favor Ingrese su usuario: "));
    let contraseñaIngresado = (prompt("Por favor Ingrese su Contraseña: "));

    if (usuarioIngresado===usuario && contraseñaIngresado===contraseña) {
        alert("Bienvenido " + usuario);
        break;
    } else {
        if(intentos>1){
            alert(`Ingreso Incorrecto, te quedan: ${intentos-1} intentos`);
        } else {
            alert(`quedate en tu sitio....., la policia va en camino ${usuarioIngresado}`);
        }
    }
}