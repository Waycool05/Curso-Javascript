// Verificación de Contraseña Segura.
// Pide una contraseña al Usuario.
// verificar que se cumple: 
//  Al menos 8 caracteres.
//  Contiene al menos un número (simulado, por ejemplo si hay '0'-'9')
//  Muestra si es segura o no.

let contraseña=prompt("ingrese una contraseña de al menos 8 dígitos y que contenga un número.");
let tamañoCorrecto= contraseña.length>=8;

if (contraseña===null) {
    alert("Operación Abortada por el Usuario");
}else {
    contieneNumero = false
    for (let i=0; i<contraseña.length;i++) {
        if (Number(contraseña[i]) && contraseña[i] !==" ") {
            contieneNumero=true;
            break;
        }
    }
    if (tamañoCorrecto && contieneNumero) {
        alert("Contraseña Segura");

    } else {
        alert("contraseña No Segura, debe tener al menos 8 dígitos y contener 1 número.");
    }
}
