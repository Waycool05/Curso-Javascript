// Introducción a Storage
// Las API de almacenamiento web: localStorage y sessionStorage
// El almacenamiento web proporciona métodos y protocolos para almacenar datos de manera local en el navegador del usuario. 
// Las dos principales herramientas que ofrece son: localStorage y sessionStorage. <--------------->

// ¿Qué son localStorage y sessionStorage?
// localStorage: Permite almacenar datos de forma indefinida hasta que sean explícitamente eliminados por el usuario o por el sitio web que los guardó. 
// Los datos persisten incluso después de cerrar el navegador y reiniciar el sistema.

// sessionStorage: Similar a localStorage en funcionalidad pero con una diferencia clave: 
// los datos almacenados en sessionStorage se eliminan cuando se cierra la pestaña del navegador. 
// Esto significa que los datos persisten durante la sesión de la pestaña, pero no entre sesiones.

// Diferencias clave
// Característica ----  localStorage ----------------------------------------------- sessionStorage ----------------------------------------------
// Persistencia	  ---- Permanente hasta eliminación manual o por el sitio	       - Persiste solo durante la sesión de la pestaña del navegador -
// Compartición	  ---- Disponible en todas las pestañas y ventanas	               - Disponible solo en la pestaña que creó el almacenamiento    -
// Uso típico	  ---- Guardar preferencias del usuario a largo plazo	           - Guardar información sobre el estado de la sesión actual     -

// ¿Cuándo usar localStorage y sessionStorage?

// localStorage es ideal para:
// Guardar preferencias de usuario que no requieren ser borradas al cerrar el navegador.
// Almacenar datos para el autocompletado de formularios en visitas futuras.
// Guardar tokens de autenticación y configuraciones para uso a largo plazo.


// sessionStorage se recomienda para:
// Información que debe desaparecer después de la sesión, como datos de un formulario en progreso en una compra o configuraciones temporales de visualización.
// Datos sensibles que no deben persistir más allá de la sesión actual, como detalles de una transacción financiera.


// Ejemplos prácticos: 

// localStorage:
// -------------
// Copiar

//   // Guardar datos
// localStorage.setItem('usuario', 'JuanPerez');
//   // Obtener datos
// let usuario = localStorage.getItem('usuario');
// console.log(usuario); // 'JuanPerez'
//   // Eliminar datos
// localStorage.removeItem('usuario');

// ------------------------------------------------------

// sessionStorage:
// ---------------
// Copiar

// // Guardar datos
// sessionStorage.setItem('detalleCompra', 'Libro de JavaScript');
// // Obtener datos
// let detalle = sessionStorage.getItem('detalleCompra');
// console.log(detalle); // 'Libro de JavaScript'
// // Eliminar datos al cerrar la pestaña
// sessionStorage.removeItem('detalleCompra');


// ------------------------------------&&&&&&&----------------------------------------------

// Guardar datos en LocalStorage
// Almacenamiento de Datos en localStorage con setItem
// El objeto localStorage es una herramienta poderosa para almacenar datos directamente en el navegador del usuario, 
// lo que permite preservar información entre sesiones de navegación. A continuación, 
// exploraremos cómo utilizar el método setItem para guardar diferentes tipos de datos, como cadenas de texto (strings) y números.

// Uso Básico de setItem
// El método setItem de localStorage permite guardar pares clave-valor, donde tanto la clave como el valor deben ser cadenas de texto. La sintaxis general es:

// localStorage.setItem('clave', 'valor');
// <--------------->

// Ejemplos de Uso
// Almacenar una cadena de texto:

// Guarda un saludo en el almacenamiento local:


 
//  localStorage.setItem('saludo', 'Hola, mundo!');

// Almacenar un número:

// Aunque localStorage solo puede almacenar cadenas de texto, puedes guardar números como texto y luego convertirlos de vuelta a números cuando los leas:


 
//  localStorage.setItem('puntuacion', '10');
// Para recuperar el número y convertirlo a su tipo original:

 
//  let puntuacion = parseInt(localStorage.getItem('puntuacion'));
//  console.log(puntuacion); // 10

// Almacenar datos complejos (como objetos o arrays):

// Para guardar objetos o arrays, primero debes convertirlos a una cadena JSON:


