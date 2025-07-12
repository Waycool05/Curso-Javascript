// ### **Ejercicio 6: Menú de opciones básico**

// Muestra un menú repetidamente hasta que el usuario elija salir:

// ```jsx
// 1. Ver saludo
// 2. Mostrar hora ficticia
// 3. Salir
// ```

// Usa un bucle. Las opciones pueden mostrar mensajes simulados como “Hola, usuario” o “La hora es 12:00”.



let opciones;

while (true) {
    opciones = prompt(
        "seleccione una opción:\n" + 
        "1. Ver saldo\n" + 
        "2. La hora actual es 13:00PM\n" +
        "3. Salir"
    );
    if (opciones===null) {
        alert("Operación cancelada");
        break;
    }
    switch (opciones) {
        case "1": 
            alert("!Hola Usuario");
            break;
        case "2": 
            alert("La hora actual es 13:00hs PM");
            break;
        case "3":
            alert("Saliendo del programa");
            break;
        default: 
            alert("opción inválida, por favor elija 1,2 o 3.");    

    }
if (opciones =="3") {
    break;
}
} 