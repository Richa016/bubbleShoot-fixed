var player; 
var player_img, bubble_img, bullet_img;
var bullet, bubble1;
var abc, xyz;
var random1;
var bulletGroup;
var bubbleGroup;
function preload()
{
    player_img = loadImage("player.png");
    bubble_img = loadImage("1.png");
    bullet_img = loadImage("bullet.png");
}
function setup()
{
    createCanvas(400,400);
    player = createSprite(200,370,20,20);
    player.addImage(player_img);
    player.scale = 0.3;
    player.debug = true;
    bulletGroup=new Group();
    bubbleGroup= new Group();
   abc= createSprite(115,30,30,30)
  xyz = createSprite(15,130,30,30)
   
}
function draw()
{

  
    background(0);
    xyz.x=mouseX
xyz.y=mouseY

if(player.isTouching(xyz)){
 
  xyz.shapeColor="green"
}
    player.x = mouseX;
    if(keyWentDown("space"))
  {
    bullet = createSprite(player.x,375,10,10);
    bullet.addImage(bullet_img);
    bullet.scale = 0.08;
    bullet.setVelocity(0,-8);
    bullet.debug = true;
    bulletGroup.add(bullet);
  }
    if(World.frameCount%60 === 0)
  {
    random1 = Math.round(random(10,380));
    bubble1 = createSprite(random1,65,10,10);
    bubble1.addImage(bubble_img);
    bubble1.scale = 0.2;
    bubble1.setVelocity(0,2);
    bubble1.debug = true;
    bubbleGroup.add(bubble1);
    
    /*if(bubble1.isTouching(bullet)){
      console.log("touching"); 
    }
    else {
      console.log("not touching");
    }
   */
  }/*
  if(isTouching(bullet,bubble1))
  {
   console.log("hello");
  }
  else {
    console.log("bye");
  }*/

  for(var i=0;i<bubbleGroup.length;i++){
    if(bulletGroup.isTouching(bubbleGroup)){
      console.log("hello")
      bubbleGroup.get(i).destroy();
    }
    else{
      console.log("bye");
    }
  }
console.log(bubbleGroup.length);
    drawSprites();
}