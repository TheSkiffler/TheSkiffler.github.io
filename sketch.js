function setup() {
  createCanvas(500, 500);
  background("green");
}

function dfp(x, y, p, q) {
  return sqrt((p - x) ** 2 + (q - y) ** 2);
}

let randX = 0;
let randY = 0;

function draw() {
  for (let i = 0; i < 5000; i++) {
    randX = 1500 * random();
    randY = 1500 * random();

    if (dfp(167, 250, randX, randY) < 140) {
      stroke("red");
    }
    else {
      stroke("green");
    }
  if (dfp(333, 250, randX, randY) < 140) {
      stroke("red");
    } 
    if (dfp(250, 167, randX, randY) < 140) {
      stroke("red");
    } 
    if (dfp(250, 333, randX, randY) < 140) {
      stroke("red");
    } 
    if (dfp(250, 250, randX, randY) < 50) {
      stroke("black");
    } 
    point(randX, randY);
  }
}
