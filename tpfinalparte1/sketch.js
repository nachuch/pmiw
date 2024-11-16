//https://www.figma.com/design/I5ADOXC1ZZj5ms9nLUYrVd/La-Tentacion-de-Jesus?node-id=0-1&t=Rw55scOsLH4J4rQu-1   figma historia

// https://youtu.be/lWTLMhLyneQ

//profe,tuve que mencionar la misma funcion porque tiene unos pequeños cambios sobre el texto y el rectangulo.

let nombres = ['Miguel', 'Luis', 'Jesus', 'Satanas']
let fondos = []
let estado
let libro
let tiempo = 0
let colororiginal = 255
let tintoscuro = 100
let sonido

function preload() {
    fondos.push(loadImage('./fondo0.jpeg'))
    fondos.push(loadImage('./fondo1.jpeg'))
    fondos.push(loadImage('./fondo2.jpeg'))
    fondos.push(loadImage('./fondo3.jpeg'))
    fondos.push(loadImage('./fondo4.jpeg'))
    fondos.push(loadImage('./fondo5.jpeg'))
    fondos.push(loadImage('./fondo6.jpeg'))
    fondos.push(loadImage('./fondo7.jpeg'))
    fondos.push(loadImage('./fondo8.jpeg'))
    fondos.push(loadImage('./fondo9.jpeg'))
    fondos.push(loadImage('./fondo10.jpeg'))
    libro = loadImage('./libro.png')
}

function setup() {
    createCanvas(640, 480)
    background(255)
    estado = 0
    sonido = createAudio('desierto.wav')
    sonido.loop(true)
}

