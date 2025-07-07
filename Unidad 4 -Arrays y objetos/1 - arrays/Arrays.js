
// los índices de array comienzan en 0 siempre
// ejemplo:         0        1        2    para el ejemplo de abajo.
// const miArray =["jorge", "Laydi", "Asuna"]; // creación de array se pueden ingresar varios tipos de datos pero no es recomendable.

// Cuando los arrays vienen de alguna base de datos, probablemente se vean así - miArray.length; - 
// const cant = miArray.length;
// console.log(cant) // imprime: "3"

// otro ejemplo de como acceder al índice del array:
// const miArray =["jorge", "Laydi", "Asuna"];

// let nombre = miArray[1];
// console.log(nombre); // imprime "Laydi"

// let nombre = miArray[2];
// console.log(nombre); // imprime "Asuna"

// let nombre = miArray[3];
// console.log(nombre); // imprime undefined

// se pueden agregar elementos al array, hay dos métodos:
// ejemplo 1: agregar al final de array

// const miArray =["jorge", "Laydi", "Asuna"];
// console.log(miArray); // imprime: "jorge", "Laydi", "Asuna"

// miArray.push("Carlos");
// console.log (miArray); // imprime: "jorge", "Laydi", "Asuna", "Carlos"

// ejemplo 2: agregar un elemento al principio del array 

// const miArray =["jorge", "Laydi", "Asuna"];
// console.log(miArray); // imprime: "jorge", "Laydi", "Asuna"

// miArray.unshift("Agustín");
// console.log (miArray); // imprime: "Agustín", "jorge", "Laydi", "Asuna", "Carlos"

// también se pueden eliminar elementos del array
//

// const miArray =["jorge", "Laydi", "Asuna"];
// console.log(miArray); // imprime: "jorge", "Laydi", "Asuna"

// let final = miArray.pop(); // pop elimina del final
// console.log(miArray); // imprime: "jorge", "Laydi"
// console.log(final); // imprime: "Asuna"

// let inicio = miArray.shift(); // pop elimina del comienzo
// console.log(miArray); // imprime: "Laydi", "Asuna"
// console.log(inicio); // imprime: "jorge"

// let nombres = ["Jorge", "Laydi","Asuna"];

// for (let i=0; i< nombres.length; i++) {
//     console.log(nombres[i]);
// }
// imprime: 
// Jorge - índice 0
// Laydi - índice 1
// Asuna - índice 2

// otro ejemplo es con callback funcions, funciones anónimas y funciones con flechas.

// let nombres = ["Jorge", "Laydi","Asuna"];

// nombres.forEach((Element)=> {
//     console.log(Element);

// })
