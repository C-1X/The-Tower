function platformer(){
    if (platformerCount === 0 ){
        Platform2= createSprite(Math.round(random(1,400)),Math.round(random(350,400)),100,10);
        Platform3= createSprite(Math.round(random(1,400)),Math.round(random(350,300)),100,10);
        Platform4= createSprite(Math.round(random(1,400)),Math.round(random(300,250)),100,10);
        Platform5= createSprite(Math.round(random(1,400)),Math.round(random(250,200)),100,10);
        Platform6= createSprite(Math.round(random(1,400)),Math.round(random(200,150)),100,10);
        Platform7= createSprite(Math.round(random(1,400)),Math.round(random(150,100)),100,10);
        Platform8= createSprite(Math.round(random(1,400)),Math.round(random(100,50)),100,10);
        Platform9= createSprite(Math.round(random(1,400)),Math.round(random(50,0)),100,10);
    }
    var floor = createSprite(10,895,1000,1000);
    var goal = createSprite(200,1,1000,10)
    background('black')
    platformerCount = 1;
    
    pc.velocityY=pc.velocityY+1;
    
    pc.collide(floor);
    pc.collide(Platform2);
    pc.collide(Platform3);
    pc.collide(Platform4);
    pc.collide(Platform5);
    pc.collide(Platform6);
    pc.collide(Platform7);
    pc.collide(Platform8);
    pc.collide(Platform9);
    
    pc.shapeColor = "purple";
    goal.shapeColor = "blue";
    
    
    if(keyDown("A")){
        pc.x = pc.x-5;
    }
    
    if(keyDown("D")){
        pc.x = pc.x+5;
    }
    
    if(keyWentDown("space") && pc.velocityY === 0){
        pc.velocityY = -15;
    }
    
    if(pc.isTouching(goal)){
        text("you passed",200,200);
        pc.velocityY = 0;
    }
    
    drawSprites();
    }