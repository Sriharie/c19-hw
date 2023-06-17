var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.35;


}

function draw() {
  background(200);

  if(keyDown("space")){
 ghost.velocityY = -5;
  }

  if(keyDown("right_arrow")){
 ghost.x = ghost.x + 3;
  }

  if(keyDown("left_arrow")){
    ghost.x = ghost.x -3;
    }

  ghost.velocityY = ghost.velocityY+0.8;

  if(tower.y > 400){
      tower.y = 300
    }


    spawnDoors();

  drawSprites();

  if(ghost.y<0){
 
  }
}

function spawnDoors(){
if(frameCount % 240 === 0){

 var door = createSprite(200,-50);
 door.addImage("door",doorImg);
 door.velocityY = 3;

 door.x = Math.round(random(120,400));

 var climber = createSprite(200,10);
 climber.addImage("climber",climberImg);
 climber.velocityY = 3;

 ghost.setCollider("rectangle",0,0,ghost.width,ghost.height);
 ghost.debug = true

 climber.x = door.x;

 ghost.collide(climber);
}
}