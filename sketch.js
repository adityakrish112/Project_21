var bullet, wall;
var speed
var weight
var safety;
var deformation = 0;
var thickness


function setup() {
  createCanvas(1600,400);
   bullet = createSprite(50, 200, 50, 10);
   bullet.shapeColor = "white";
   //speed = 0;

   wall = createSprite(1200, 200, thickness, height/2);
   wall.shapeColor = rgb(80, 80, 80);

speed = random(223, 321);

   weight = random(30, 52);
  bullet.velocityX = speed;

  thickness = random(22, 83)

}

function draw() {
  background("black");  

  
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    

  

  if(deformation > 10){

   wall.shapeColor = "red";


  }
  else
  if(deformation < 10){

    wall.shapeColor = "green";

  }


}
drawSprites();

text("Deformation: " + deformation, 400, 50)

}