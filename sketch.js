var box;

function setup()
 {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW))
  {
    box.position.x = box.position.x + 5;
    background("red");
    box.shapeColor = "blue";
  }
  if (keyIsDown(UP_ARROW))
  {
    box.position.y = box.position.y - 5;
    background("blue");
    box.shapeColor = "red";
  }
  if (keyIsDown(LEFT_ARROW))
  {
    box.position.x = box.position.x - 5;
    background("yellow");
    box.shapeColor = "green";
  }
  if (keyIsDown(DOWN_ARROW))
  {
    box.position.y = box.position.y + 5;
    background("green");
    box.shapeColor = "yellow";
  }
  drawSprites();
}




