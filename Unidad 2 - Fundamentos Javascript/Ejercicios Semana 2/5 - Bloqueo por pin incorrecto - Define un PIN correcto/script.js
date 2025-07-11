const pinCorrecto = "6749";

let intentos = 3;

for(intentos=0;intentos<3;intentos++) {

    let ingresoNúmero=(prompt("Ingrese Pin de 4 Dígitos: "));

    if (ingresoNúmero===null) {
        alert("Operación Cancelada");
        break;
    }
    
    if (isNaN(ingresoNúmero) || ingresoNúmero.length!==4) {
            alert(`Por favor ingrese un Pin Válido de 4 Números, le quedan ${intentos} intentos`);
            continue;
    }
    if (ingresoNúmero!==pinCorrecto){
        alert(`Pin Incorrecto, le quedan ${2-intentos} Intentos.`)
        continue
    } 

    
    if (ingresoNúmero===pinCorrecto){
        alert(`Pin Correcto!, puede continuar....`);
        break;
    } else {
        alert(`El pin ${ingresoNúmero} no es correcto, se abortará la Operación`);
        break;
    }

}