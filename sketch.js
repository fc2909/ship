var ship;

function setup() {
  ship = new Ship();
  createCanvas(800,400);        // Crear la zona de juego
}

function draw() {
 background(0)
 ship.update();
 ship.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    ship.up();              // Arriba
  } else if (keyCode === DOWN_ARROW) {
    ship.down();     // Abajo
  } else if (key == ' ') {
    ship.shot();
  }                // Dispara
}