// ### Ejercicio 4: Filtro de tareas completadas

// > Array de tareas (objeto: nombre, completada: true/false).
// > 
// > 
// > Función que filtre solo las tareas completadas.
// >

const tareasAutomotrices = [
    { id: 1, tarea: "Cambiar aceite del motor", completada: true },
    { id: 2, tarea: "Revisar frenos", completada: false },
    { id: 3, tarea: "Alinear dirección", completada: true },
    { id: 4, tarea: "Revisar nivel de refrigerante", completada: true },
    { id: 5, tarea: "Controlar presión de neumáticos", completada: false },
    { id: 6, tarea: "Reemplazar filtro de aire", completada: true },
    { id: 7, tarea: "Verificar batería", completada: false },
    { id: 8, tarea: "Limpiar inyectores", completada: true },
    { id: 9, tarea: "Controlar luces del vehículo", completada: false },
    { id: 10, tarea: "Revisar sistema de escape", completada: true },
    { id: 11, tarea: "Lubricar puertas", completada: false },
    { id: 12, tarea: "Verificar correa de distribución", completada: false },
    { id: 13, tarea: "Revisar suspensión", completada: true },
    { id: 14, tarea: "Lavar motor", completada: false },
    { id: 15, tarea: "Revisar niveles de fluidos", completada: true },
    { id: 16, tarea: "Verificar alineación de ruedas", completada: true },
    { id: 17, tarea: "Chequear sistema eléctrico", completada: false },
    { id: 18, tarea: "Inspeccionar mangueras", completada: false },
    { id: 19, tarea: "Reemplazar bujías", completada: true },
    { id: 20, tarea: "Revisar estado de parabrisas", completada: true }
];

function comprobarCompletada () {
    let varCompletada=[]
    for(i=0;i<tareasAutomotrices.length;i++) {
        if (tareasAutomotrices[i].completada===true) {
            varCompletada.push(tareasAutomotrices[i].tarea);
        } 

    }
    let respuesta="Tareas Completadas:\n";
    for (let x=0;x<varCompletada.length;x++){
        respuesta +="- "+varCompletada[x] + "\n"
    }
    alert(respuesta)
}
comprobarCompletada()