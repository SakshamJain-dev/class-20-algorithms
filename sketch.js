var moving, fixed;

function setup() {
  createCanvas(1200,600);

  moving = createSprite(400, 200, 50, 80);
  fixed = createSprite(500, 200, 80, 50);

  moving.debug = true;
  fixed.debug = true;

  moving.velocityX = 5;
  fixed.velocityX = -5;
}

function draw() {
  background(0);  

  //moving.x = mouseX;
  //moving.y = mouseY;

  //DETECTING COLLISION ALGO
  if(moving.x - fixed.x <= moving.width/2 + fixed.width/2
    && fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2
    && fixed.y - moving.y <= moving.height/2 + fixed.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";

    
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }




  if(moving.x - fixed.x <= moving.width/2 + fixed.width/2
    && fixed.x - moving.x <= moving.width/2 + fixed.width/2){
    
      moving.velocityX = moving.velocityX * (-1)
      fixed.velocityX = fixed.velocityX * (-1)   
  }
  
if ( moving.y - fixed.y <= moving.height/2 + fixed.height/2
  && fixed.y - moving.y <= moving.height/2 + fixed.height/2){
    fixed.velocityY = fixed.velocityY * (-1)
    moving.velocityY = moving.velocityY * (-1)  
  }
  drawSprites();
} 


/*
ALGORITHMS
logic to solve a problem
Computer algo ---> Giving instructions to the computer to solve a specific problem

Pre-defined Algo:
1. Detecting collision -- isTouching()
2. Bouncing off two objects -- bounce()
NO QUESTIONS!!!!!
*/