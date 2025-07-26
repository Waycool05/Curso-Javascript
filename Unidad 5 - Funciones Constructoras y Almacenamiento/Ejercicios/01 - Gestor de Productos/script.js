// 1. **Gestor de Productos**
//     - Crea una clase Producto con nombre y stock.
//     - Crea una clase Inventario para manejar un array de productos.
//     - Métodos: agregarProducto, eliminarProducto, mostrarProductos.
//     - Persiste el inventario en localStorage.

// 1. Clase Producto
class Producto {
    constructor(nombre, stock) {
        this.nombre = nombre;
        this.stock = stock;
    }
}

// 2. Clase Inventario
class Inventario {
    constructor() {
        // Inicializamos el array de productos. 
        // Primero, intentamos cargar lo que haya en localStorage.
        this.productos = this.cargarDesdeLocalStorage();
    }

    // Método para agregar un producto
    agregarProducto(producto) {
        // Verificamos si el producto ya existe (por nombre)
        const existe = this.productos.some(p => p.nombre.toLowerCase() === producto.nombre.toLowerCase());
        if (existe) {
            alert(`El producto "${producto.nombre}" ya existe en el inventario.`);
            return false; // Indica que no se agregó
        }
        this.productos.push(producto);
        this.guardarEnLocalStorage(); // Actualizamos localStorage
        alert(`Producto "${producto.nombre}" agregado con éxito.`);
        return true; // Indica que se agregó
    }

    // Método para eliminar un producto
    eliminarProducto(nombreProducto) {
        const indice = this.productos.findIndex(p => p.nombre.toLowerCase() === nombreProducto.toLowerCase());
        if (indice !== -1) {
            this.productos.splice(indice, 1);
            this.guardarEnLocalStorage(); // Actualizamos localStorage
            alert(`Producto "${nombreProducto}" eliminado con éxito.`);
            return true;
        } else {
            alert(`No se encontró el producto "${nombreProducto}".`);
            return false;
        }
    }

    // Método para mostrar todos los productos
    mostrarProductos() {
        if (this.productos.length === 0) {
            alert("El inventario está vacío.");
            return;
        }
        let mensaje = "Inventario de Productos:\n\n";
        this.productos.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto.nombre} - Stock: ${producto.stock}\n`;
        });
        alert(mensaje);
    }

    // Método para guardar el inventario en localStorage
    guardarEnLocalStorage() {
        // Convertimos el array de productos a una cadena JSON para guardarlo
        localStorage.setItem('inventario', JSON.stringify(this.productos));
    }

    // Método para cargar el inventario desde localStorage
    cargarDesdeLocalStorage() {
        const inventarioGuardado = localStorage.getItem('inventario');
        // Si hay algo guardado, lo parseamos de JSON a un array. Si no, devolvemos un array vacío.
        return inventarioGuardado ? JSON.parse(inventarioGuardado) : [];
    }
}

// --- Interacción con el usuario ---

// Creamos una instancia de nuestro Inventario
const miInventario = new Inventario();

function iniciarGestor() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt(
            "--- Gestor de Productos ---\n\n" +
            "1. Agregar Producto\n" +
            "2. Eliminar Producto\n" +
            "3. Mostrar Inventario\n" +
            "4. Salir\n\n" +
            "Elige una opción:"
        );

        switch (opcion) {
            case "1":
                const nombre = prompt("Introduce el nombre del producto:");
                const stock = parseInt(prompt("Introduce el stock del producto:"));
                if (nombre && !isNaN(stock) && stock >= 0) {
                    const nuevoProducto = new Producto(nombre, stock);
                    miInventario.agregarProducto(nuevoProducto);
                } else {
                    alert("Datos inválidos. Asegúrate de introducir un nombre y un stock numérico.");
                }
                break;

            case "2":
                const nombreEliminar = prompt("Introduce el nombre del producto a eliminar:");
                if (nombreEliminar) {
                    miInventario.eliminarProducto(nombreEliminar);
                } else {
                    alert("Debes introducir un nombre.");
                }
                break;

            case "3":
                miInventario.mostrarProductos();
                break;

            case "4":
                if (confirm("¿Estás seguro de que quieres salir? Los cambios se guardarán.")) {
                    continuar = false;
                    alert("Saliendo del gestor. ¡Hasta luego!");
                }
                break;

            default:
                alert("Opción no válida. Por favor, elige 1, 2, 3 o 4.");
                break;
        }
    }
}

// Iniciamos el gestor de productos
iniciarGestor();