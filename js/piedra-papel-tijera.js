// Pequeño juego de priedra, papel o tijera
function aleatorio (min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );
}
function seleccion (opcion) {
    switch (parseInt(opcion)) {
        case 1:
            return "Priedra 🥌";
        case 2:
            return "Papel 📄";
        case 3:
            return "Tijeras ✂";
        default:
            return "Perder.";
    }
}
function resultado(pc, jugador) {
    if (pc == jugador) {
        return "Empate!";
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        return "Ganaste!!!";
    } else {
        return "Perdiste :C";
    }
}

// 1 es piedra, 2 es papel, 3 es tijera
let continuar = 1;
let jugador, pc = 0;
while (continuar == 1) {
    pc = aleatorio (1, 3);
    jugador = prompt("Elige 1 para piedra, 2 para papel y 3 para tijeras.");
    alert("Elegiste: " + seleccion(jugador) + ". La PC eligió: " + seleccion(pc) + ". El resultado es: " + resultado(pc,jugador));
    continuar = confirm("¿Volver a jugar?");
}