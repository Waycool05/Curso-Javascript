// ### Ejercicio 6: Calculadora de IMC

// > Función que recibe altura y peso.
// > 
// > 
// > Calcula el IMC y retorna: Bajo peso, Normal, Sobrepeso.
// >
// Bajo peso: IMC inferior a 18.5. Las pautas del CDC recomiendan este rango. 
// Peso normal: IMC entre 18.5 y 24.9. 
// Sobrepeso: IMC entre 25.0 y 29.9. Las pautas del CDC indican que este rango es un factor de riesgo para ciertas enfermedades. 
// Obesidad: IMC de 30.0 o más. Las pautas del CDC señalan que este rango aumenta significativamente el riesgo de enfermedades crónicas. 

// El Índice de Masa Corporal (IMC) es un número que se calcula utilizando el peso y la altura de una persona. 
// Se utiliza para evaluar si una persona tiene un peso adecuado en relación a su altura. 
// La fórmula para calcular el IMC es: IMC = peso (kg) / altura (m²). 

let altura = prompt('Ingrese su altura, ejemplo: 1.80(mts)');
let peso = prompt('Por favor ingrese su peso, ejemplo: 80 (kg)');

function calcularIMC() {
    let imc = peso / (altura*altura);
    imc=imc.toFixed(2);
    if (imc<=18.5) {
        alert(`Su IMC es ${imc}, actualente esta debajo del peso normal.`);
    } else if (imc>18.5 && imc<24.9) {
        alert(`Su IMC es ${imc}, su peso es normal.`);
    } else if (imc>25 && imc<29.9) {
            alert(`su IMC es ${imc}, actualmente usted tiene sobrepeso. `);
    } else if (imc>30){
            alert(`Su IMC es ${imc}, Usted tiene Sobrepeso, empiece a hacer ejercicio. largá los postres.`)
    } 
}

if (altura===null || peso===null){
    alert(`Operación cancelada por el usuario`);
} else {
    altura=Number(altura);
    peso=Number(peso);
    if (isNaN(altura) || isNaN(peso) || altura<=0 || peso<=0) {
        alert(`Valores Incorrectos, intente nuevamente.`)
    } else {
        calcularIMC()
    }
}