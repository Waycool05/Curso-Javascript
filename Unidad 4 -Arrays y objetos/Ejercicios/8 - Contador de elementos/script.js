// ### Ejercicio 8: Contador de elementos

// > Recibe un array con palabras.
// > 
// > 
// > Función que devuelva cuántas veces aparece cada una (objeto con frecuencia).
// >
const palabras = [
    "JavaScript", "HTML", "CSS", "JavaScript",
    "Python", "css", "HTML", "javascript",
    "Node", "Python", "python"
];

function contarFrecuencia(arrPalabras) {
    const frecuencia = {};
    const palabrasMostradas= [];
    let salida="";
    for (let i = 0; i < arrPalabras.length; i++) {
        const palabra = arrPalabras[i].toLowerCase();

        if (frecuencia[palabra]) {
            frecuencia[palabra]++;
        } else {
            frecuencia[palabra] = 1;
        }
    }

    for (let i=0;i<arrPalabras.length;i++) {
        let palabra=arrPalabras[i].toLowerCase();
        if (!palabrasMostradas.includes(palabra)){
            salida+= `${palabra} - ${frecuencia[palabra]}\n`;
            palabrasMostradas.push(palabra);
        
        }
    }
    return salida;
}

const resultado = contarFrecuencia(palabras);
alert(resultado);