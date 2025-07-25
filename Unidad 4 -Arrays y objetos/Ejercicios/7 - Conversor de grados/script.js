// ### Ejercicio 7: Conversor de grados

// > Array con temperaturas en Celsius.
// > 
// > 
// > Función que retorne un nuevo array en Fahrenheit.
// > 1ºC = 33.8ºF
// > 0*(1 °C × 9/5) + 32 = 33.8ºF
//

const tempCelcius = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

function celciusAFahrenheit (celciusArray) {
    let tempFahrenheit = [];
    for (let i=0;i<celciusArray.length;i++) {
        let fahrenheit = (celciusArray[i]*9/5)+32;
        tempFahrenheit.push(fahrenheit.toFixed(1));
        
    } return tempFahrenheit;
}
const tempFahrenheit= celciusAFahrenheit(tempCelcius);
alert(`temperaturas en Celcius: ${tempCelcius.join(", ")} ºC.\nTemperaturas en Fahrenheit: ${tempFahrenheit.join(", ")} ºF.\n`);

