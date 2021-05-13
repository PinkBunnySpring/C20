var Rose;
var Petal;


function setup() {
  createCanvas(800,400);
  Rose = createSprite(400, 200, 50, 50);
  Petal = createSprite(400, 400, 40, 40); 

Rose.shapeColor = "Hotpink";
Petal.shapeColor = "Black";

}


function draw() {
  background(255,255,255);
  Petal.x = World.mouseX;
  Petal.y = World.mouseY;
  
  if(Rose.x - Petal.x < Rose.width/2 + Petal.width/2 && Petal.x - Rose.x < Petal.width/2 + Rose.width/2 &&   Rose.y - Petal.y < Rose.height/2 + Petal.height/2 && Petal.y - Rose.y < Petal.height/2 + Rose.height/2){
    Rose.shapeColor = "Hotpink";
    Petal.shapeColor = "Blue";
  }
  else{
    Rose.shapeColor = "Hotpink";
    Petal.shapeColor = "Black";
  }

  drawSprites();
}