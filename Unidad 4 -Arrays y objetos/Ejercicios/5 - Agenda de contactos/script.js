// ### Ejercicio 5: Agenda de contactos

// > Usa un array de objetos con nombre, teléfono y correo.
// > 
// > 
// > Función para buscar un contacto por nombre.
// >

const contactos = [
    { nombre: "Ana Gómez", telefono: "1123456789", correo: "ana.gomez@mail.com" },
    { nombre: "Carlos Pérez", telefono: "1134567890", correo: "carlos.perez@mail.com" },
    { nombre: "Lucía Fernández", telefono: "1145678901", correo: "lucia.fernandez@mail.com" },
    { nombre: "Marcos Díaz", telefono: "1156789012", correo: "marcos.diaz@mail.com" },
    { nombre: "Laura Torres", telefono: "1167890123", correo: "laura.torres@mail.com" },
    { nombre: "Santiago Ruiz", telefono: "1178901234", correo: "santiago.ruiz@mail.com" },
    { nombre: "Valentina Soto", telefono: "1189012345", correo: "valentina.soto@mail.com" },
    { nombre: "Federico López", telefono: "1190123456", correo: "federico.lopez@mail.com" },
    { nombre: "Camila Herrera", telefono: "1101234567", correo: "camila.herrera@mail.com" },
    { nombre: "Julián Castro", telefono: "1121345678", correo: "julian.castro@mail.com" },
    { nombre: "Martina Molina", telefono: "1132456789", correo: "martina.molina@mail.com" },
    { nombre: "Emilia Romero", telefono: "1143567890", correo: "emilia.romero@mail.com" },
    { nombre: "Lucas Medina", telefono: "1154678901", correo: "lucas.medina@mail.com" },
    { nombre: "Sofía Rojas", telefono: "1165789012", correo: "sofia.rojas@mail.com" },
    { nombre: "Tomás Navarro", telefono: "1176890123", correo: "tomas.navarro@mail.com" },
    { nombre: "Isabella Vera", telefono: "1187901234", correo: "isabella.vera@mail.com" },
    { nombre: "Mateo Cabrera", telefono: "1198012345", correo: "mateo.cabrera@mail.com" },
    { nombre: "Agustina Giménez", telefono: "1109123456", correo: "agustina.gimenez@mail.com" },
    { nombre: "Benjamín Muñoz", telefono: "1110234567", correo: "benjamin.munoz@mail.com" },
    { nombre: "Mía Silva", telefono: "1121345670", correo: "mia.silva@mail.com" }
]
function buscarContacto() {
    let listaDeContactos="lista de contactos disponibles:\n";
    for (let i=0;i<contactos.length;i++) {
        listaDeContactos+= `${i+1}. ${contactos[i].nombre} \n`;
    } alert(listaDeContactos);

    let ingresoNombre = prompt(`${listaDeContactos}\nIngrese el nombre (o parte del nombre) para buscar el teléfono:`);

    if (ingresoNombre === null || ingresoNombre==="") {
        alert("Búsqueda cancelada por el usuario / Dato incorrecto.");
        return;
    }

    let encontrado = false;

    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre.toLowerCase().includes(ingresoNombre.toLowerCase())) {
            alert(`Teléfono de ${contactos[i].nombre}: ${contactos[i].telefono} - Correo Electrónico: ${contactos[i].correo}`);
            encontrado = true;
        }
    }

    if (!encontrado) {
        alert(`No se encontró un contacto que contenga "${ingresoNombre}".`);
    }

}
buscarContacto()

