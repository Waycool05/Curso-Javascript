const objetoConArrays ={
    nombre: "objeto con Array",
    arr: ["abeja","banana","camión","dado"],
};

// ejemplo con funciones con flechas
// objetoConArrays.arr.forEach(element => {
//     console.log(element + " jajaja");
// })

// ejemplo con For
// for (let i=0;i<objetoConArrays.arr.length;i++) {
//     console.log(objetoConArrays.arr[i] + " jajajja2");
// }
// este código se puede hacer más facil de leer agregando una variable para simplificarlo:
const nuevoArray=objetoConArrays.arr;
for (let i=0;i<nuevoArray.length;i++) {
    console.log(nuevoArray[i] + " jajajja2");
}