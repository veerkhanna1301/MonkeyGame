var bananaImage,obstacleImage,obstacleGroup,background,score,player_running;

function preload(){
  background =loadImage("jungle.jpg");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  obstacleImage = loadImage("stone.png")
}

function setup(){
  bg=createSprite(200,200);
  bg.addImage(background);
  bg.velocityX = -3;
  
  player = createSprite(70,38,20,50);
  player.addAnimation("running",player_running);
  player.scale = 0.17;
  
  invisibleground=createSprite(200,390,400,10);
  invisibleground.visible = false;
  
  obstaclesGroup = new Group();
  bananasGroup = new Group();
  
  score = 0;          
 
}

function draw(){
  drawSprites();
  createObstacles();
  createBananas();

  
  
    if (bg.x < 0){
      bg.x = bg.width/2;
    }
  if(keyDown("space") && player.y>=80){
    player.velocityY = -4;
  }
  player.velocityY = player.velocityY + 0.5;
  player.collide(invisibleground);

    if(bananasGroup.isTouching(player)){
      score=score+1;
      bananasGroup.destroyEach();           
    }
  switch(score){
        case 10: player.scale=0.12;
                break; 
        case 20: player.scale=0.14;
                break;
        case 30: player.scale=0.16;
                break;
        case 40: player.scale=0.18;
                break;
        default: break;
    }
   textSize(22);
  text("Score:"+ score,280,100);

  if(obstaclesGroup.isTouching(player)){
    player.scale=0.08;
    score=score-2;
    obstaclesGroup.destroyEach();
  }
  
}

function createObstacles(){
   if(frameCount%80===0){
    obstacle = createSprite(400,340,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
     obstacle.velocityX = -8;
     obstacle.lifetime = 150;
     obstaclesGroup.add(obstacle);
     
  }
} 
  function createBananas(){
    if(frameCount%80===0){
      banana = createSprite(400,120,40,10);
      banana.addImage(bananaImage);
      banana.scale = 0.09;
      banana.velocityX = -8;
      banana.lifetime = 150;
      bananasGroup.add(banana);
    }
}

