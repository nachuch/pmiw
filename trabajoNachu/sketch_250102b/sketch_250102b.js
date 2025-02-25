const juegoRaiz = new Juego()

function preload() {
    juegoRaiz.cargarImagenesYSonidos()
}

function setup() {
    juegoRaiz.inicio()
}

function draw() {
    juegoRaiz.funcionDraw()
}

function mouseClicked() {
    juegoRaiz.evaluarClick()

    getAudioContext().resume()
}
