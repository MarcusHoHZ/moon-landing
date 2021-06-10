var spaceship, spaceshipImg
var bgImg,bg
var asteroid, asteroidImg, asteroidGroup
var score = 0 

function preload() {
bgImg = loadImage("moon.jpeg")
spaceshipImg = loadImage("rocket1.png")
asteroidImg = loadImage("asteroid.png")
}
function setup() {
  createCanvas(800,625);
  bg = createSprite(400,370,800,625);
  bg.addImage(bgImg);
  spaceship = createSprite(400,300,50,50)
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.35
  asteroidGroup = new Group();
}

function draw() {
  background(255,255,255);
  spawnAsteroid();  
  drawSprites();

  if(keyDown(UP_ARROW)) {
    spaceship.y -= 10
  }

  if(keyDown(DOWN_ARROW)) {
    spaceship.y += 10 
  }

  if(keyDown(LEFT_ARROW)) {
    spaceship.x -= 10
  }

  if(keyDown(RIGHT_ARROW)) {
    spaceship.x += 10
  }

}

function spawnAsteroid() {
if(frameCount % 60 === 0) {
  asteroid = createSprite(Math.round(random(50,575)),-10,50,50);
  asteroid.addImage(asteroidImg);
  asteroid.scale = 0.09; 

  asteroid.velocityY = 3;

}
}

