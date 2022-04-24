// Car variables
let xCar = 645;
let yCar = 42;
let carDiameter = 66;

function showCar() {
  image(car, xCar, yCar, 66, 36)
}

function moveCar() {
  xCar -= 5;
  if (xCar + carDiameter < 0) {
    xCar = 800;
  }
}