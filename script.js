function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 1, 1);
  myShape(width /3, height /3, 2, -1);
  myShape(width * 2/3, height * 2/3, 0.5, 2);

for(let i = 0; i < 10; i ++){
  myShape(i * 50 + 30, 50, .5, i);
}

  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, s, a) {
  // make this function more interesting
  let w = 50;
  let h = 50;

  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
  rotate (a);
  Fill(255)
  ellipse(0, 0, w, h); // simple ellipse at the translated origin (0,0)
  ellipse(-10, -5, 10);
  ellipse(-10, -5, 10);
  fill(255, 0, 0)
  ellipse(-10, -5, 3);
  ellipse(10, -5, 3);
  line(0, -8, 0, 4);
  pop(); // dispose of the layer
}
