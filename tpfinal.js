let nombres = ['Miguel', 'Luis', 'Jesus', 'Satanas']
let fondos = ['fondo0', 'fondo1', 'fondo2', 'fondo3', 'fondo4', 'fondo5', 'fondo6', 'fondo7', 'fondo8', 'fondo9']
let estado
let libro
let tiempo = 0
let colororiginal = 255
let tintoscuro = 100

function preload() {
    fondo0 = loadImage('./fondo0.jpeg')
    fondo1 = loadImage('./fondo1.jpeg')
    fondo2 = loadImage('./fondo2.jpeg')
    fondo3 = loadImage('./fondo3.jpeg')
    fondo4 = loadImage('./fondo4.jpeg')
    fondo5 = loadImage('./fondo5.jpeg')
    fondo6 = loadImage('./fondo6.jpeg')
    fondo7 = loadImage('./fondo7.jpeg')
    fondo8 = loadImage('./fondo8.jpeg')
    fondo9 = loadImage('./fondo9.jpeg')
    fondo10 = loadImage('./fondo10.jpeg')

    libro = loadImage('./libro.png')
}


function setup() {
createCanvas(640, 480)
    background(255)
    estado = 0
}


function draw() {
 if (estado === 0) {
        background(255)
        image(fondo0, 0, 0, 640, 480)
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
        image(fondo1, 0, 0, 640, 480)
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
        
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 90 && mouseY < 190) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }
        image(libro, 480, 90, 150, 100) //libro 1

        pop()
        
    } else if (estado === 2) {
        background(0)
        image(fondo2, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    } else if (estado === 3) {
        background(0)
        image(fondo3, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    } else if (estado === 4) {
        background(0)
        image(fondo4, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
    else if (estado === 5) {
        background(0)
        image(fondo5, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
    else if (estado === 6) {
        background(0)
        image(fondo6, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
    else if (estado === 7) {
        background(0)
        image(fondo7, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
    else if (estado === 8) {
        background(0)
        image(fondo8, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
  else if (estado === 9) {
        background(0,255,0)
        //image(fondo4, 0, 0, 640, 480)  //buscar imagen de victoria
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    } 
     else if (estado === 10) {
        background(0)
        image(fondo2, 0, 0, 640, 480)  //final normal
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
     else if (estado === 11) {
        background(0)
        image(fondo3, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
     else if (estado === 12) {
        background(0)
        image(fondo4, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
     else if (estado === 13) {
        background(255,0,0)
        //image(fondo8, 0, 0, 640, 480) buscar imagen
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
     else if (estado === 14) {
        background(0)
        //image(fondo8, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
         else if (estado === 15) {
        background(0)
        image(fondo2, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
         else if (estado === 16) {
        background(0)
        image(fondo3, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
         else if (estado === 17) {
        background(0)
        image(fondo4, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
         else if (estado === 18) {
        background(0,0,255)
        //image(fondo8, 0, 0, 640, 480)
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
         else if (estado === 19) {
        background(255,255,0)
        //image(fondo8, 0, 0, 640, 480)    
        push()
        if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            tint(tintoscuro)
        } else {
            tint(colororiginal)
        }

        image(libro, 480, 350, 150, 100) //libro 2

        pop()
        
    }
     else if (estado === 20) {
        background(0,255,255)
        //image(fondo8, 0, 0, 640, 480)    
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
        }
        else if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            estado = 20
        }
    }
    else if (estado === 1) {
        if (mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 450) {
            estado = 2
        }
      else if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
            estado = 10
        }
       else if (mouseX > 480 && mouseX < 630 && mouseY > 90 && mouseY < 190) {
         estado = 15
       }
    }
    
else if (estado === 2) {
  if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        estado = 3
    }
}

else if (estado === 3) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450)  {
        estado = 4
    }
}

else if (estado === 4) {
   if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        estado = 5
    }
}

else if (estado === 5) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        estado = 6
    }
}
else if (estado === 6) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        estado = 7
    }
}

else if (estado === 7) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        estado = 8
    }
}

else if (estado === 8) {
   if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        estado = 9
    }
}

else if (estado === 9) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) { // final bueno
        estado = 0
    }
}

else if (estado === 10) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        estado = 11
    }
}
else if (estado === 11) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        estado = 12
    }
}
else if (estado === 12) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        estado = 13
    }
}
else if (estado === 13) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
        estado = 14
    }
}
else if (estado === 14) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) { //final normal
        estado = 0
    }
}
else if (estado === 15) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) { 
        estado = 16
    }
}
else if (estado === 16) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) { 
        estado = 17
    }
}
else if (estado === 17) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) { 
        estado = 18
    }
}
else if (estado === 18) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) { 
        estado = 19
    }
}
else if (estado === 19) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) { 
        estado = 0
    }
}
else if (estado === 20) {
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) { 
        estado = 0
    }
}
}
