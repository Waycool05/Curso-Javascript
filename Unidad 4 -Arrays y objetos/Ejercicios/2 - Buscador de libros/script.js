// ### Ejercicio 2: Buscador de libros

// > Crea un array con objetos de libros (título, autor).
// > 
// > 
// > Función que reciba un autor y devuelva sus libros.
// >

arrayLibros= [
    {id: "1",autor: "Gabriel Garcia Marquez",titulo: "Cien años de soledad"},
    {id: "2",autor: "J. R. R. Tolkien",titulo: "El señor de los anillos (Trilogía)"},
    {id: "3",autor: "George Orwel", titulo: "1984"}, 
    {id: "4",autor: "Aldous Huxley", titulo: "Un mundo feliz"},
    {id: "5",autor: "Jane Austen", titulo: "Orgullo y prejuicio"},
    {id: "6",autor: "Fiodor Dostoyevski", titulo: "Crimen y castigo"},
    {id: "7",autor: "Vladimir Nabokov", titulo: "Lolita"},
    {id: "8",autor: "James Joyce", titulo: "Ulises"},
    {id: "9",autor: "Gustave Flaubert", titulo: "Madame Bovary"},
    {id: "10",autor: "Marcel Proust", titulo: "En busca del tiempo perdido"},
];

function obtenerTitulo() {
    let ingresoAutor=prompt("Por favor ingrese el nombre del Autor: ")
    bandera=false
    
    
    if (ingresoAutor===null) {
        alert('operación cancelada por el usuario.')
        return
    }
    let libroEncontrado =""


    ingresoAutor=ingresoAutor.toLocaleLowerCase();
    for (i=0;i<arrayLibros.length;i++) {
        if (arrayLibros[i].autor.toLocaleLowerCase().includes(ingresoAutor)) {
            libroEncontrado+="- " +arrayLibros[i].titulo + " (" + arrayLibros[i].autor + ")\n"
            bandera=true;
        }

    }
    if (bandera) {
        alert(`Libro encontrado: \n\n` + libroEncontrado)
    } else {
        alert(`No se encontró libro para este autor `+ingresoAutor)
    }
        
}
obtenerTitulo()
    
