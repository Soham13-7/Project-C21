//declaring the variables
var wall, bullet, thickness;
var speed, weight;

function setup()
{
  //creating the canvas
  createCanvas(1600,400);

  //creating the thickness
  thickness = random(22,83);

  //giving random values to variables
  speed = random(223,321);
  weight = random(30,52);

  //creaitng the car
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = color("white");

  //setting the speed of the car
  bullet.velocityX = speed;

  //creating the wall
  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw()
{
  //creating the background
  background(0);
  
  if(hasCollided(bullet,wall))
  {
     //ending the momentum of the bullet
     bullet.velocityX =0;
     var damage = 0.5 *weight *speed *speed/(thickness *thickness *thickness);

     if (damage>10)
     {
       wall.shapeColor = color(255,0,0);
     }

     if (damage<10)
     {
       wall.shapeColor = color(0,255,0);
     }
  }
  

  
  //drawing the Sprites
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false
}
