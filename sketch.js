var fixedRect
var movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 70);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,30,50);
  movingRect.shapeColor = "green";
}

function draw() {
  background("black"); 
  movingRect.x = World.mouseX 
  movingRect.y = World.mouseY

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();

}