let x = 0;
let y = 0;
let PixelSize = 100; // Change this to "1" to scale down for uploading when finished
let x1 = PixelSize;
let y1 = PixelSize;
let w = PixelSize * 8;  // change this to "PixelSize *24" for 24x24 canvas

function setup() {
  createCanvas(w, w);
  background(255);
  noStroke();
}

function draw() {
  fill(random(255));
  rect(x, y, x1, y1);
  x = x + PixelSize;

  if (x > width) {
    x = 0;
    y = y + PixelSize;
  }
}
