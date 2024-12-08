let jugar

class Juego {
    constructor() {
        this.estado = 0
        this.tiempo = 0
        this.vidas = 3 // 3 vidas para jesus
        this.metainicial = 0 // tiempo 0
        //this.satanas = new satanas(0, 0)
        this.jesus = new jesus(0, 0, 50)
        this.plantas = []
        // this.creasatanas()
        this.creaJesus = new jesus(300, 600, 50)
        this.creaPlanta = new Planta()

        image('./fondo0.png', 0, 0, 640, 480) // imagen desierto
        for (let i = 0; i < this.cantidadplantas; i++) {
            this.plantas[i].dibuja() // dibuja las plantas
        }

        fill(72, 61, 139)
        rectMode(CORNER)
        rect(0, 0, width, 55)
        fill(255)
        textSize(30)
        textAlign(LEFT)
        text(`Vidas:${this.vidas}`, 25, 30) // texto números de vidas
        textAlign(RIGHT)
        text(`Meta:${this.metainicial}`, width - 50, 30) // texto de la meta tiempo
        this.actualiza()
        this.jesus.actualiza()
        this.jesus.dibuja()
    }
}

function creajesus() {
    this.jesus = new jesus(300, 600, 50)
}

function creaplanta() {
    this.plantas.push(new Planta())
}

function moverjesus() {
    this.jesus.mover(keyCode)
}

function presionarTecla() {
    jugar.moverjesus(keyCode)
    //    jugar.moversatanas(keyCode)
}

function afueraplantasymeta() {
    // si esta en 0 las plantas no estan
    if (this.metainicial >= 0) {
        this.cantidadplantas--
    }
}

function iniciar() {
    jugar = new Juego()
}

function actualizar() {
    this.dibuja()
}

function dibuja() {
    // pantalla principal
    image(fondos[0], 0, 0)
    if (this.estado === 0) {
        background(255)
        image(fondos[5], 0, 0, 640, 480)
        push()
        if (mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }
        image(libro, 50, 350, 150, 100) //libro 1
        pop()
    }

    push()
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        tint(tintoscuro)
    } else {
        tint(colororiginal)
    }

    image(libro, 480, 350, 150, 100) //libro 2

    pop()
    push()
    if (mouseX > 265 && mouseX < 415 && mouseY > 350 && mouseY < 450) {
        tint(tintoscuro)
    } else {
        tint(colororiginal)
    }
    image(libro, 265, 350, 150, 100) //libro 3
    pop()

    textFont('New Amsterdam') //menu texto
    textSize(30)
    push()
    if (mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 450) {
        fill(255)
    }
    text('JUGAR', 75, 405)
    pop()
    textSize(20)
    push()
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        fill(255)
    }
    text('CREDITOS', 505, 405)
    pop()
    textSize(70)
    push()
    if (mouseX > 265 && mouseX < 415 && mouseY > 350 && mouseY < 450) {
        fill(255)
    }
    textSize(14)
    text('INSTRUCCIONES', 287, 405)
    pop()
    stroke(10)
    text('La Carrera de Jesus', 30, 60)
    if (this.estado === 20) {
        background(255, 200, 200) //rosa palido    pantalla creditos
        textFont('New Amsterdam')
        textSize(50)
        text('CREDITOS', 190, 50)
        text('Chaparro Nazarena', 130, 110)
        text('Comisión 2', 190, 170)
        text('Legajo 91573/6', 162, 230)
        text('Diseñado por Freepik', 162, 250)
        textSize(40)
        text('Autor de la serie:Superlibro,Tatsunoko Production', 10, 315)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
    } else if (this.estado === 24) {
        background(0, 203, 209) //celeste claro   pantalla instrucciones
        textFont('New Amsterdam')
        textSize(50)
        text('Mover las flechas del teclado \n para que el personaje se \n mueva de izquierda o derecha.', 10, 50)
        text('Tienes que esquivar los \n obstáculos,hasta llegar a la \n meta.', 10, 280)
        textSize(40)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
    }

    if (this.estado === 25) {
        background(0, 193, 8) // pantalla de ganar
        textFont('New Amsterdam')
        textSize(50)
        text('Ganaste!', 10, 50)
        text('Llegaste a la meta', 10, 280)
        textSize(40)

        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) // libro 2
    } else if (this.estado === 26) {
        background(0) // pantalla de perder
        textFont('New Amsterdam')
        textSize(50)
        text('Perdiste!', 10, 50)
        text('No pudiste llegar a la meta', 10, 280)
        textSize(40)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) // libro 2
        pop()
    }
    // creasatanas()
    // {
    //    this.satanas = new satanas(300, 630)
    // }

    // moversatanas()
    // {
    //     this.satanas.move(keyCode)
    // }

    for (let i = 0; i < this.cantidadplantas; i++) {
        this.plantas[i].mover()

        if (
            !this.plantas[i].colision &&
            dist(this.jesus.posx, this.jesus.posy, this.plantas[i].posx, this.plantas[i].posy) < 50
        ) {
            console.log('Colisión detectada. Vidas antes:', this.vidas)
            this.vidas--
            console.log('Vidas después:', this.vidas)
            this.plantas[i].colision = true
            this.plantas[i].desaparece()
        }
    }

    if (this.vidas <= 0) {
        // si termina las 3 vidas se dirige a la pantalla de perder
        this.estado === 26 //pantalla de perder
    }

    this.afueraplantasymeta() //llamando funcion

    if (this.cantidadplantas <= 3) {
        if (this.jesus.posy <= height + this.jesus.tam * 1.5) {
            this.jesus.y -= 10
        } else this.jesusmeta
        {
            this.estado === 25 //pantalla ganar
            this.jesusmeta = false
        }
    } // si jesus llega a la meta gana y te lleva a la pantalla de ganar
}
