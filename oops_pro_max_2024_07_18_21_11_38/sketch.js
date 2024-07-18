let angle=0
let arcX=0
function setup() {
  createCanvas(1000, 1000);

  background(250, 142, 219)
}

function draw() { 
  translate(500,500)
  rotate(angle)
  //take a big brush
  strokeWeight(100)
  //create a point 
  point(700/2, 400/2)
  //take a big brush
  strokeWeight(100)
  // create a point
  point(150/2, 350/2)
  //take a big brush
  strokeWeight(10)
  //create a point
  point(100,200)
  circle(30,500,50)
  circle(100,300,175)
  circle(70,100,100)
  angle=angle+0.01
}

function mousePressed(){
  arcX=0
  //start/stop animation loop{
  if (isLooping()) {
  noLoop()
} else {
  loop()
}
}