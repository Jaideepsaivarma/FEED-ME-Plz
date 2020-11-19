var dog,happyDog;
var database;
var foodS,foodStock;
var dog_img,happydog_img;
var background_img;

function preload()
{
  dog_img = loadImage("images/dogImg.png");
  happydog_img = loadImage("images/dogImg1.png");
  background_img = loadImage("images/Background 1.jpg");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  //creating the dog....
  dog = createSprite(250,400,10,10);
  dog.addImage(dog_img);
  dog.scale = 0.2;

}


function draw() {  
  background(background_img);
  //using arow key....
  if (keyCode === DOWN_ARROW) {
    writeStock(foodS);
    dog.addImage(happydog_img);
    console.log("WORKING");

  }


  drawSprites();
  textSize(20);
  fill("blue");
  text("PRESS UP ARROW TO FEED THE DOG",80,50);

  foodStock = database.ref('FOOD');
  foodStock.on("value",readStock);

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){

  if(x<=0){
    x = 0;
  } else {
    x = x-1;
  }
  database.ref('/').update({
  FOOD : x
  })
}



