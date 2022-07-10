var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50)
  box.shapeColor="white";
}

function draw() 
{
  background("black");
if(keyIsDown(RIGHT_ARROW))
{
  box.position.x = box.position.x +5;
}
if (keyIsDown(LEFT_ARROW))
{
box.position.x= box.position.x -5;
}



drawSprites();
}




