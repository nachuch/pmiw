// profe,el profesor de la comi 1 dijo que podemos hacer un video de maximo 3 minutos,le aviso porque mi video paso de los 2 minutos.
// https://youtu.be/Ky4TtfvFI0c
// algunas cosas se modificaron que en el video no se ven.

let img
let cant = 10
let tam
let reiniciar = false

function preload() {
    img = loadImage('./data/foto.jpeg')
}

function setup() {
    createCanvas(800, 400)

    tam = width / cant

    background(0)

    image(img, 0, 0, 400, 400)
}

function draw() {
    let opacidad = map(mouseX, 0, width, 50, 255) // Mapea el color en función de la posición del mouseX
    for (let x = 0; x < tam; x++) {
        for (let y = 0; y < tam; y++) {
            push()
            stroke(opacidad)
            fill(0)
            rect(x * tam, y * tam, tam, tam)
            pop()

            if (!reiniciar) {
                push()
                if (mouseX > 400 && mouseX < 800 && mouseY > 0 && mouseY < 400) {
                    // color de los circulos 2da mirad de pantalla
                    fill(255, 0, 0) //rojo
                    circle(x * tam, y * tam, 20)
                } else if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
                    // color de los circulos 1ra mirad de pantalla
                    fill(255, 15, 240) //rosa
                    circle(x * tam, y * tam, 20)
                } else {
                    fill(255)
                    circle(x * tam, y * tam, 20)
                }
                pop()
            } else {
                // renicio...
                push()
                stroke(255)
                fill(0)
                rect(x * tam, y * tam, tam, tam)
                fill(255)
                circle(x * tam, y * tam, 20)
                pop()
            }
            image(img, -340, 1)
        }
    }
    boton(200, 200, 50, 205, 230, color(0), color(255)) //boton de reinicio
}

function ToqueAqui(Posx1, Posx2, Posy1, Posy2) {
    //funcion que retorna un valor...
    return mouseX > Posx1 && mouseX < Posx2 && mouseY > Posy1 && mouseY < Posy2
}

function boton(Posx, Posy, tam, x, y, color1, color2) {
    //funcion que no devuelve valor...
    push()
    if (mouseX > 199 && mouseX < 250 && mouseY > 199 && mouseY < 250) {
        //color del cuadrado
        fill(0)
    } else {
        fill(255)
    }
    rect(Posx, Posy, tam, tam) //200,200,50,50
    if (mouseX > 199 && mouseX < 250 && mouseY > 199 && mouseY < 250) {
        //color letra
        fill(0)
    } else {
        fill(255)
    }
    pop()
    textSize(10)
    text('REINICIAR 10', x, y) //205,230
}

function mousePressed() {
    if (ToqueAqui(199, 250, 199, 250)) {
        reiniciar = true
    }
}

function keyPressed() {
    if (key === 'a') {
        reiniciar = false
    }
}
