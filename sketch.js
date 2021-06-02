const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var snow1
var bg
var xr
function preload(){
  bg = loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  xr = Math.round(random(50,750))
  engine = Engine.create();
  world = engine.world;
  snow1 = new Snow(xr,0,3);

}

function draw() {
  background(bg);  
  Engine.update(engine);
  if(frameCount%60 === 0){
    Matter.Body.setPosition(snow1.body,{x:Math.round(random(0,800)),y:0})
    console.log("test")
  }
  snow1.display()
  drawSprites();
}
