var villa = document.getElementById("villa");
var papel = villa.getContext('2d');
// Declara objetos
var fonto = {
    url: "img/tile.png",
    carga: false
};
var vaca = {
    url: "img/vaca.png",
    carga: false
};

// Crear objeto de la imagen para insertarlo en el canvas
// Indica la ruta de la imágen
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargar(fondo));

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargar(vaca));


/**
* @description Carga la imagen
* @param {object} objeto atributos de la imágen
* @returns {void}
*/
function cargar(objeto) {
    objeto.carga = true;
    dibujar(papel, fondo);
}

/**
* @description Dibuja una imágen en el canvas
* @param {object} lienzo Canvas renderizado a 2D
* @param {object} fondo atributos de la imágen
* @returns {void}
*/
function dibujar(lienzo, fondo) {
    lienzo.drawImage(fondo, 0, 0);
}


pollo.imagen = new Image();
pollo.src = "img/pollo.png";
pollo.addEventListener("load", dibujarPollo);

var cerdo = new Image();
cerdo.src = "img/cerdo.png";
cerdo.addEventListener("load", dibujarCerdo);


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
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}
document.write(aleatorio(10, 20));