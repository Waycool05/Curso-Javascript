// ¿Qué es una función constructora?
// Definición y Propósito
// En JavaScript, una función constructora es fundamentalmente una función especial que se utiliza para inicializar un nuevo objeto.
// La idea detrás de una función constructora es proporcionar una forma de crear objetos que modelen algo en el mundo real o en la lógica de un programa,
// como una Persona, un Pedido, o un Coche, por ejemplo.
// Antes de la introducción de las clases en ECMAScript 2015 (ES6), 
// las funciones constructoras eran la manera estándar en JavaScript para crear tipos de datos que simularan las clases,
// como se conocen en otros lenguajes de programación orientados a objetos como Java o C#. A través de las funciones constructoras,
// se podían definir propiedades y métodos específicos para un tipo de objeto, 
// reutilizando la misma estructura base cada vez que se instanciaba un objeto nuevo.


// Ejemplo de una Función Constructora: 
//-------------------------------------

// class Persona {
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.calle = calle;
//     }

//     describir() {
//         return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
//     }
// }

// Crear un nuevo objeto Persona
// const persona1 = new Persona("Ana", 25, "Calle Falsa 123");
// console.log(persona1.describir());

// Conclusión
// La introducción de las clases no ha eliminado la funcionalidad de las funciones constructoras, 
// pero sí ha proporcionado una forma más elegante y simple de lograr objetivos similares. 
// Las clases hacen el código más legible y fácil de entender, especialmente en proyectos grandes y complejos, 
// y facilitan la implementación de conceptos avanzados de programación orientada a objetos como la herencia y el polimorfismo.

