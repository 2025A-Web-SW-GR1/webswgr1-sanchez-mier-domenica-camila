/* Escribir un nuevo archivo JS que lea el archivo de ejemplo que tenemos, 
y concatenarle al contenido actual del archivo + la fecha (toString) al final. */

const fs = require('fs');

fs.readFile('./a.txt', 'utf-8', (errorLectura, contenido) => {
    if (errorLectura) {
        console.error('Error al leer el archivo:', errorLectura);
    } else {
        console.log('Contenido original del archivo:' + contenido);

        const nuevoContenido = contenido + new Date().toString();

        fs.writeFile('./a.txt', nuevoContenido, (errorEscritura) => {
            if (errorEscritura) {
                console.error('Error al escribir el archivo:', errorEscritura);
            } else {
                console.log('Archivo actualizado correctamente');

                fs.readFile('./a.txt', 'utf-8', (errorLecturaNuevo, contenidoNuevo) => {
                    if (errorLecturaNuevo) {
                        console.error('Error al leer el archivo actualizado: ', errorLecturaNuevo);
                    } else {
                        console.log('Contenido actualizado del archivo: ' + contenidoNuevo);
                    }
                });
            }
        });
    }
}
);
