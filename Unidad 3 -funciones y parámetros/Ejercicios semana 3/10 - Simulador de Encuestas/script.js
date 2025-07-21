// ### Ejercicio 10: Simulador de encuestas

// > Registra respuestas a 3 preguntas con funciones separadas.
// > 
// > 
// > Cada una devuelve la respuesta.
// > 
// > Muestra todo al final.
// >


function nombreDeUsuario() {
    let nombre = prompt('Cual es tu nombre?');
    if (nombre===null || nombre.trim()===""){
        nombre="n/c"
    }
    return nombre;
}

function edadUsuario() {
    let edad=prompt('Cual es tu edad?');
    if (edad===null || edad.trim()===""){
        edad="n/c"
    }
    return edad;
}
function comidaPreferida() {
    let comida=prompt('Cual es tu Comida Favorita?');
    if (comida===null || comida.trim()===""){
        comida="n/c"
    }
    return comida;
}
function realizarLaEncuentesta () {
    let nombre=nombreDeUsuario();
    let edad=edadUsuario();
    let comida=comidaPreferida();

    let resultado=`Gracias por realizar la encuesta\n\nNombre: ${nombre}\nEdad: ${edad}\nComida Preferida: ${comida}`;
    alert(resultado);
}

realizarLaEncuentesta();
