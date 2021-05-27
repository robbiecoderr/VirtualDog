var dog,sadDog,happyDog, database;
var foodcount
var feedbutton
var addbutton
function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(800,800);
dog=createSprite(400,400,50,50)
dog.addImage(happyDog)
var dogfood=database.ref("food")
dogfood.on("value",function(data){
foodcount=data.val().count
console.log(foodcount)
})
addbutton=createButton("addthefood")
feedbutton=createButton("feedthedog")
addbutton.position(250,250)
feedbutton.position(250,299)
}

function draw() {
  background(46,139,87);
  textSize(30)
  stroke ("red")
  text(foodcount+" remaining food",30,150)
  addbutton.mousePressed(()=>{
  addthefood()
  })
  feedbutton.mousePressed(()=>{
    feedthedog()
    }) 
  drawSprites();
}
function feedthedog()
{
foodcount=foodcount-1
database.ref("food").update({
  count:foodcount
})
}
function addthefood()
{
foodcount=foodcount+1
database.ref("food").update({
  count:foodcount
})
}