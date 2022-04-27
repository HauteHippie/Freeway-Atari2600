function setup() {
  createCanvas(640, 444);
}

function draw() {
  background(road);
  showCar();
  showChicken();
  moveCar();
  returnToPosition();
  moveChicken();
}
