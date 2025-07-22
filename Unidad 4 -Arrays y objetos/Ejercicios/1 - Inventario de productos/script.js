// ### Ejercicio 1: Inventario de productos

// > Usa un array de objetos para representar productos (nombre, stock).
// > 
// > 
// > Crea funciones para agregar, eliminar y mostrar productos.
// >

const inventario=[];

function agregarProducto() {
    let nombreProducto = prompt('Por favor ingrese el nombre del producto:');
    if (nombreProducto===null) {
        alert('Operación cancelada por el usuario');
        return;
    }
    let stockProducto = parseInt(prompt('Por favor ingrese el stock(unidades):'));
    if (isNaN(stockProducto) || stockProducto===null){
        alert('Operación cancelada por el usuario - Stock Inválido.');
        return;
    }

    inventario.push({nombreProducto: nombreProducto,stockProducto})
    alert(`Producto: ${nombreProducto},\nUnidades: ${stockProducto},\nAgregado correctamente.`);
}

function eliminarProducto() {
    let nombreProducto = prompt('Por favor ingrese el nombre del producto que quiere eliminar:');
    if (nombreProducto===null) {
        alert('Operación cancelada por el usuario');
        return;
    }
    let hallado=false;

    for (let i=0;i<inventario.length;i++) {
        if (inventario[i].nombreProducto.toLowerCase().includes(nombreProducto.toLowerCase())) {
            let eliminado= inventario[i].nombreProducto;
            inventario.splice(i,1);
            alert(`Producto "${eliminado}" eliminado correctamente`);

            hallado=true;
            break;
        }
    }
    if (!hallado) {
        alert(`Producto "${nombreProducto}" no encontrado en el inventario.`);
    }
}

function mostrarProductos() {
    
    if (inventario.length===0) {
        alert('Sin Productos en el inventario');
    } else {
        let contenido = "Inventario Actual:\n";
        for (let i= 0;i<inventario.length;i++) {
            contenido +=`${i+1}.${inventario[i].nombreProducto}-Stock: ${inventario[i].stockProducto}\n`
        }
        alert(contenido);
    }
}
function menuInv() {
    let opcion;
    do {
        opcion=prompt('Seleccionar una Opción: \n'+'1 - Agregar Producto.\n'+'2 - Eliminar Producto.\n'+'3 - Inventario.\n'+'4 - Salir.'); 
        if (opcion===null){
            alert("cancelado por el usuario");
            break;
        }
        switch(opcion){
            case "1": 
                agregarProducto();
                break;
            case "2":
                eliminarProducto();
                break;
            case "3":
                mostrarProductos();
                break;
            case "4":
                alert('Saliendo......');
                break;
            default:
                break;
        }
    } while (opcion!=="4");    
}

menuInv();