const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundLoop;
var backgroundSprite;
var gameState=0;
var levels=1;
var floors=1;
var pc;
var npc1,npc2,npc3,npc4,npc5;
var startButton;
var count = 0;
var ball;
var stageCount = 0;



function preload() {
    //loadImage("")
    backgroundLoop=loadAnimation("sprites/00.png", "sprites/0.png","sprites/1.png",
    "sprites/2.png","sprites/3.png","sprites/4.png","sprites/5.png","sprites/6.png",
    "sprites/7.png","sprites/8.png","sprites/9.png","sprites/10.png","sprites/11.png",
    "sprites/12.png","sprites/13.png","sprites/14.png","sprites/15.png","sprites/16.png",
    "sprites/17.png","sprites/18.png","sprites/19.png","sprites/20.png","sprites/21.png",
    "sprites/22.png","sprites/23.png","sprites/24.png","sprites/25.png","sprites/26.png",
    "sprites/27.png","sprites/28.png","sprites/29.png","sprites/30.png","sprites/31.png",
    "sprites/32.png","sprites/33.png","sprites/34.png","sprites/Tower Sprite 2.png","sprites/Tower Sprite 3.png"
    ,"sprites/Tower Sprite 4.png","sprites/Tower Sprite 5.png","sprites/Tower Sprite 6.png",
    "sprites/Tower Sprite 7.png","sprites/Tower Sprite 8.png","sprites/Tower Sprite 9.png"
    ,"sprites/Tower Sprite 10.png","sprites/Tower Sprite 11.png")
}

function setup(){
    
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    backgroundSprite = createSprite(windowWidth/2,windowHeight/2);
    backgroundSprite.addAnimation("bgloop",backgroundLoop);
    backgroundSprite.visible = false;
    backgroundSprite.scale = 5
    world = engine.world;
    pc = new Player(windowWidth/4,windowHeight/4,10,10);
    npc1 = new NPC(100,100,10,10);
    npc2 = new NPC(100,100,10,10);
    npc3 = new NPC(100,100,10,10);
    npc4 = new NPC(100,100,10,10);
    npc5 = new NPC(100,100,10,10);
    //textSize(25)
    //text("<Press space to begin>",windowWidth/2,windowHeight/2)
    startButton = createButton("Start")
    startButton.position(windowWidth/2,windowHeight/2);
    startButton.size(50,50);
    startButton.mousePressed(buttonPressed);
    ball = createSprite(0,0,10,10);
    ball.visible = false;
}

function draw(){
    Engine.update(engine);
    if (gameState===0){
        background("black")
        backgroundSprite.visible = true;
        console.log(backgroundSprite.depth)
        backgroundSprite.depth = 0
        drawSprites();
    }
    else if (gameState===1){
        background("white")
        if(stageCount===1){
            mazePuzzle();
        }
        else if(stageCount===2){
            
        }
        pc.display()
        npc1.display()
        npc2.display()
        npc3.display()
        npc4.display()
        npc5.display()
    }
}
function buttonPressed(){
    gameState=1;
    startButton.hide()
    console.log(windowWidth/2)
    backgroundSprite.visible = false;
    ball.visible = true;
    stageCount = 1
}
