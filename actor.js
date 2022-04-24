// Character variables
let xCharacter = 320;
let yCharacter = 399;

function showChicken() {
  image(chicken, xCharacter, yCharacter)
}

function moveChicken() {
  if (keyIsDown(UP_ARROW)) {
    yCharacter -= 2;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    yCharacter += 2;
  }
}