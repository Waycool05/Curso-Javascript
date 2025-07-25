// ### Ejercicio 10: Carrito de compras

// > Array de productos con precio.
// > 
// > 
// > Función que calcule el total del carrito.
// >

// 1. Catálogo de productos disponibles (no se modifica)
const productosDisponibles = [
    { id: 1, nombre: "Camiseta", precio: 15.99 },
    { id: 2, nombre: "Pantalón", precio: 29.50 },
    { id: 3, nombre: "Zapatos", precio: 59.99 },
    { id: 4, nombre: "Gorra", precio: 12.00 },
    { id: 5, nombre: "Mochila", precio: 45.75 },
    { id: 6, nombre: "Calcetines", precio: 5.25 },
    { id: 7, nombre: "Bufanda", precio: 18.90 },
    { id: 8, nombre: "Gafas de sol", precio: 25.00 },
    { id: 9, nombre: "Reloj", precio: 99.99 },
    { id: 10, nombre: "Cinturón", precio: 14.50 }
];

// 2. Carrito del usuario (empieza vacío)
let carritoDeCompras = [];

// 3. Función principal para la interacción
function iniciarCompra() {
    let continuarComprando = true;
    alert("¡Bienvenido a la tienda! Elige productos para agregar a tu carrito.");

    // 4. Bucle principal de la compra
    while (continuarComprando) {
        // Mostrar catálogo
        let mensajeCatalogo = "Productos Disponibles:\n\n";
        for (let i = 0; i < productosDisponibles.length; i++) {
            const producto = productosDisponibles[i];
            mensajeCatalogo += `${producto.id}. ${producto.nombre} - $${producto.precio.toFixed(2)}\n`;
        }
        mensajeCatalogo += "\nIngresa el ID del producto que quieres agregar (o 'fin' para terminar):";

        // Pedir elección al usuario
        let eleccion = prompt(mensajeCatalogo);

        // 5. Verificar si el usuario quiere terminar
        if (eleccion.toLowerCase() === 'fin') {
            continuarComprando = false;
            break;
        }

        // 6. Buscar el producto elegido en el catálogo
        let idElegido = parseInt(eleccion);
        let productoEncontrado = null;
        for (let i = 0; i < productosDisponibles.length; i++) {
            if (productosDisponibles[i].id === idElegido) {
                productoEncontrado = productosDisponibles[i];
                break; // Salimos del bucle una vez encontrado
            }
        }

        // 7. Verificar si el producto es válido
        if (productoEncontrado) {
            // Agregar al carrito del usuario
            carritoDeCompras.push(productoEncontrado);
            alert(`"${productoEncontrado.nombre}" ha sido agregado a tu carrito.`);
        } else {
            alert("ID no válido. Por favor, elige un ID de la lista.");
        }
    }

    // 8. Si el carrito no está vacío, mostrar el resumen
    if (carritoDeCompras.length > 0) {
        mostrarResumenCarrito();
    } else {
        alert("Tu carrito está vacío. ¡Gracias por visitarnos!");
    }
}

// 9. Función para mostrar el resumen final
function mostrarResumenCarrito() {
    let salida = "Tu Carrito de Compras:\n\n";
    let total = 0;

    for (let i = 0; i < carritoDeCompras.length; i++) {
        const item = carritoDeCompras[i];
        salida += `${item.nombre} - $${item.precio.toFixed(2)}\n`;
        total += item.precio;
    }

    salida += "\n----------------------\n";
    salida += `TOTAL A PAGAR: $${total.toFixed(2)}`;

    alert(salida);
}

// 10. Iniciar el proceso de compra
iniciarCompra();