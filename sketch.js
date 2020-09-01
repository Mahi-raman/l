var fix,moving

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 50, 50);
  moving = createSprite(200,350,30,30);
}

function draw() {
  background(0,0,0);
  
  moving.x = World.mouseX
  moving.y = World.mouseY
  

istouching();


  drawSprites();
}













