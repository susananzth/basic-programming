var villa = document.getElementById("villa");
var papel = villa.getContext('2d');
var mapa = "img/tile.png";

// Crear objeto de la imagen para insertarlo en el canvas
var fondo = new Image();
// Indica la ruta de la imágen
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "img/vaca.png";
vaca.addEventListener("load", dibujarVaca);

var pollo = new Image();
pollo.src = "img/pollo.png";
pollo.addEventListener("load", dibujarPollo);

var cerdo = new Image();
cerdo.src = "img/cerdo.png";
cerdo.addEventListener("load", dibujarCerdo);

function dibujar() {
    papel.drawImage(fondo, 0, 0);
}

function dibujarVaca() {
    papel.drawImage(vaca, 10, 300);
}

function dibujarPollo() {
    papel.drawImage(pollo, 300, 10);
}

function dibujarCerdo() {
    papel.drawImage(cerdo, 0, 150);
}
/**
* @description Muestra un número aleatorio
* @param {integer} min valor mínimo
* @param {integer} max valor máximo
* @returns {integer} número aleatorio
*/
function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min +1)) + min;
    return resultado;
}
document.write(aleatorio(10,20));