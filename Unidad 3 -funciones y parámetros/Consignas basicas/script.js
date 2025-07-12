

// function saludar(nombre) { // este minicódigo pide un nombre por consola y devuelve la frase "hola, ${nombre}"
//     return (`Hola, ${nombre}`); // return devuelve lo que realiza la función
// }

// let nombre = prompt("ingrese su nombre"); // ingreso del nombre
// alert(saludar(nombre)) // retorno de la función (nombre)

// function saludar(nombre,apellido) { // este minicódigo pide un nombre por consola y devuelve la frase "hola, ${nombre} ${apellido}"
//      return (`Hola, ${nombre} ${apellido}`); // return devuelve lo que realiza la función
//  }

//  let nombre = prompt("ingrese su nombre"); // ingreso del nombre
//  let apellido = prompt("ingrese su apellido)")
//  alert(saludar(nombre,apellido)) // retorno de la función (nombre y apellido)
//  se pueden agregar variables dentro de la función como variables locales

// Llamada de la Función con Argumentos
// function calcularMulta(diasRetraso) {
//     const multaPorDia = 0.50; // 50 centavos por día de retraso
//     return diasRetraso * multaPorDia;
// }
// Llamada a la función con un argumento
// let resultado = calcularMulta(7);
// console.log(`La multa por 7 días de retraso es: $${resultado}`);
// Muestra: La multa por 7 días de retraso es: $3.5

//Función con Múltiples Parámetros

// function prestarLibro(titulo, usuario) {
//     console.log(`El libro "${titulo}" ha sido prestado a ${usuario}.`);
// }

// prestarLibro("1984", "Ana");
// Muestra: El libro "1984" ha sido prestado a Ana

// Uso Avanzado: Parámetros Predeterminados

// function devolverLibro(titulo, diasRetraso = 0) {
//     const multa = diasRetraso * 0.50;
//     const mensaje = diasRetraso > 0
// //         ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa}`
//         : "Devuelto a tiempo. No hay multa.";
//     console.log(`Libro "${titulo}": ${mensaje}`);
// }

// devolverLibro("El Principito");
// Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

// devolverLibro("El Principito", 3);
// Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5

// SCOPE GLOBAL
// let color = 'azul'; // Variable global

// function mostrarColor() {
//     console.log(color); // Accede a la variable global
// }

// mostrarColor(); // Imprime: azul


// SCOPE LOCAL

// function establecerColor() {
//     let color = 'rojo'; // Variable local a la función
// }

// console.log(color); // Error: color no está definido

// Scope de Bloque

// if (true) {
//     let color = 'verde'; // Variable de scope de bloque
//     console.log(color); // Imprime: verde
// }

// console.log(color); // Error: color no está definido

// ¿Qué son las Funciones ANONIMAS?
// Las funciones anónimas son funciones sin nombre que pueden ser asignadas a variables, pasadas como argumentos o ejecutadas inmediatamente. Son útiles para encapsular lógica que no necesita reutilizarse o referenciarse directamente.
// Ejemplo:
// const suma = function(a, b) {
//     return a + b;
// };
// console.log(suma(5, 3)); // Salida: 8


// Usos comunes:
// CALLBACKS: Manejo de eventos o lógica asincrónica.
// document.getElementById("miBoton").addEventListener("click", function() {
//     alert("¡Botón pulsado!");
// });

// IIFE (Immediately Invoked Function Expressions): Ejecución inmediata para crear un alcance privado.

// (function() {
//     let mensaje = "Ejecutada al instante";
//     console.log(mensaje);
// })();

// Métodos de ARRAYS:
// let dobles = [1, 2, 3].map(function(num) {
//     return num * 2;
// });

// FUNCIONES FLECHA

// Introducidas en ES6, las funciones flecha ofrecen una sintaxis más concisa para escribir funciones anónimas.
// No tienen su propio THIS, lo que las hace ideales para callbacks y programación funcional.

// Ejemplo:
// const suma = (a, b) => a + b;
// console.log(suma(5, 3)); // Salida: 8

// Usos comunes:
// Callbacks

// let cuadrados = [1, 2, 3].map(n => n * n);
// Programación funcional: Por su brevedad y claridad.

// Ventajas y Desventajas

// Funciones ANONIMAS
// Ventajas:
// Control completo sobre el contexto de this.
// Acceso al objeto arguments.
// Desventajas:
// Sintaxis más extensa.
// Menos intuitivas para manejar this en callbacks.

// Funciones FLECHA
// Ventajas:
// Sintaxis concisa y moderna.
// Heredan el contexto de this.
// Desventajas:
// No adecuadas para métodos que requieren su propio this.
// No pueden ser usadas como constructores ni acceder a arguments.
// Recomendaciones

// Funciones Anónimas: Útiles cuando necesitas un control detallado de this o acceso a arguments.

// Funciones Flecha: Ideales para callbacks y métodos funcionales en arrays o programación moderna.

// ALERT ("hOLA MUNDO")



