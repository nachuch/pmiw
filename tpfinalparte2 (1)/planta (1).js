let plantas = []
let velocidad = 1
let numeroplanta = 3
let fondo2

class Planta {
    constructor(posx, posy, tam, juego) {
        this.juego = juego
        this.posx = random(width) // posición aleatoria posx
        this.posy = random(height) // posición aleatoria posy
        this.velocidad = velocidad
    }

    desaparece() {
        this.posx = width + 100
        this.posy = height + 100
    }

    reseteo() {
        this.posx = random(0, width)
        this.posy = random(height + 50, height + 750)
        this.juego.afueraplantasymeta()
    }

    moverplant() {
        this.posy = this.y - 8.5
        if (this.posy < 0) {
            this.posy = height
            this.reseteo()
            this.juego.metainicial += 10
        }
    }
}

//  actualiza la posición de la planta
function actualiza() {
    this.posx -= this.velocidad // Mueve la planta hacia la izquierda
    if (this.posx < 0) {
        this.posx = width // Si sale de la pantalla, aparece nuevamente desde la derecha
    }
}

// muestra la planta en pantalla
function muestra() {
    image(fondo2, this.posx, this.posy)
}

function creceplanta() {
    for (let i = 0; i < numeroplanta; i++) {
        plantas.push(new Planta())
    }
}

function plantaaumenta() {
    background(255)
    for (let i = 0; i < plantas.length; i++) {
        plantas[i].actualiza() // Actualiza la posición de cada planta
        plantas[i].muestra() // Muestra cada planta
    }
}

//arreglo
