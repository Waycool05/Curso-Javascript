// ### Ejercicio 5: Sistema de evaluación escolar

// > Función que recibe nombre y nota (0–10).
// > 
// > 
// > Devuelve si está “Aprobado” (≥6) o “Desaprobado”.
// > 
// > Muestra mensaje final.
// >

let alumno =prompt('Por favor ingrese su Nombre: ');
let nota = prompt('Por favor ingrese su calificación: ');


function notaAlumno(){
    if (nota>=6) {
        alert (`${alumno} Aprobado con ${nota} felicidades.`);
    } else {
        alert (`${alumno} Lo siento Desaprobado, tu nota fue ${nota}`);
    }
}

if (alumno===null || nota===null) {
    alert(`Operación cancelada por el usuario`);
} else {
    nota = Number(nota);
     if (isNaN(nota) || nota <0 || nota >10) {
        alert('Por favor ingrese un valor correcto entre 0 y 10.');
    } else{ 
    notaAlumno();
}
}