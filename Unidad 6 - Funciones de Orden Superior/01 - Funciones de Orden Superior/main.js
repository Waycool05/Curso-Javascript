
//* ¿Qué son las funciones del orden superior?
// En JavaScript, las funciones del orden superior son funciones que pueden recibir otras funciones como argumentos, 
// retornar funciones como resultado, o ambas cosas. Este concepto es fundamental en la programación funcional y es una característica poderosa de JavaScript, 
// que permite crear código más modular, reutilizable y flexible.

// * Recibir funciones como parámetros
// Una función de orden superior puede aceptar una o más funciones como parámetros. 
// Esto permite que la función de orden superior pueda ejecutar la función pasada como argumento dentro de su propia lógica, 
// permitiendo personalizar el comportamiento de esa función de acuerdo a las necesidades.

// ? Ejemplo:

function porCadaUno(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

porCadaUno(numeros, console.log);
// 1
// 2
// 3
// 4

// En este ejemplo, la función porCadaUno recibe un array y una función (fn) como parámetros. Luego, 
// itera sobre cada elemento del array y ejecuta la función pasada (console.log en este caso) sobre cada elemento.
// Retornar funciones
// Además de recibir funciones como parámetros, una función de orden superior puede devolver una nueva función. 
// Esta técnica permite crear funciones más especializadas y configurables.

// ? Ejemplo:

function mayorQue(n) {
    return function(m) {
        return m > n;
    }
}

let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(12)); // true
console.log(mayorQueDiez(8));  // false

// En este caso, la función mayorQue retorna una nueva función que compara su argumento m con el valor n original. 
// La función mayorQueDiez es un ejemplo de cómo crear funciones especializadas a partir de funciones generales.


//* Importancia de las funciones del orden superior
//* Las funciones del orden superior son cruciales en JavaScript por varias razones:
//* Modularidad: Permiten dividir el código en componentes más pequeños y manejables.
//* Reutilización de código: Facilitan la creación de funciones genéricas que pueden ser reutilizadas en diferentes contextos.
//* Flexibilidad: Al permitir la personalización del comportamiento de una función mediante la inyección de funciones como parámetros, se puede crear código más flexible y adaptable.
//* Programación funcional: Son la base para muchas técnicas de programación funcional, como mapear, filtrar o reducir colecciones de datos.

//* Métodos comunes que usan funciones del orden superior
//* JavaScript proporciona varios métodos que utilizan funciones del orden superior para manipular arrays:

//* forEach: Itera sobre un array y ejecuta una función por cada elemento.
//* map: Crea un nuevo array con los resultados de la función aplicada a cada elemento del array original.
//* filter: Crea un nuevo array con todos los elementos que pasan una prueba definida por la función.
//* reduce: Ejecuta una función reductora sobre cada elemento del array, resultando en un único valor de retorno.
//* find: Retorna el primer elemento que cumple con una condición definida en la función.
//* some: Verifica si al menos un elemento en el array cumple con la condición implementada por la función.


// * Ejemplo con MAP
// const numeros = [1, 2, 3, 4];
// const duplicados = numeros.map(function(num) {
//     return num * 2;
// });

// console.log(duplicados); // [2, 4, 6, 8]

const numeros = [1,2,3,4,5,6,7,8,9,10]
const numerosx2 = []

const duplicados = numeros.map(function(numeros1){
    return numeros1 * 2;
})

console.log(duplicados); // [2, 4, 6, 8]

// En este ejemplo, el método map aplica la función que duplica los valores a cada elemento del array original, 
// retornando un nuevo array con los resultados.







