function Ship () {
  this.x = 100;           // Posicion X
  this.y = 200;          // Posicion Y
  this.px = this.x+30,this.y  // Posicion de la punta X
  this.py = this.x+30,this.y  // Posicion de la punta Y
  this.vel = 0;               // Velocidad de movimiento
  this.bullet = [];

 
  this.show = function() {
    fill(255);    // Blanco
    quad(this.x-20,this.y-18, this.x+20,this.y, this.x-20,this.y+18, this.x,this.y) // Forma de la nave
  }
  
  this.up = function() {
    this.vel += -10;
  }
  
  this.down = function() {
    this.vel += 10;
  }
  
  this.update = function() {
    this.y += this.vel;
    this.vel = 0;
  }
}