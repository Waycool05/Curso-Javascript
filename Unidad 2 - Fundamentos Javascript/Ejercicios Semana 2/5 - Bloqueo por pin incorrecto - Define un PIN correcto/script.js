const pinCorrecto = "6749";

for(i=0;i<3;i++) {

    let ingresoNúmero=(prompt("Ingrese Pin de 4 Dígitos: "));

    if (ingresoNúmero===null) {
        alert("Operación Cancelada");
        break;
    } 
    
    if (isNaN(ingresoNúmero) || ingresoNúmero.length!==4) {
            alert(`Por favor ingrese un Pin Válido de 4 Números, le quedan ${2-i} intentos`);
            continue;
    }
    if (ingresoNúmero!==pinCorrecto){
        alert(`Pin Incorrecto, le quedan ${2-i} Intentos.`)
        continue
    } 
    if (ingresoNúmero===pinCorrecto){
        alert(`Pin Correcto!, puede continuar....`);
        break;
    } 
}
if (i===3) {
    alert ("atención, usuario bloqueado.")
}