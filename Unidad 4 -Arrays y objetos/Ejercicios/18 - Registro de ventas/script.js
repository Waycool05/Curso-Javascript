// ### Ejercicio 18: Registro de ventas

// > Array de objetos con producto, cantidad y precio unitario.
// > 
// > 
// > Función que calcule total por venta y general.
// >

// Array de ejemplo con el registro de ventas
const ventas = [
    { producto: "Laptop", cantidad: 1, precioUnitario: 1200 },
    { producto: "Mouse", cantidad: 2, precioUnitario: 25 },
    { producto: "Teclado", cantidad: 1, precioUnitario: 75 },
    { producto: "Monitor", cantidad: 3, precioUnitario: 300 }
];

// Función que calcula los totales
function calcularVentas(listaDeVentas) {
    // Variable para acumular el total de TODAS las ventas
    let totalGeneral = 0;
    // Array para guardar el detalle de cada venta procesada
    const resumenVentas = [];

    // Recorremos cada venta en el registro
    for (let i = 0; i < listaDeVentas.length; i++) {
        const venta = listaDeVentas[i];
        
        // Calculamos el total para la venta ACTUAL
        const totalVenta = venta.cantidad * venta.precioUnitario;
        
        // Agregamos el total de esta venta al total general
        totalGeneral += totalVenta;
        
        // Guardamos el detalle de esta venta en nuestro array de resumen
        resumenVentas.push({
            producto: venta.producto,
            total: totalVenta
        });
    }

    // Devolvemos un objeto con ambos totales
    return {
        resumen: resumenVentas,
        totalGeneral: totalGeneral
    };
}

// Ejecutamos la función para obtener los resultados
const resultados = calcularVentas(ventas);

// Mostramos los resultados al usuario
let mensajeSalida = "Resumen de Ventas:\n\n";

// 1. Mostramos el detalle de cada venta
for (let i = 0; i < resultados.resumen.length; i++) {
    const item = resultados.resumen[i];
    mensajeSalida += `Producto: ${item.producto}\n`;
    mensajeSalida += `Total de la venta: $${item.total}\n`;
    mensajeSalida += "------------------------\n";
}

// 2. Mostramos el total general
mensajeSalida += `\nTOTAL GENERAL DE VENTAS: $${resultados.totalGeneral.toFixed(2)}`;

alert(mensajeSalida);