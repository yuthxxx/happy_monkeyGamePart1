
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var border;
var ground, groundImage;
var survivalTime;

function preload(){  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  monkeyImage=loadImage("sprite_0.png")
}

function setup() {
  createCanvas(500,500);
  monkey =createSprite(130,400,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(250,430,500,10);
  // ground.x = ground.width/2;
  //ground.velocityX=-4;
  
  score=0;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  //border=createSprite(250,100,500,10);
  //border.visible=false;
}

function draw() {
  background("white");
  
if(keyDown("space")){
  monkey.velocityY=-6; 
}
  fill("black")
  textSize(15);
  text("Score: "+ score ,20,20);
  
  //stroke("black")
  fill("black")
  textSize(15);
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,20,40);
  food();
  obstacles();
  drawSprites();
  monkey.velocityY++;
  monkey.collide(ground);
}

function food(){
   if (frameCount % 90 === 0){
     banana =createSprite(500,285,10,10);
     banana.addImage(bananaImage);
     banana.scale=0.09;
     banana.y = Math.round(random(150,250));
     banana.velocityX=-5;
     banana.lifetime=100;
     bananaGroup.add(banana);
   }
  if (monkey.isTouching(bananaGroup)){
       bananaGroup.destroyEach();
       score=score+1;
   }
}

function obstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(500,410,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -(4 + score/100); 
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}




