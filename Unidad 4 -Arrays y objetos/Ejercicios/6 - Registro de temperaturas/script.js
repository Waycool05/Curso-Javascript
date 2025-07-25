// ### Ejercicio 6: Registro de temperaturas

// > Array con temperaturas semanales.
// > 
// > 
// > Función que devuelva la temperatura máxima y mínima.
// >

const temperaturasSemana = [
    { dia: "Lunes", maxima: 25, minima: 15 },
    { dia: "Martes", maxima: 28, minima: 18 },
    { dia: "Miércoles", maxima: 22, minima: 14 },
    { dia: "Jueves", maxima: 30, minima: 20 },
    { dia: "Viernes", maxima: 27, minima: 17 },
    { dia: "Sábado", maxima: 26, minima: 16 },
    { dia: "Domingo", maxima: 24, minima: 15 }
];

function temperaturas() {
    let diaTemp="";
    for (i=0;i<temperaturasSemana.length;i++) {
        diaTemp+=`${i+1}. ${temperaturasSemana[i].dia}, Temp Máx: ${temperaturasSemana[i].maxima}C. Mín: ${temperaturasSemana[i].maxima}C.\n`
    }
    alert(diaTemp);
}
temperaturas()
