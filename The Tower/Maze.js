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
    
    
    pc.velocityY = 0;
    pc.velocityX = 0;
    
    pc.shapeColor = "gray";
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
    pc.bounceOff(edges)
    
    
      background("black");
      pc.bounceOff(edges);
      
      if (keyDown(UP_ARROW)) {
        pc.velocityY=-2;
        pc.velocityX=0;
      }
      if (keyDown(DOWN_ARROW)) {
        pc.velocityY=+2;
        pc.velocityX=0;
      }
      if (keyDown(LEFT_ARROW)) {
        pc.velocityX = -2;
        pc.velocityY=0;
      }
      if (keyDown(RIGHT_ARROW)) {
        pc.velocityX = +2;
        pc.velocityY=0;
      }
      // double verticle line = or//
      if (pc.isTouching(mW1)||pc.isTouching(mW2)||pc.isTouching(mW3)
      ||pc.isTouching(mW4)||pc.isTouching(mW5)||pc.isTouching(mW6)
      ||pc.isTouching(mW7)||pc.isTouching(mW8)||pc.isTouching(mW9)
      ||pc.isTouching(mW10)||pc.isTouching(mW11)||pc.isTouching(mW12)
      ||pc.isTouching(mW13)||pc.isTouching(mW14)||pc.isTouching(mW15)
      ||pc.isTouching(mW16))
      {
        pc.x = 0;
        pc.y = 0;
        pc.velocityX=0;
        pc.velocityY=0;
      }
      if (pc.isTouching(mB1)||pc.isTouching(mB2))
      {
        pc.x = pc.x+130;
        pc.velocityX=0;
        pc.velocityY=0;
      }
      
      if (pc.isTouching(mB3))
      {
        pc.y = pc.y+200;
        pc.velocityX=0;
        pc.velocityY=0;
      }
      if (pc.isTouching(mB4))
      {
        pc.x = pc.x-130;
        pc.velocityX=0;
        pc.velocityY=0;
      }
      if (pc.isTouching(mB5))
      {
        pc.y = pc.y-200;
        pc.velocityX=0;
        pc.velocityY=0;
      }
      if (pc.isTouching(mWin))
      {
        textFont("Arial");
        textSize(30);
        text("You Pass", 180,200);
        stageCount = 2
        pc.velocityX=0;
        pc.velocityY=0;
        
      }
      drawSprites();
    
    }
