class jesus {
    constructor(posx, posy, tam) {
        this.posx = posx
        this.posy = posy
        this.tam = tam
        this.vivo = true
        this.colision = false
        this.imagen = loadImage('./fondo3,png')
        this.imagencolision = loadImage('./choca.png') //efecto de choque img
        this.colisiona = false
        this.tiempocolision = 0
        this.movimientoizq = false
        this.movimientoder = false
    }
    actualiza() {
        if (this.colisiona && millis() - this.tiempocolision > 500) {
            this.colisiona = false
        }

        if (this.movimientoizq && this.posx > 0 + this.tam / 2) {
            this.posx -= 8 // se mueve a la izq
        } else if (this.movimientoder && this.x < width - this.tam / 2) {
            this.posx += 8 // se mueve a la der
        }

        if (this.posx < 0) {
            this.posx = 0
        } else if (this.posx > width) {
            this.posx = width
        }
    }

    dibuja() {
        if (this.vivo) {
            image(fondos[3], this.posx, this.posy) //imagen vivo
        } else {
            image(fondos[4], this.posx, this.posy) //imagen muerto
        }
        if (this.colisiona) {
            image(this.imagencolision, this.posx - this.tam, this.posy - this.tam, this * 2, this.tam * 2)
        } else {
            image(this.imagen, this.posx - this.tam / 2, this.posy - this.tam / 4, this.tam, this.tam)
        }
    }

    moverplayer(param1) {
        //mover personaje parametro para la posicion x
        this.posx = this.posx + param1
    }

    colisionado() {
        //si colisiona los millis (tiempo) sigue pasando
        this.colisiona = true
        this.tiempocolision = millis()
    }
}

function mover(keyCode) {
    if (keyCode == LEFT_ARROW) {
        this.moveizq()
        this.movi = true
    } else if (keyCode == RIGHT_ARROW) {
        this.moveder()
        this.movd = true
    }
}

function moveizq() {
    this.posx += 15
}

function moveder() {
    this.posx -= 15
}

function muerto() {
    this.vivo = false
}

function choca(plant) {
    if (dist(this.posx, this.posy, plant.posx, plant.posy) < 50) {
        this.muerto()
        return true
    }
}
