var sea,ship;
var seaImg,shipImg;

function preload(){
  //uncomment the code to add animation to ship 

  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background("blue");

  // Moving background
  sea=createSprite(width,height/6);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.7;
  
  ship = createSprite(width*0.325,height/2,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.6;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 100){
    //sea.x = 0;
    //sea.x = sea.width;
    sea.x = sea.width/8;
    //sea.y = height;
  }

 
  drawSprites();
}