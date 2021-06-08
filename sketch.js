const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var background ,backgroundImg,bg;
var shark,sharkImg;
var engine,world;
var fish,fish1,fish2,fish3,fishG;
var monster,monsterImg,monsterG;
var score=0;
var gameState="PLAY"
function preload(){
 backgroundImg = loadImage("sea.jpg");
 fish1=loadImage("fish1.png");
 fish2=loadImage("fish2.png");
 fish3=loadImage("fish3.png");
 sharkImg=loadImage("shark.png");
 monsterImg=loadImage("monster.png");
}
function setup(){
createCanvas(1000,600);
bg=createSprite(500,300)
bg.addImage(backgroundImg);
bg.scale=1.3;
engine=Engine.create()
world=engine.world;
shark=createSprite(200,400,10,10);
shark.addImage(sharkImg);
shark.scale=0.5;
fishG=createGroup();
monsterG=createGroup();
}
function draw(){
    
background("blue");
if(gameState==="PLAY"){
    bg.velocityX=-4;
    if(bg.x<375){
        bg.x=500;
        
    }
    if(monsterG.isTouching(shark)) {
gameState="END";
    }
    fishes();
monsters();
shark.isTouching(fishG,destroy);
drawSprites();
}
if(gameState==="END"){
    drawSprites();
    shark.destroy();
    fill("black")
    textSize(40);
    text("SHARK IS DIED",300, 200);
    shark.velocityY=0;
    monsterG.setVelocityXEach(0)
    bg.velocityX=0;
    monsterG.destroyEach();
    fishG.destroyEach();
}






textSize(20);
    fill("black");
    text("Score: " + score, 450, 50);
   
}

function fishes(){
    if(frameCount%150===0){
fish=createSprite(1000,300,10,20);
fish.velocityX=-8;
fish.scale=0.1;
fish.y=Math.round(random(300,500))
var rand=Math.round(random(1,3))
if(rand===1){
    fish.addImage(fish1);
}else if(rand===2){
fish.addImage(fish2);
}else{
    fish.addImage(fish3);
    fish.scale=0.2;
}
fishG.add(fish);

    }

}
function keyPressed(){
    if(keyCode===UP_ARROW){
        shark.y=shark.y-20;
    }
    if(keyCode===DOWN_ARROW){
        shark.y=shark.y+20;
    }
}
function destroy(shark,fish){
    fish.destroy();
    score=score+5
}
function desyroy(monster,shark){
    shark.destroy();
}
function monsters(){
    if(frameCount%300===0){
        monster=createSprite(1000,300,10,20);
        monster.velocityX=-8;
        monster.scale=0.3;
        monster.y=Math.round(random(300,500))
        monster.addImage(monsterImg);
        monsterG.add(monster);
    }
  
}