// ### Ejercicio 3: Simulador de envío (función flecha)

// > El usuario elige un país.
// > 
// > 
// > Una función flecha retorna el costo estimado de envío.
// > 
// > Ejemplo: Argentina → $500, Chile → $700, Otro → $1200.
// >

const envio = (pais) => ({'Argentina':'$500','Chile':'$700','Otro destino':'$1200'})[pais] || '$1200';

let usuarioPais=prompt('Por favor ingrese un país para calcular el costo del envío:\nArgentina\nChile\nOtro destino');
if (usuarioPais===null) {
    alert('Operación Cancelada por el Usuario');
} else {
    let costoEnvio = envio(usuarioPais);
    alert(`El costo del Envío a ${usuarioPais} es ${costoEnvio},`);
}
