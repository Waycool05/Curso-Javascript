let pinCorrecto = "6749";

for(;;) {

    let ingresoNúmero=(prompt("Ingrese Pin de 4 Dígitos: "));

    if (ingresoNúmero===null) {
        alert("Operación Cancelada");
        break;
    }
    if (isNaN(ingresoNúmero) || ingresoNúmero.length!==4) {
        alert("Por favor ingrese un Pin Válido de 4 Números: ");
        continue;
    }
    if (ingresoNúmero===pinCorrecto){
        alert(`Pin Correcto!, puede continuar....`);
        break;
    } else {
        alert(`El pin ${ingresoNúmero} no es correcto, se abortará la Operación`);
        break;
    }

}