var sea,ship,kk,io
function preload(){
sea = loadImage("sea.png")
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",)
}

function setup(){
  createCanvas(400,400);
 kk = createSprite(200, 200);
 io = createSprite(200, 200);


io.addAnimation("navio",ship)
kk.addImage(sea)


io.scale = 0.4
kk.scale = 0.5


kk.velocityX = -5
}

function draw() {
  background("blue");
if(kk.x < 0){
kk.x = kk.width/4;

}

    drawSprites();

 
}
