// ### Ejercicio 8: Conversor de divisas

// > Convierte pesos a otra moneda (USD, EUR, CLP) según tasa fija.
// > 
// > 
// > El usuario elige la moneda.
// > 
// > Función devuelve el monto convertido.
// >

// 1,285.78 Dolar
// 1,482.64 Euro
// 1.32 peso chileno



function elegirMoneda () {
    while (true) {
        
        let opciones=prompt('Por favor ingrese la moneda a comvertir:\n 1 - Dolares.\n 2 - Euros.\n 3 - Peso Chileno.')
        switch (opciones) {
            case "1":
                alert('Elegiste Dolares, la tasa de conversión es $1 Dolar = $1285.78 Pesos Argentinos.')
                return {tasa: 1285.78, nombre:"dólares"};
            case "2":
                alert('Elegiste Euros, la tasa de conversión es $1 Euro = $1482.64 Pesos Argentinos.')
                return {tasa: 1482.64, nombre:"euros"};
            case "3":
                alert('Elegiste Pesos Chilenos, la tasa de conversión es $1 CLP = 1.32 Pesos Argentinos.')
                return {tasa: 1.32, nombre:"pesos chilenos"};
            default :
                alert('Elegiste una opción Incorrecta, intenta de nuevo')
        }
    }
}

function cantidadIngresada (){
    while(true){
        let cantidadpeso=prompt('Por favor Ingrese la cantidad a convertir:');
        if (cantidadpeso===null) {
            alert('Cancelado por el usuario');
            return null;
        } else if (isNaN(cantidadpeso) || cantidadpeso <=0) {
            alert('Ingrese un monto válido');
        } else {
            alert(`el monto ingresado es $${cantidadpeso}`);
            return cantidadpeso=parseInt(cantidadpeso);
        } 
    } 

}

let moneda=elegirMoneda();

if (moneda){

    let cantidad=cantidadIngresada();
    if (cantidad!==null){
        let resultado=(cantidad/moneda.tasa).toFixed(2);
        alert(`$${cantidad} Ars equivalen a $${resultado}  ${moneda.nombre}. `); 
    } else{
        alert('monto cancelado');
    }

} else {
    alert('moneda cancelada');
}

