// ### **Ejercicio 10: Acceso por edad mínima con intentos**

// Pide la edad al usuario.

// - Si es mayor o igual a 18, permite el acceso.
// - Si es menor, niega el acceso.
    
// Permite hasta 3 intentos antes de mostrar "Acceso bloqueado por intentos fallidos".

const edadAdulta ="18"

for (let i=0;i<3;i++) {

    let edadIngresada = prompt(`Por favor Indique su edad: `);

    if (edadIngresada===null) {
        alert(`Operación Cancelada por el Usuario`);
        break;
    }
    let edad=parseInt(edadIngresada);
    
    if (isNaN(edad) || edad<=0) {
        alert(`Por favor ingrese una edad válida, te restan ${2-i} intentos`);
        continue;
    }
    
    if (edad>=edadAdulta) {
        alert("Eres mayor, Bienvenido");
        break;
    } else {
        alert(`Eres menor, vuelve a ingresar tu edad, te quedan ${2-i} intentos`);
    }
}
