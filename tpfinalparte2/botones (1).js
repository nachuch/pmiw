let botonsound
let isPressed = false //si esta presionado el boton

function agregarsonido() {
    botonsound = loadSound('./boton.wav')
}

function sonidoboton() {
    background(255)
    if (mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 450) {
        //jugar pantalla
        if (!isPressed) {
            botonsound.play() // Reproduce el sonido cuando se presiona
            isPressed = true // cambia el estado a presionado
        }
    } else {
        if (isPressed) {
            botonsound.stop() // detiene el sonido cuando se suelta
            isPressed = false // cambia el estado a no presionado
        }
    }

    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        //creditos pantalla
        if (!isPressed) {
            botonsound.play() // Reproduce el sonido cuando se presiona
            isPressed = true // cambia el estado a presionado
        }
    } else {
        if (isPressed) {
            botonsound.stop() // detiene el sonido cuando se suelta
            isPressed = false // cambia el estado a no presionado
        }
    }
    if (mouseX > 265 && mouseX < 415 && mouseY > 350 && mouseY < 450) {
        //instrucciones pantalla
        if (!isPressed) {
            botonsound.play() // Reproduce el sonido cuando se presiona
            isPressed = true // cambia el estado a presionado
        }
    } else {
        if (isPressed) {
            botonsound.stop() // detiene el sonido cuando se suelta
            isPressed = false // cambia el estado a no presionado
        }
    }
}
