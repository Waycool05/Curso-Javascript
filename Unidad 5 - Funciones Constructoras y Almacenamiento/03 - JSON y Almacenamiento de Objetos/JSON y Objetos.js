// JSON y Almacenamiento de Objetos: 

// ¿Qué es JSON?
// JSON (JavaScript Object Notation) es un formato de texto ligero para intercambiar datos. Es fácil para los humanos leer y escribir, 
// y fácil para las máquinas parsear e interpretar. JSON es un formato de texto que es completamente independiente del lenguaje, 
// pero utiliza convenciones que son familiares para los programadores de la familia de lenguajes C, incluyendo C, C++, C#, Java, JavaScript, Perl, Python, y muchos otros. 
// Estas propiedades hacen que JSON sea un lenguaje ideal para el intercambio de datos.

// Uso de JSON en localStorage y sessionStorage
// En el contexto de las aplicaciones web, es común que necesites almacenar datos en el navegador del usuario. Aquí es donde localStorage y sessionStorage entran en juego. 
// Ambos proporcionan un espacio para almacenar datos en forma de clave-valor, pero con algunas diferencias:

// localStorage: Almacena datos sin fecha de expiración. Los datos no se eliminarán cuando se cierre el navegador y estarán disponibles entre las sesiones de navegación.

// sessionStorage: Almacena datos solo para una sesión de página. Los datos se eliminan cuando se cierra la pestaña o el navegador.

// Ambos, localStorage y sessionStorage, solo pueden almacenar cadenas (strings), por lo que para almacenar objetos JavaScript complejos, 
// es necesario serializarlos a JSON. Utilizando JSON.stringify() puedes convertir un objeto JavaScript en una cadena JSON, y con JSON.parse(), 
// puedes convertir una cadena JSON de vuelta a un objeto JavaScript.

// Ejemplo práctico
// Supongamos que quieres almacenar un objeto de usuario en localStorage para mantener al usuario logueado entre sesiones.


// ----- Objeto usuario
// const usuario = {
//   id: "1234",
//   nombre: "Juan",
//   correo: "juan@example.com"
// };

// ----- Convertir el objeto usuario a una cadena JSON para almacenamiento
// localStorage.setItem('usuario', JSON.stringify(usuario));

// ----- Recuperar el objeto usuario de localStorage y convertirlo de nuevo a un objeto JavaScript
// const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuario'));

// console.log(usuarioAlmacenado);


// Este método permite una manera eficiente de almacenar objetos complejos y estructuras de datos en el navegador del usuario, 
// manteniendo la persistencia de la sesión o entre sesiones según sea necesario.


// Recuperar y convertir JSON a objetos:

// ¿Qué es JSON.parse?
// JSON.parse es una función incorporada en JavaScript que se utiliza para convertir una cadena de texto en formato JSON a un objeto de JavaScript. 
// Este proceso es conocido como deserialización, y es fundamental cuando recuperamos datos almacenados que necesitan ser manipulados o 
// accesados como objetos dentro de nuestras aplicaciones.

// Uso Práctico de JSON.parse
// Cuando almacenamos datos en localStorage o sessionStorage, estos datos deben ser cadenas. Si tenemos objetos JavaScript, 
// primero los convertimos en una cadena JSON usando JSON.stringify(). Para revertir este proceso, utilizamos JSON.parse().

// Ejemplo Práctico:

// Imagina que tienes un sitio web de comercio electrónico y necesitas almacenar la información del carrito de compras del usuario entre sesiones. 
// Podrías almacenar esta información en localStorage como un string JSON y recuperarlo cada vez que el usuario visite la página.

// ---- Supongamos que este es el carrito de compras del usuario
// const carrito = {
//     items: [
//         { id: 1, producto: "Libro", cantidad: 2, precio: 15.00 },
//         { id: 2, producto: "Lápiz", cantidad: 10, precio: 1.50 }
//     ]
// };

// ---- Convertimos el objeto carrito en una cadena JSON y lo almacenamos
// localStorage.setItem('carrito', JSON.stringify(carrito));

// ---- Recuperamos la cadena JSON del almacenamiento y la convertimos de nuevo a un objeto JavaScript
// const carritoAlmacenado = JSON.parse(localStorage.getItem('carrito'));

// ----- Ahora podemos acceder y manipular los datos del carrito como un objeto JavaScript
// console.log(`Total de productos: ${carritoAlmacenado.items.length}`);


// Este método permite que la interfaz de usuario del sitio web mantenga la consistencia del carrito de compras sin necesidad de hacer consultas constantes a un servidor, 
// mejorando la experiencia de usuario y reduciendo la carga en el servidor.

// Conclusiones
// El uso de JSON.parse() es crucial para aplicaciones que dependen del almacenamiento local para gestionar estados o configuraciones entre sesiones. 
// Facilita la manipulación de datos estructurados y mejora la eficiencia de las aplicaciones web modernas.








