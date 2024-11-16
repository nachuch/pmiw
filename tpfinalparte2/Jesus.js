class jesus {
constructor (posx,posy){
  this.posx = posx;
  this,posy = posy;
  this.vivo = true;
}

dibuja (){
  if (this.vivo){
    image(fondos[3],this.posx,this.posy); //imagen vivo
  } else {
    image(fondos[4],this.posx,this.posy);  //imagen muerto
  }
}

mover (keyCode){
  if (keyCode == LEFT_ARROW){
    this.moveizq();
    this.movi = true;
  } else if (keyCode == RIGHT_ARROW){
    this.moveder();
    this.movd = true;
  }
}

moveizq (){
  this.posx += 15;
}

moveder(){
  this.posx -= 15;
}

muerto(){
  this.vivo = false;
}

// mirar planta modificar y despues seguir aca