//  let usuario = {
//    nombre: 'Ana',
//    edad: 25
//  };
 
//  localStorage.setItem('usuario', JSON.stringify(usuario));
// Para recuperarlo, usa `JSON.parse`:

//  let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
//  console.log(usuarioRecuperado.nombre); // Ana

// Consideraciones al usar localStorage
// Limitación de Tipo: localStorage solo almacena cadenas. Cualquier otro tipo de dato, incluidos los números, booleanos o arrays, 
// debe ser convertido a cadena antes de almacenarse y revertido a su tipo original al ser leído.

// Seguridad: No es seguro almacenar datos sensibles, como información de autenticación o datos personales, 
// porque el localStorage es accesible desde el cliente y podría ser leído por cualquier script en la página.

// Capacidad de Almacenamiento: localStorage tiene una capacidad limitada (aproximadamente 5MB por dominio), 
// por lo que es importante gestionar lo que se almacena y evitar guardar grandes cantidades de datos.

// El uso efectivo de localStorage con el método setItem puede mejorar significativamente la experiencia del usuario al permitir la personalización 
// y la persistencia del estado entre sesiones de navegación.

// ----------------------------------------------------&&&&&&&&&&&&&&&&&&&&&&&&&&------------------------------------------------------------------


// Eliminación de Datos en localStorage y sessionStorage: 
// -----------------------------------------------------

// El almacenamiento web en los navegadores modernos se realiza a través de dos mecanismos principales: localStorage y sessionStorage. 
// Estos permiten almacenar datos de manera local sin interactuar con el servidor. En algún momento, puede ser necesario eliminar estos datos, 
// ya sea de manera individual o completamente. A continuación, se detallan los métodos para realizar estas acciones.

// Uso de removeItem para eliminar datos específicos
// removeItem es un método que permite eliminar un ítem específico del almacenamiento, utilizando la clave del dato que deseas eliminar.

// Sintaxis básica:

// localStorage.removeItem('clave');
// sessionStorage.removeItem('clave');

// Ejemplo de uso:

// Para eliminar un usuario guardado en localStorage:

// localStorage.removeItem('usuario');

// Para eliminar una sesión de usuario específica en sessionStorage:

// sessionStorage.removeItem('sesion_usuario');
// Este método es útil cuando conoces la clave del ítem que deseas eliminar y no necesitas eliminar todos los datos almacenados.

// Uso de clear para eliminar todos los datos
// El método clear elimina todos los datos almacenados en localStorage o sessionStorage, sin distinción de claves o valores. 
// Este método es radical y útil cuando deseas limpiar completamente el almacenamiento para el dominio dado.

// Sintaxis básica:

// localStorage.clear();
// sessionStorage.clear();

// Para eliminar todos los datos guardados en localStorage:

// localStorage.clear();

// Para eliminar todos los datos en sessionStorage, especialmente útil cuando una sesión de navegador se cierra y 
// quieres asegurar que no queden datos residuales:

// sessionStorage.clear();

// Consideraciones importantes
// Persistencia de datos: Mientras localStorage mantiene la información sin importar el cierre del navegador, 
// sessionStorage lo hace únicamente durante la vida de la pestaña o ventana.

// Seguridad: No almacenes información sensible como contraseñas o información financiera sin adecuadas medidas de cifrado, 
// dado que tanto localStorage como sessionStorage son accesibles desde el lado del cliente.

// Límites de almacenamiento: Ambos métodos tienen limitaciones de almacenamiento que, aunque suficientes para la mayoría de las tareas, 
// deben considerarse al planificar el almacenamiento de grandes cantidades de datos.

// Prácticas recomendadas
// Validar claves antes de eliminar: Antes de eliminar datos, asegúrate de que la clave exista para evitar errores.

// Gestión de almacenamiento: Regularmente verifica lo que está almacenado y elimina lo que ya no sea necesario para optimizar el rendimiento de la aplicación.

// Informar a los usuarios: Si la aplicación depende significativamente de estos mecanismos de almacenamiento, 
// considera informar a los usuarios antes de realizar limpiezas masivas de datos.

// La correcta administración de localStorage y sessionStorage mejora el rendimiento y la experiencia del usuario, manteniendo la aplicación eficiente y segura.




