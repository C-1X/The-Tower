function mazePuzzle(){

    var mW1 = createSprite(0,20,265,5);
    var mW2 = createSprite(155,0,5,270);
    var mW3 = createSprite(130,60,5,75);
    var mW4 = createSprite(90,90,75,5);
    var mB1 = createSprite(55,110,5,40);
    var mW5 = createSprite(105,130,90,5);
    var mW6 = createSprite(165,115,5,40);
    var mW7 = createSprite(200,143,5,100);
    var mW8 = createSprite(182,95,40,5);
    var mB2 = createSprite(165,160,5,50);
    var mW9 = createSprite(180,190,36,5);
    var mW10 = createSprite(280,160,5,40);
    var mW11 = createSprite(300,139,40,5);
    var mW12 = createSprite(320,160,5,40);
    var mB3 = createSprite(300,180,40,5);
    var mW13 = createSprite(320,385,5,40);
    var mW14 = createSprite(270,360,100,5);
    var mB4 = createSprite(220,380,5,40);
    var mW15 = createSprite(70,380,5,50);
    var mW16 = createSprite(120,380,5,50);
    var mB5 = createSprite(95,360,50,5);
    var mWin = createSprite(90,170,10,10);
    
    
    ball.velocityY = 0;
    ball.velocityX = 0;
    
    ball.shapeColor = "gray";
    mW1.shapeColor = "red";
    mW2.shapeColor = "red";
    mW3.shapeColor = "red";
    mW4.shapeColor = "red";
    mB1.shapeColor = "blue";
    mW5.shapeColor = "red";
    mW6.shapeColor = "red";
    mW7.shapeColor = "red";
    mW8.shapeColor = "red";
    mB2.shapeColor = "blue";
    mW9.shapeColor = "red";
    mW10.shapeColor = "red";
    mW11.shapeColor = "red";
    mW12.shapeColor = "red";
    mB3.shapeColor = "blue";
    mB4.shapeColor = "blue";
    mW13.shapeColor = "red";
    mW14.shapeColor = "red";
    mW15.shapeColor = "red";
    mW16.shapeColor = "red";
    mB5.shapeColor = "blue";
    mWin.shapeColor = "white";
    
    var edges = createEdgeSprites()
    ball.bounceOff(edges)
    
    
      background("black");
      ball.bounceOff(edges);
      
      if (keyDown(UP_ARROW)) {
        ball.velocityY=-2;
        ball.velocityX=0;
      }
      if (keyDown(DOWN_ARROW)) {
        ball.velocityY=+2;
        ball.velocityX=0;
      }
      if (keyDown(LEFT_ARROW)) {
        ball.velocityX = -2;
        ball.velocityY=0;
      }
      if (keyDown(RIGHT_ARROW)) {
        ball.velocityX = +2;
        ball.velocityY=0;
      }
      // double verticle line = or//
      if (ball.isTouching(mW1)||ball.isTouching(mW2)||ball.isTouching(mW3)
      ||ball.isTouching(mW4)||ball.isTouching(mW5)||ball.isTouching(mW6)
      ||ball.isTouching(mW7)||ball.isTouching(mW8)||ball.isTouching(mW9)
      ||ball.isTouching(mW10)||ball.isTouching(mW11)||ball.isTouching(mW12)
      ||ball.isTouching(mW13)||ball.isTouching(mW14)||ball.isTouching(mW15)
      ||ball.isTouching(mW16))
      {
        ball.x = 0;
        ball.y = 0;
        ball.velocityX=0;
        ball.velocityY=0;
      }
      if (ball.isTouching(mB1)||ball.isTouching(mB2))
      {
        ball.x = ball.x+130;
        ball.velocityX=0;
        ball.velocityY=0;
      }
      
      if (ball.isTouching(mB3))
      {
        ball.y = ball.y+200;
        ball.velocityX=0;
        ball.velocityY=0;
      }
      if (ball.isTouching(mB4))
      {
        ball.x = ball.x-130;
        ball.velocityX=0;
        ball.velocityY=0;
      }
      if (ball.isTouching(mB5))
      {
        ball.y = ball.y-200;
        ball.velocityX=0;
        ball.velocityY=0;
      }
      if (ball.isTouching(mWin))
      {
        textFont("Arial");
        textSize(30);
        text("You Pass", 180,200);
        stageCount = 2
        ball.velocityX=0;
        ball.velocityY=0;
        
      }
      drawSprites();
    
    }
