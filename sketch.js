var dog;
var dog_Image;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
 dog_Image=loadImage("images/dogImg.png");
 happyDog=loadImage("images/dogImg1.png");
 
}

function setup() {
  database=firebase();
  console.log(database);
  createCanvas(500, 500);
 dog=createSprite(250,250);
 dog.addImage(dog_Image);
 foodStock=database.ref('Food');
 foodStock.on("value",readStock);
  
  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);

  }

  drawSprites();
  //add styles here

  function readStock(data){
foodS=data.val();

  }
function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}
  database.ref('/').update({

    Food:x
  })
}
}



