// Car variables
let xCars = [645, 645, 645];
let yCars = [43, 80, 150];
let velocity = [2, 3, 4];
let carDiameter = 66;

function showCar() {
  for (let i = 0; i < cars.length; i++) {
    image(cars[i], xCars[i], yCars[i], 56, 33)
  }
}

function moveCar() {
  for (let i = 0; i < cars.length; i++) {
    xCars[i] -= velocity[i];
  }
}

function returnToPosition() {
  for (let i = 0; i < cars.length; i++) {
    if (verifyWallCollision(i)) {
      xCars[i] = 800;
    }
  }
}

function verifyWallCollision(index) {
  return xCars[index] + carDiameter < 0;
}
