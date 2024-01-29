
alert("Bienvenido a Valentime Nails");
console.log("Bienvenido a Valentime Nails");

let user = prompt("Ingrese su nombre");

let seguirCotizando = true;
let esculpidas = 5000;
let semipermanente = 4200;
let francesas = 4000;
let polygel = 7500;

let serviciosFinal ="";
let valorTotal = 0;

PreguntarServiciosUno();

while (seguirCotizando) {
    let tipoServicio = parseInt(prompt(`Bienvenido ${user}, a continuación puede agregar un segundo servicio o terminar la compra: \n1. Esculpidas: $5000\n2. Semipermanente: $4200\n3. Francesas: $4000\n4. Polygel: $7500\n5. Terminar cotización `))
    switch(tipoServicio) {
        case 1:
            valorTotal += esculpidas;
            serviciosFinal +="Esculpidas, ";

        break;
        case 2:
            valorTotal += semipermanente;
            serviciosFinal +="Semipermanente, ";
        break;
        case 3: 
            valorTotal += francesas;
            serviciosFinal +="Francesas, ";
        break;
        case 4: 
            valorTotal += polygel;
            serviciosFinal +="Polygel, ";
        break;
        case 5: 
            console.log(`Los servicios que elegiste son: ${serviciosFinal}y el total de estos es: $${valorTotal}`);
            alert(`Los servicios que elegiste son: ${serviciosFinal}y el total de estos es: $${valorTotal}`);
            seguirCotizando = false
        break;
        default:
            console.log("Ingresa una opción válida") 
            alert("Elegí una opción válida")
        break;
    }
}

function PreguntarServiciosUno(){

    let tipoServicio = parseInt(prompt(`Bienvenido ${user}, a continuación te mostramos nuestros servicios: \n1. Esculpidas: $5000\n2. Semipermanente: $4200\n3. Francesas: $4000\n4. Polygel: $7500\n5. Cerrar `))
    switch(tipoServicio) {
        case 1:
        valorTotal += esculpidas;
        serviciosFinal +="Esculpidas, ";
        break;
        case 2:
        valorTotal += semipermanente;
        serviciosFinal +="Semipermanente, ";
        break;
        case 3: 
        valorTotal += francesas;
        serviciosFinal +="Francesas, ";
        break;
        case 4: 
        valorTotal += polygel;
        serviciosFinal +="Polygel, ";
        break;
        case 5: 
        alert("Gracias, vuelva prontos");
        seguirCotizando = false;
        break;
        default:
            console.log("Ingresa una opción válida") 
            alert("Elegí una opción válida")
            PreguntarServiciosUno();
        break;
    }
}