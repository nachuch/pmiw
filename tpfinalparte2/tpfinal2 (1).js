//https://youtu.be/oYH7oeksh48
// profe no llego a explicar todo el codigo en 2 minutos.
// profe no logre que empezara el minijuego.

let fondos = []
let funcion
let vivo = true
let libro
let colororiginal = 255
let tintoscuro = 100
let sonido

function preload() {
    for (let i = 0; i < 6; i++) {
        fondos[i] = loadImage('./fondo' + i + '.png')
        libro = loadImage('./libro.png')
    }
}

function setup() {
    createCanvas(640, 480)
    estado = 0
    funcion = new Juego()
    sonido = createAudio('desierto.wav')
    sonido.loop(true)
    agregarsonido()
    sonidoboton()
}

function draw() {
    background(1)
    funcion.dibuja()
}

function keyPressed() {
    //movimiento de personajes
    // funcion.moversatanas(keyCode)
    funcion.moverjesus(keyCode)
}

function mousePressed() {
    if (estado === 0) {
        if (mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 450) {
            estado = 1 // jugar pantalla
        } else if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            // Créditos
            estado = 20
        } else if (mouseX > 265 && mouseX < 415 && mouseY > 350 && mouseY < 450) {
            // Instrucciones
            estado = 24
        }
    } else if (estado === 20) {
        //pantalla creditos

        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            estado = 0 // Volver a la pantalla inicial
        }
    } else if (estado === 24) {
        // pantalla instrucciones

        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            estado = 0 // Volver a la pantalla inicial
        }
    } else if (estado === 25) {
        // pantalla ganar

        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            estado = 0 // Volver a la pantalla inicial
        }
    } else if (estado === 26) {
        // pantalla perder

        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            estado = 0 // volver a la pantalla inicial
        }
    }
}