function draw() {
    if (estado === 0) {
        background(255)
        image(fondos[0], 0, 0, 640, 480)
        push()
        if (mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }
        image(libro, 50, 350, 150, 100) //libro 1
        pop()

        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

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
        stroke(10)
        text('La Tentacion de Jesus', 15, 60)
    } else if (estado === 1) {
        background(0)
        image(fondos[1], 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 10 && mouseY < 110) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }
        image(libro, 480, 10, 150, 100) //final 1 libro
        textFont('New Amsterdam')
        textSize(30)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 10 && mouseY < 110) {
            fill(255)
        }
        text('FINAL 1', 503, 65)
        pop()
        cuadrotexto('En el desierto se encuentran Luis y el \n Arcángel Miguel mirando a Jesús que esta \n débil') //llamando la funcion
        pop()

        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 220 && mouseY < 320) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 220, 150, 100) //libro final 3
        textFont('New Amsterdam')
        textSize(30)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 220 && mouseY < 320) {
            fill(255)
        }
        text('FINAL 3', 500, 275)
        pop()

        pop()

        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 120 && mouseY < 220) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }
        image(libro, 480, 120, 150, 100) //libro final 2
        textFont('New Amsterdam')
        textSize(30)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 120 && mouseY < 220) {
            fill(255)
        }
        text('FINAL 2', 502, 175)
        pop()
        pop()
    } else if (estado === 2) {
        background(0)
        image(fondos[2], 0, 0, 640, 480)
        push()
        if (mouseX > 20 && mouseX < 170 && mouseY > 50 && mouseY < 150) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 20, 50, 150, 100) //libro boton
        cuadrotexto(
            'Aparece Satanás y dice: Si eres el hijo de \n Dios, ordena a estas piedras que se \n conviertan en pan.',
        )
        pop()
    } else if (estado === 3) {
        background(0)
        image(fondos[3], 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 50 && mouseY < 150) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 50, 150, 100) //libro 2
        cuadrotexto(
            'Jesús responde: Escrito está. No solo del \n pan vive el hombre, sino de toda palabra \n que sale de la boca de Dios.',
        )
        pop()
    } else if (estado === 4) {
        background(0)
        image(fondos[4], 0, 0, 640, 480)
        push()
        if (mouseX > 210 && mouseX < 360 && mouseY > 20 && mouseY < 120) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 210, 20, 150, 100) //libro 2
        cuadrotexto3()
        pop()
    } else if (estado === 5) {
        background(0)
        image(fondos[5], 0, 0, 640, 480)
        push()
        if (mouseX > 150 && mouseX < 300 && mouseY > 10 && mouseY < 110) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 150, 10, 150, 100) //libro 2
        cuadrotexto(
            '¡Vete Satanás! dijo Jesús. Porque escrito \nestá: Adora al Señor tu Dios y sírvele \nsolamente a él.',
        )
        pop()
    } else if (estado === 6) {
        background(0)
        image(fondos[6], 0, 0, 640, 480)
        push()
        if (mouseX > 10 && mouseX < 160 && mouseY > 10 && mouseY < 110) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 10, 10, 150, 100) //libro 2
        cuadrotexto5()
        pop()
    } else if (estado === 7) {
        background(0)
        image(fondos[7], 0, 0, 640, 480)
        push()
        if (mouseX > 250 && mouseX < 400 && mouseY > 10 && mouseY < 110) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 250, 10, 150, 100) //libro 2
        cuadrotexto('También está escrito: No pongas a prueba al \nSeñor tu Dios contestó Jesús.')
        pop()
    } else if (estado === 8) {
        background(0)
        image(fondos[8], 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 210 && mouseY < 310) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 210, 150, 100) //libro 2
        cuadrotexto('En ese momento Satanás desapareció.')
        pop()
    } else if (estado === 9) {
        background(0, 255, 0)
        textFont('New Amsterdam')
        textSize(50)
        text('FINAL BUENO', 180, 55) //final bueno pantalla verde
        textSize(40)
        text('Jesús resistió a las tentaciones de \n Satanás', 20, 150)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
    } else if (estado === 10) {
        background(0)
        image(fondos[2], 0, 0, 640, 480) //final normal
        push()
        if (mouseX > 20 && mouseX < 170 && mouseY > 50 && mouseY < 150) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 20, 50, 150, 100) //libro boton
        cuadrotexto(
            'Aparece Satanás y dice: Si eres el hijo de \n Dios, ordena a estas piedras que se \n conviertan en pan.',
        )
        pop()
    } else if (estado === 11) {
        background(0)
        image(fondos[3], 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 50 && mouseY < 150) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 50, 150, 100) //libro boton
        cuadrotexto(
            'Jesús responde: Escrito está. No solo del \n pan vive el hombre, sino de toda palabra \n que sale de la boca de Dios.',
        )
        pop()
    } else if (estado === 12) {
        background(0)
        image(fondos[4], 0, 0, 640, 480)
        push()
        if (mouseX > 210 && mouseX < 360 && mouseY > 20 && mouseY < 120) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 210, 20, 150, 100) //libro boton
        cuadrotexto3()
        pop()
    } else if (estado === 13) {
        background(255, 0, 0)
        image(fondos[9], 0, 0, 640, 480)
        push()
        if (mouseX > 10 && mouseX < 160 && mouseY > 10 && mouseY < 110) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 10, 10, 150, 100) //libro 2
        cuadrotexto('En ese momento Jesús se dejó llevar por la \ntentación.')
        pop()
    } else if (estado === 14) {
        background(255, 0, 0)
        textFont('New Amsterdam')
        textSize(50)
        text('FINAL MALO', 180, 55) //final malo pantalla roja
        textSize(40)
        text('Jesús no logro resistir a la tentación \n de Satanás', 20, 150)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
    } else if (estado === 15) {
        background(0)
        image(fondos[2], 0, 0, 640, 480)
        push()
        if (mouseX > 20 && mouseX < 170 && mouseY > 50 && mouseY < 150) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 20, 50, 150, 100) //libro boton
        cuadrotexto(
            'Aparece Satanás y dice: Si eres el hijo de \n Dios, ordena a estas piedras que se \n conviertan en pan.',
        )
        pop()
    } else if (estado === 16) {
        background(0)
        image(fondos[3], 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 50 && mouseY < 150) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 50, 150, 100) //libro boton
        cuadrotexto(
            'Jesús responde: Escrito está. No solo del \n pan vive el hombre, sino de toda palabra \n que sale de la boca de Dios.',
        )
        pop()
    } else if (estado === 17) {
        background(0)
        image(fondos[4], 0, 0, 640, 480)
        push()
        if (mouseX > 210 && mouseX < 360 && mouseY > 20 && mouseY < 120) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 210, 20, 150, 100) //libro boton
        cuadrotexto3()
        pop()
    } else if (estado === 18) {
        background(0, 0, 255)
        image(fondos[10], 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 10 && mouseY < 110) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 10, 150, 100) //libro 2
        cuadrotexto('Jesús está en modo pensativo.')
        pop()
    } else if (estado === 19) {
        background(255, 255, 0) //amarillo
        textFont('New Amsterdam')
        textSize(50)
        text('FINAL NORMAL', 140, 55) //final normal pantalla amarilla
        textSize(40)
        text('Jesús esta pensativo sin tomar una \n decisión', 20, 150)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
    } else if (estado === 20) {
        background(255, 200, 200) //rosa palido
        textFont('New Amsterdam')
        textSize(50)
        text('CREDITOS', 190, 50)
        text('Chaparro Nazarena', 130, 110)
        text('Comisión 2', 190, 170)
        text('Legajo 91573/6', 162, 230)
        textSize(40)
        text('Autor de la serie: escena de la \n tentación de Jesús del \n Superlibro \n Tatsunoko Production', 10, 315)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
    }
}

