let barra; //  barra de progreso
let progreso = 0; // progreso


class BarraProgreso {
  constructor(posx, posy, ancho, alto, colorFondo, colorRelleno) {
    this.posx = posx;
    this.posy = posy;
    this.ancho = ancho;
    this.alto = alto;
    this.colorFondo = colorFondo; // Color de fondo
    this.colorRelleno = colorRelleno; // Color del relleno (el progreso)
    this.valor = 0; // Valor actual del progreso (0 a 1)
  }

  // actualiza el valor de la barra de progreso
  actualiza(valor) {
    this.valor = constrain(valor, 0, 1);
  }

  dibuja()
  {
    // Dibuja el fondo de la barra
    fill(this.colorFondo);
    noStroke();
    rect(this.posx, this.posy, this.ancho, this.alto);

    // Dibuja el relleno de la barra
    fill(this.colorRelleno);
    rect(this.posx, this.posy, this.ancho * this.valor, this.alto);
  }
}

function barracarga() {
  barra = new BarraProgreso(50, 80, 300, 30, color(200), color(0, 255, 0));
}

function sumaprogreso()
{
  background(255);

  // Aumenta el progreso de forma gradual
  progreso += 0.01;
  if (progreso > 1) {
    progreso = 0; // Reinicia el progreso cuando llega al máximo
  }

  // Actualiza el valor de la barra de progreso
  barra.actualiza(progreso);

  // Dibuja la barra
  barra.dibuja();
}
