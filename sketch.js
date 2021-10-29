var rect1
var rect2

function setup() {
  createCanvas(800,400);
 rect1 = createSprite(400, 200, 100, 50);
 rect2 = createSprite(400, 200, 50, 100);

 rect1.debug = true;
 rect2.debug = true;

 rect1.shapeColor = "green";
 rect2.shapeColor = "green";
}

function draw() {
  background("black");  

 if(rect2.x - rect1.x < rect1.width/2 + rect2.width/2
  && rect1.x - rect2.x < rect1.width/2 + rect2.width/2){
  rect1.shapeColor = "red";
  rect2.shapeColor = "red";
 }
 else{
  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
 }

 

  rect2.x = World.mouseX;
  rect2.y = World.mouseY;

  drawSprites();
}