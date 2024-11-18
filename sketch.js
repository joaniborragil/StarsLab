let bg;
let starFill;
let breathAngle = 0;       
let breathingSpeed = 0.05;  
function setup() {
  createCanvas(400, 400);
  changeBGColor();
  starFill = randomColor(); 
  fill(starFill);
  noStroke();
}

function draw() {
  background(bg);

  
  let innerRadius = 50 + 10 * sin(breathAngle);  
  let outerRadius = 100 + 15 * cos(breathAngle); 

  breathAngle += breathingSpeed; 
 
  drawStar(width / 2, height / 2, innerRadius, outerRadius, 7);
}


function drawStar(mx, my, ir, or, numberOfSides) {
  let numberOfPoints = numberOfSides * 2;
  let theta = 0;
  let dt = TWO_PI / numberOfPoints;

  beginShape();
  for (let i = 0; i < numberOfPoints; i++) {
    if (i % 2 === 0) {
      vertex(mx + ir * cos(theta + dt * i), my + ir * sin(theta + dt * i));
    } else {
      vertex(mx + or * cos(theta + dt * i), my + or * sin(theta + dt * i));
    }
  }
  endShape(CLOSE);
}


function randomColor(avenues = true) {
  if (avenues) {
    return color(randomAvenuesColor());
  } else {
    return color(random(255), random(255), random(255));
  }
}


function changeBGColor(avenues = true) {
  bg = randomColor(avenues);
}


function keyPressed() {
  if (key === 'b') {
    changeBGColor();
  }
}
function randomAvenuesColor() {
  return random(Object.values(colors));
}
const colors = {
  white: "#ffffff",
  black: "#000000",
  ash: "#B7B09C",
  ochre: "#D3AE6F",
  indigo: "#3D68B2",
  moss: "#267355",
  pristineBlue: "#44C3D4",
  violet: "#9796C9",
  nimbus: "#CAC3BC",
  pistachio: "#C5D982",
  olive: "#8A916A",
  terracotta: "#C17E60",
  gold: "#F5CD64",
  clay: "#C3411E",
  grass: "#0D9A48",
  navy: "#273879"
};


