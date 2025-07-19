// ### Ejercicio 7: Cotizador de seguros

// > El usuario elige tipo de vehículo.
// > 
// > 
// > Una función flecha da el precio base.
// > 
// > Otra función suma recargo por edad del conductor.
// >

const precioBase=(vehiculo)=> {
    switch (vehiculo){
        case "1": 
            return 1200000;
        case "2": 
            return 45000;
        case "3":
            return 210000;
        default: 
            alert('opción inválida, seleccione\n 1 para auto,\n 2 para moto,\n 3 para camioneta');
            return 0;
    }
};

function edadUsuario(precioBase,edad) {
    let recargo=0;
    if (edad<=17 || edad>=76){
        alert('no tienes edad para manejar, ingresa una edad válida');
        return;
    } else if (edad>=18 && edad <=24) {
        recargo=precioBase*0.20;
    } else if (edad>=25 && edad<60) {
        recargo=precioBase*0.10;
    } else if (edad>60){
        recargo=precioBase*0.15;
    }
    return precioBase + recargo;
}

let vehiculo = prompt('ingrese el vehículo seleccionado\n1 - Auto:\n2 - Moto:\n3 - Camioneta:');

const edad= parseInt(prompt('Ingrese su edad:'));

const precioBasevehiculo= precioBase(vehiculo);


const presupuesto=edadUsuario(precioBasevehiculo,edad);
alert(`Precio base del seguro para ${vehiculo}: $${precioBasevehiculo}\n Precio final por recargo ${edad} años: $${presupuesto} `);
