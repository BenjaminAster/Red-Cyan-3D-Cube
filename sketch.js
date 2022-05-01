// You need 3D Red-Cyan Anaglyph glasses

let eyeDistance = 64;

let red;
let blue;

let camFOV;

let mouseHeight = 0;


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	
  myFont = loadFont('https://benjaminaster.com/utils/roboto-mono.ttf');

  pixelDensity(1);

  canvas = createGraphics(windowWidth + eyeDistance, windowHeight, WEBGL);
  canvas.textFont(myFont);

  canvas.pixelDensity(1);

  angleMode(RADIANS);
  camFOV = PI / 4.0;
  canvas.perspective(camFOV, canvas.width / canvas.height, 10, (canvas.height / 2.0) / tan(camFOV / 2.0) + 1001);
  canvas.camera(0, 0, (canvas.height / 2.0) / tan(camFOV / 2.0), 0, 0, 0, 0, 1, 0);

  blendMode(LIGHTEST);

  red = color(255, 0, 0);
  blue = color(0, 127, 255);
}

function drawCanvas(first) {


  canvas.background(127);



  
  canvas.fill(63, 127);
  canvas.strokeWeight(3);
  canvas.stroke(0);
  canvas.push();
  canvas.translate(width / 2, height / 2, sin(frameCount / 30) * 200);
  canvas.rotateX(frameCount / 100);
  canvas.rotateY(frameCount / 110);
  canvas.rotateZ(frameCount / 120);
  canvas.box(height / 4.0);
  canvas.pop();
  
  canvas.fill(0);
  canvas.textSize(30);
  canvas.textAlign(CENTER, TOP);
  canvas.text("You need Red-Cyan Anaglyph glasses.", width/2, 30);


  
  canvas.fill(200);
  canvas.strokeWeight(1);
  canvas.stroke(0);

  let mouseSize = 3;
  canvas.beginShape();
  canvas.vertex(mouseX, mouseY, mouseHeight);
  canvas.vertex(mouseX + 7 * mouseSize, mouseY + 7 * mouseSize, mouseHeight);
  canvas.vertex(mouseX + 3 * mouseSize, mouseY + 7 * mouseSize, mouseHeight);
  canvas.vertex(mouseX, mouseY + 10 * mouseSize, mouseHeight);
  canvas.endShape(CLOSE);

  canvas.noFill();
  canvas.strokeWeight(3);
  canvas.stroke(0);
  canvas.rect(10, 10, width - 21, height - 21);
}

function draw() {

  translate(-width / 2, -height / 2, 0);
  noCursor();

  canvas.push();
  canvas.translate(-width / 2, -height / 2, 0);

  background(0);





  canvas.push();
  canvas.translate(eyeDistance / 2, 0, 0);
  drawCanvas(true);
  canvas.pop();


  tint(red);
  image(canvas, -eyeDistance, 0);


  canvas.push();
  canvas.translate(-eyeDistance / 2, 0, 0);
  drawCanvas(false);
  canvas.pop();



  tint(blue);
  image(canvas, 0, 0);

  canvas.pop();
}


function mouseWheel(event) {
  mouseHeight += event.delta / 1.5;
  mouseHeight = constrain(mouseHeight, -1000, 800)
}


















//