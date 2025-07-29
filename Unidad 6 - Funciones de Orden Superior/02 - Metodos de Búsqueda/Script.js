
//* Métodos de Búsqueda
//* forEach: Iterando Arrays

//* ¿Qué es el método forEach?
// El método forEach es un método incorporado en los arrays de JavaScript que permite iterar sobre cada uno de los elementos de un array, 
// ejecutando una función proporcionada en cada elemento. Este método es especialmente útil cuando se desea realizar una operación en cada elemento de un array, 
// como imprimir valores, modificar elementos o realizar cálculos, sin la necesidad de escribir un bucle for tradicional.

//* ¿Cómo se utiliza el método forEach?
// El forEach recibe una función como argumento. Esta función se ejecutará una vez por cada elemento del array, 
// y recibe como argumento el valor del elemento actual en la iteración. Opcionalmente, 
// esta función también puede recibir dos argumentos adicionales: el índice del elemento actual y el array completo.

const numeros = [1,2,3,4,5,6,7,8,9,10]
const numerosx2 = []

//* Sintaxis básica:
array.forEach(function(elemento, indice, array) {
    // Código a ejecutar por cada elemento
});

//* elemento: Es el valor del elemento actual en el array.
//* indice (opcional): Es el índice del elemento actual en el array.
//* array (opcional): Es el array completo que está siendo iterado.


// * Ejemplo con forEach
// Sintaxis;
// numeros.forEach(function(numeros) {
//     console.log(numeros)
// })

//* Ejemplos básicos
//* Iteración simple sobre un array:

numeros.forEach(function(numero) {
    console.log(numero);
});

//Salida:
//1
//2
//3
//4
//5

//* En este ejemplo, el método forEach recorre el array numeros e imprime cada uno de los elementos en la consola.
//* Uso del índice en la iteración:

const frutas = ['Manzana', 'Banana', 'Cereza'];

frutas.forEach(function(fruta,indice){
    console.log(`${indice}, ${fruta}`)
})

// Salida:
// Índice 0: Manzana
// Índice 1: Banana
// Índice 2: Cereza

//* Modificación de elementos en un array (aunque no es el uso principal de forEach):

numeros.forEach(function(numeros) {
    numerosx2.push(numeros*2)
})
console.log(numerosx2)

// [2, 4, 6, 8]

//? Consideraciones importantes
// No modifica el array original: A diferencia de otros métodos de array como map, 
// forEach no retorna un nuevo array ni modifica el array original 
// (aunque sí puede afectar otros arrays o variables externas si se utilizan dentro de la función).
// No retorna un valor: El método forEach siempre retorna undefined. 
// Si se necesita crear un nuevo array a partir de la transformación de los elementos, métodos como map son más apropiados.
// No se puede interrumpir: A diferencia de un bucle for, no se puede salir o romper un forEach antes de que haya terminado de iterar sobre todos los elementos. 
// Si se necesita esa funcionalidad, es mejor utilizar un bucle for o for...of.



