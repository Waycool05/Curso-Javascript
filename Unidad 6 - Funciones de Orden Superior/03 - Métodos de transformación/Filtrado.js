
//? filter: Filtrando arrays
//* ¿Qué es el método filter?
// El método filter es una función de orden superior en JavaScript que permite crear un nuevo array a partir de un array existente, 
// incluyendo solamente aquellos elementos que cumplan con una condición específica. 
// Es una herramienta muy poderosa cuando se necesita filtrar datos de una colección, 
// ya sea para reducir la cantidad de datos o para enfocarse en un subconjunto específico de información.
//* ¿Cómo funciona el método filter?
// El método filter recibe una función como argumento. 
// Esta función se ejecuta en cada uno de los elementos del array y debe devolver un valor booleano (true o false). 
// Si la función devuelve true, el elemento actual se incluye en el nuevo array; si devuelve false, el elemento se excluye.


//* Sintaxis básica:
// const nuevoArray = array.filter(function(elemento, indice, array) {
//      -- Condición que debe cumplirse
// });

//* elemento: El elemento actual que se está procesando en el array.
//* indice (opcional): El índice del elemento actual en el array.
//* array (opcional): El array sobre el cual se está aplicando el método filter.


//* Ejemplo Filter

const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(numerosPares);
// [2, 4, 6]

// En este ejemplo, el método filter crea un nuevo array numerosPares, 
// que contiene solo los números que son divisibles por 2, es decir, los números pares.

//* Filtrar objetos en un array:

const cursos = [
    { nombre: 'JavaScript', duracion: 8 },
    { nombre: 'React', duracion: 6 },
    { nombre: 'Angular', duracion: 10 }
];

const cursosLargos = cursos.filter(function(curso) {
    return curso.duracion > 7;
});

console.log(cursosLargos);
// [{ nombre: 'JavaScript', duracion: 8 }, { nombre: 'Angular', duracion: 10 }]

// En este caso, el método filter se usa para crear un nuevo array cursosLargos que solo incluye los cursos cuya duración es mayor que 7 semanas.

//* Filtrar elementos que contienen una subcadena:

const palabras = ['manzana', 'banana', 'cereza', 'damasco'];

const palabrasConA = palabras.filter(function(palabra) {
    return palabra.includes('a');
});

console.log(palabrasConA); // ['manzana', 'banana', 'cereza', 'damasco']

// Este ejemplo muestra cómo filter puede ser utilizado para crear un nuevo array palabrasConA que contiene solo las palabras que incluyen la letra "a".


//? Aplicaciones prácticas del método filter
//* El método filter es extremadamente útil en muchos contextos diferentes:

//* Filtrar datos de una API: 
// Cuando se obtienen datos de una API, como una lista de productos, 
// se puede usar filter para mostrar solo los productos que están en stock, 
// que están en oferta, o que cumplen con alguna otra condición.

//* Filtrar resultados de búsqueda: 
// En aplicaciones que permiten a los usuarios buscar entre múltiples ítems,
//  filter se puede utilizar para mostrar solo los resultados que coinciden con los criterios de búsqueda.

//* Filtrar elementos en formularios: 
// Si un formulario tiene múltiples entradas o respuestas,
//  filter puede ayudar a identificar y trabajar solo con aquellas que son válidas o relevantes.

//? Consideraciones importantes

//* No modifica el array original: 
// El método filter no altera el array original. 
// En su lugar, retorna un nuevo array que contiene los elementos que cumplen con la condición especificada.

//* Retorna un array: 
// Incluso si ningún elemento cumple la condición, filter siempre devolverá un array (posiblemente vacío).

//* Encadenamiento: 
// filter se puede encadenar con otros métodos como map o reduce para realizar operaciones más complejas en los datos.

//? Ejemplos Avanzados

//* reduce: Acumulando valores

//* ¿Qué es el método reduce?
// El método reduce es una poderosa función de orden superior en JavaScript que se utiliza para reducir un array a un único valor. 
// Este método ejecuta una función reductora en cada elemento del array (de izquierda a derecha), acumulando el resultado en un valor único. 
// reduce es especialmente útil cuando se necesita realizar operaciones que involucran la acumulación de datos, 
// como la suma de todos los elementos de un array o la combinación de múltiples valores en un solo resultado.

//* ¿Cómo se utiliza el método reduce?

// El método reduce recibe dos parámetros principales:

//* 1
// Función reductora: Una función que se ejecuta en cada elemento del array. Esta función recibe cuatro argumentos:
// acumulador: El valor acumulado hasta el momento.
// valorActual: El elemento actual que se está procesando en el array.
// indiceActual (opcional): El índice del elemento actual.
// array (opcional): El array original sobre el cual se está aplicando el método reduce.

//* 2
// Valor inicial (opcional): Un valor inicial para el acumulador. 
// Si no se proporciona, reduce usará el primer elemento del array como el valor inicial y comenzará a partir del segundo elemento.

//* Sintaxis básica:
array.reduce(function(acumulador, valorActual, indiceActual, array) {
    // Código para combinar acumulador y valorActual
}, valorInicial);

// Ejemplos de uso común del método reduce
// Sumar todos los elementos de un array:
const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual;
}, 0);

console.log(suma); // 15

// En este ejemplo, reduce suma todos los elementos del array numeros. 
// El acumulador comienza en 0 (el valor inicial proporcionado) y se le suma cada elemento del array, resultando en 15.

//* Encontrar el valor máximo en un array:
const numeros2 = [10, 5, 20, 15];

const maximo = numeros2.reduce(function(acumulador, valorActual) {
    return Math.max(acumulador, valorActual);
});

console.log(maximo); // 20

// Aquí, reduce se utiliza para encontrar el valor máximo en el array. 
// Compara el acumulador con el valor actual y mantiene el mayor de los dos en cada iteración.

//* Contar la cantidad de ocurrencias de elementos en un array:
const frutas = ['manzana', 'banana', 'naranja', 'manzana', 'naranja', 'banana', 'banana'];

const conteoFrutas = frutas.reduce(function(conteo, fruta) {
    conteo[fruta] = (conteo[fruta] || 0) + 1;
    return conteo;
}, {});

console.log(conteoFrutas);
// { manzana: 2, banana: 3, naranja: 2 }

// En este ejemplo, reduce se utiliza para contar la cantidad de veces que aparece cada fruta en el array. 
// El acumulador es un objeto donde se almacenan los conteos de cada fruta.

//? Aplicaciones avanzadas del método reduce
//* Transformación de estructuras de datos: ç
// reduce es muy útil para transformar un array en otro tipo de estructura de datos, como un objeto o incluso otro array más complejo.

//* Agrupación de datos: 
// Puedes usar reduce para agrupar elementos de un array en categorías, 
// generando un objeto donde las claves son los nombres de las categorías y los valores son arrays de elementos que pertenecen a esas categorías.

//* Encadenamiento con otros métodos: 
// reduce puede ser utilizado junto con otros métodos de arrays, como map o filter, para realizar operaciones complejas en un solo paso.

//? Consideraciones importantes

//* El valor inicial es importante: 
// Siempre considera el valor inicial del acumulador, ya que afecta cómo se procesa el array. 
// Si no se proporciona, el primer elemento del array se usará como valor inicial, lo que puede llevar a errores si el array está vacío.

//* Complexidad y legibilidad: 
// Aunque reduce es muy poderoso, su uso puede hacer que el código sea más difícil de entender. 
// Es importante asegurarse de que el uso de reduce esté justificado y que el código siga siendo legible para otros desarrolladores.

