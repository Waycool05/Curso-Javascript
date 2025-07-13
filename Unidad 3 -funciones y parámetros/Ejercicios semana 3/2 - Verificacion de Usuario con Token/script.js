// ### Ejercicio 2: Verificación de usuario con token

// > Simula que un sistema genera un “token de sesión” al iniciar.
// > 
// > 
// > Crea una función que verifique si el token ingresado por el usuario coincide con el generado.
// >

const token = "65ADK"; 

let usuarioToken = prompt(`Ingrese su Token de Inicio de Sesión: `);

function inicioToken (usuarioToken, token) {
    if (usuarioToken===token) {
        return true;
    } else {
        return false;
    }
}

if (usuarioToken===null) {
    alert(`Operación cancelada por el Usuario`);
} else {
    if (inicioToken(usuarioToken,token)){
        alert (`Token Correcto puede ingresar al sistema`);
    } else {
        alert (`Token incorrecto, operación abortada`);
    }
}

