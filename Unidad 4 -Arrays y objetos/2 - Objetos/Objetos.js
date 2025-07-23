// OBJETOS!!!!!

// const persona = {
//     nombre: "jorge",
//     edad: 24,
//     comidaFavorita: "milanesas con papa frita",
// };

// para acceder a la propiedad de un objeto: 

// let edad = persona.edad;
// console.log(edad); // imprime: 24

// para editar una propiedad :
// persona.edad = 25; // ahora edad vale 25 en el objeto.

// para agregar una nueva propiedad al objeto: 

// persona.colorFavorito = "Azul Francia"; 

// para borrar una propiedad en un objeto: 

// delete persona.comidaFavorita; 

// Recorrer / Itinerar con un objeto: 

// const persona = {
//     nombre: "jorge",
//     edad: 24,
//     comidaFavorita: "milanesas con papas fritas"
// };

// for (let key in persona) {
//     console.log(key, persona[key]);
// }

const arrayDeObjetos = [ // Ejemplo de Una API
    {
        nombre: "jorge",
        edad: 46,
        colorFavorito: "azul francia",
    },
    {
        nombre: "laydi",
        edad: 33,
        colorFavorito: "violeta",
    },
    {
        nombre: "asuna",
        edad: 3,
        colorFavorito: "negro",
    },
]

// el algoritmo de abajo ya practicamente está automatizado, si la base de datos del objeto cambia, el algoritmo va a traer la nueva info

for (let i=0;i<arrayDeObjetos.length; i++){
    console.log("-------------------------------------");
    console.log("nombre: " + arrayDeObjetos[i].nombre);
    console.log("Edad: " + arrayDeObjetos[i].edad);
    console.log("Comida favorita: " + arrayDeObjetos[i].colorFavorito);
}




