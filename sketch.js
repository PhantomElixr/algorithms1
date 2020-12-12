var movingrect, fixedrect;


function setup() {
  createCanvas(800,400);

  movingrect = createSprite(200,100,50,50);

  fixedrect = createSprite(200,200,50,50);
}

function draw() {
  background(255,255,255);  
  movingrect.y = mouseY;
  movingrect.x = mouseX;

  movingrect.shapeColor = "RED";
  fixedrect.shapeColor = "RED";

  if(movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2){
    movingrect.shapeColor = "LIME";
  fixedrect.shapeColor = "LIME";
  }
  drawSprites();
}