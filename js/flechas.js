// Se guardan la constante del keyCode de las teclas
// en el objeto 'teclas'
teclas = {
    UP:     38,
    DOWN:   40,
    LEFT:   37,
    RIGHT:  39
};
// Evento (addEventListener) que escucha el html (document)
// del teclado (keydown) accionará la función (dibujarTeclado)
document.addEventListener("keyup", dibujarTeclado);
// Guarda el canva en la variable 'cuadrito'
var cuadrito = document.getElementById("flechas");
var papel = cuadrito.getContext('2d');
x = 150;
y = 150;
// Dibujar un punto inicial
dibujarLinia(papel, 'blue',x-1, y-1, x+1, y+1);
// Capturo la información del evento generado por el addEventListener
function dibujarTeclado(evento) {
    var colorcito = 'pink';
    var movimiento = 10;
    switch (evento.keyCode) {
        case teclas.DOWN:
            dibujarLinia(papel, colorcito,x, y, x, y + movimiento);
            y = y + movimiento;
            break;
        case teclas.UP:
            dibujarLinia(papel, colorcito,x, y, x, y - movimiento);
            y = y - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinia(papel, colorcito,x, y, x + movimiento, y);
            x = x + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinia(papel, colorcito,x, y, x - movimiento, y);
            x = x - movimiento;
            break;
        default:
            console.log('No seleccionó una tecla de movimiento');
            break;
    }
}

