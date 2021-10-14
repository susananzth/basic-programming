// Gavedad en La Tierra
var g_tierra = 9.8;

// Gavedad en Marte
var g_marte = 3.7;

// Gavedad en Jupiter
var g_jupiter = 24.8;

// Peso especificado por el usuario
var usuario = prompt('¿Cuál es tu peso?');
var planeta = parseFloat(prompt('Elige un planeta\n 1 es marte, 2 es júpiter'));
peso = parseFloat(usuario);

// Variable de peso final
var peso_final = 0;

// Mensaje
var mensaje = 'No hay nada para mostrar';

// Condicionales
if (planeta === 1)
{
    // Operación
    peso_final = peso * g_marte / g_tierra;
    mensaje = 'Tu peso en marte es: <b>'+parseInt(peso_final)+' Kg.</b>\n';
}else if (planeta === 2){
    // Operación
    peso_final = peso * g_jupiter / g_tierra;
    mensaje = 'Tu peso en jupiter es: <b>'+parseInt(peso_final)+' Kg.</b>\n';
}else{
    mensaje = 'No eligió un planeta';
}
document.write(mensaje);

// Mismo mensaje pero redondeado a entero
document.write('Tu peso redondeado a entero es: <b>'+parseInt(peso_final)+' Kg.</b>');

