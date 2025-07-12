// ### **Ejercicio 2: Validador de correo**

// Pide al usuario que ingrese una cadena de texto.

// Verifica si contiene un `'@'` y un `'.'`.

// Muestra si "parece un correo válido" o no.

// (Investigar includes)






let CorreoElectronico = (prompt("Por favor Ingrese un Correo Electrónico"));

let Arroba = -1;
let Punto = -1;
for (let i=0; i<CorreoElectronico.length;i++) {
    if (CorreoElectronico[i] ==="@" && Arroba===-1) {
        Arroba = i;
    }
    if (CorreoElectronico[i] ==="." && Punto===-1){
        Punto = i;
    }
}
if (Arroba !==-1 && Punto!==-1 && Arroba<Punto) {
    if (Arroba>0 && (Punto - Arroba >1) && (CorreoElectronico.length - Punto>1)) {
        alert ("Parece un correo Válido");
    } else {
        alert("No parece un correo Válido");
    }
} else {
    alert("No parece un correo Válido");
}