function mousePressed() {
    if (estado === 0) {
        if (mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 450) {
            estado = 1
        } else if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            estado = 20
        }
    } else if (estado === 1) {
        if (mouseX > 480 && mouseX < 630 && mouseY > 10 && mouseY < 110) {
            estado = 2
        }
        if (mouseX > 480 && mouseX < 630 && mouseY > 120 && mouseY < 220) {
            estado = 10
        }
        if (mouseX > 480 && mouseX < 630 && mouseY > 220 && mouseY < 320) {
            estado = 15
        }
    } else if (estado === 2) {
        if (mouseX > 20 && mouseX < 170 && mouseY > 50 && mouseY < 150) {
            estado = 3
        }
    } else if (estado === 3) {
        if (mouseX > 480 && mouseX < 630 && mouseY > 50 && mouseY < 150) {
            estado = 4
        }
    } else if (estado === 4) {
        if (mouseX > 210 && mouseX < 360 && mouseY > 20 && mouseY < 120) {
            estado = 5
        }
    } else if (estado === 5) {
        if (mouseX > 150 && mouseX < 300 && mouseY > 10 && mouseY < 110) {
            estado = 6
        }
    } else if (estado === 6) {
        if (mouseX > 10 && mouseX < 160 && mouseY > 10 && mouseY < 110) {
            estado = 7
        }
    } else if (estado === 7) {
        if (mouseX > 250 && mouseX < 400 && mouseY > 10 && mouseY < 110) {
            estado = 8
        }
    } else if (estado === 8) {
        if (mouseX > 480 && mouseX < 630 && mouseY > 210 && mouseY < 310) {
            estado = 9
        }
    } else if (estado === 9) {
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            // final bueno
            estado = 0
        }
    } else if (estado === 10) {
        if (mouseX > 20 && mouseX < 170 && mouseY > 50 && mouseY < 150) {
            estado = 11
        }
    } else if (estado === 11) {
        if (mouseX > 480 && mouseX < 630 && mouseY > 50 && mouseY < 150) {
            estado = 12
        }
    } else if (estado === 12) {
        if (mouseX > 210 && mouseX < 360 && mouseY > 20 && mouseY < 120) {
            estado = 13
        }
    } else if (estado === 13) {
        if (mouseX > 10 && mouseX < 160 && mouseY > 10 && mouseY < 110) {
            estado = 14
        }
    } else if (estado === 14) {
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            //final malo
            estado = 0
        }
    } else if (estado === 15) {
        if (mouseX > 20 && mouseX < 170 && mouseY > 50 && mouseY < 150) {
            estado = 16
        }
    } else if (estado === 16) {
        if (mouseX > 480 && mouseX < 630 && mouseY > 50 && mouseY < 150) {
            estado = 17
        }
    } else if (estado === 17) {
        if (mouseX > 210 && mouseX < 360 && mouseY > 20 && mouseY < 120) {
            estado = 18
        }
    } else if (estado === 18) {
        if (mouseX > 480 && mouseX < 630 && mouseY > 10 && mouseY < 110) {
            estado = 19
        }
    } else if (estado === 19) {
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            estado = 0 //final normal
        }
    } else if (estado === 20) {
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            estado = 0 // pantalla creditos
        }
    }
}

function cuadrotexto(texto) {
    fill(0, 0, 0, 200) //transparencia
    rect(5, 330, 630, 150)
    textFont('New Amsterdam')
    textSize(35)
    fill(255)
    text(texto, 20, 375) //pantalla Miguel y Luis
}

cuadrotexto('En el desierto se encuentran Luis y el Arcángel Miguel mirando a Jesús que esta débil')

function cuadrotexto3() {
    fill(0, 0, 0, 200) //transparencia
    rect(5, 290, 630, 195)
    textFont('New Amsterdam')
    textSize(35)
    fill(255)
    text(
        'Satanás se lo llevo a una montaña muy alta. \nLe mostro todos los reinos del mundo y su \nesplendor. Y le dijo: Todo esto te daré si te \npostras y me adoras.',
        20,
        330,
    ) //pantalla satanas mostrando los reinos
}

function cuadrotexto5() {
    fill(0, 0, 0, 200) //transparencia
    rect(0, 165, 642, 325)
    textFont('New Amsterdam')
    textSize(35)
    fill(255)
    text(
        'Luego Satanás lo transporto a la ciudad \nsanta e hizo que se pusiera de pie sobre la \nparte más alta del templo y le dijo: Si eres el \nhijo de Dios, tírate abajo. Pues escrito esta: \nOrdenará que sus ángeles te protejan y ellos \nte sostendrán en sus manos para que no \ntropieces con piedra alguna.',
        10,
        205,
    ) //pantalla jesus en el techo junto con satanas
}
