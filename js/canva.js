function dibujarLinia(lienzo, color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

var canvas = document.getElementById('dibujito');
var a = canvas.getContext('2d');

a.beginPath();
a.strokeStyle = 'red';
a.moveTo(100, 100);
a.lineTo(200, 200);
a.stroke();
a.closePath();

dibujarLinia(a, 'pink', 10, 300, 220, 10);
dibujarLinia(a, 'yellow', 310, 10, 10, 220);

var canvas2 = document.getElementById('dibujito2');
var b = canvas2.getContext('2d');

// Bucle while
var lineas = 30;
var l = 0;
var yi = 0;
var xf = 0;
while (l < lineas) {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinia(b, 'blue', 0, yi, xf, 300);
    l++;
}

dibujarLinia(b, 'green',1, 1, 1, 300);
dibujarLinia(b, 'green',1, 300, 299, 299);
dibujarLinia(b, 'green',300, 0, 300, 300);
dibujarLinia(b, 'green',300, 1, 0, 1);

var canvas3 = document.getElementById('dibujito3');
var c = canvas3.getContext('2d');
// Bucle for
var lineas = 30;
var yi = 0;
var xf = 0;
for (l = 0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinia(c, 'pink', 0, yi, xf, 300);
}