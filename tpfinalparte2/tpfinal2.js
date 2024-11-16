let fondos = [];
let estado;
let funcion;
let vivo= true;
let libro;
let tiempo = 0
  let colororiginal = 255
  let tintoscuro = 100


  function preload () {
  for (let i= 0; i<6; i++) {
    fondos[i] = loadImage ("./fondo"+i+".png");
    libro = loadImage('./libro.png')
  }
}

function setup() {
  createCanvas (640, 480);
  estado = 0;
  funcion = new juego (24);
}


function draw() {
  background (200);
  image (fondos[0], 0, 0);
  if (estado === 0) {
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
    textSize (14);
    text('INSTRUCCIONES', 287, 405)
      pop()
      stroke(10)
      text('La Persecución de \n Jesus', 60, 60)
  } else if (estado === 20) {
    background(255, 200, 200) //rosa palido    pantalla creditos
      textFont('New Amsterdam')
      textSize(50)
      text('CREDITOS', 190, 50)
      text('Chaparro Nazarena', 130, 110)
      text('Comisión 2', 190, 170)
      text('Legajo 91573/6', 162, 230)
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
  } else if (estado === 24) {
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

  } else if (estado === 25) {
    background(0, 193, 8) //verde claro   pantalla ganar
      textFont('New Amsterdam')
      textSize(50)
      text('Ganaste!', 10, 50)
      text('Llegaste a la meta', 10, 280)
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
  


function mousePressed() {
    if (estado === 0) {
   
    if (mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 450) {
    
     estado = 1;    // jugar pantalla
    } else if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
      // Créditos
      estado = 20;  
    } else if (mouseX > 265 && mouseX < 415 && mouseY > 350 && mouseY < 450) {
      // Instrucciones
      estado = 24;    
    }
  } else if (estado === 20) {  //pantalla creditos
  
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
      estado = 0;  // Volver a la pantalla inicial
    }
  } else if (estado === 24) { // pantalla instrucciones
   
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
      estado = 0;  // Volver a la pantalla inicial
    }
      
    } else if (estado === 25) { // pantalla ganar
   
    if (mouseX > 480 && mouseX < 630 && mouseY > 350 && mouseY < 450) {
      estado = 0;  // Volver a la pantalla inicial
  
    }
    }
