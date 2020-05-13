const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var docter,patient1;
var engine, world;
var backgroundImg;

  engine = Engine.create();
    world = engine.world;

function setup() {
  createCanvas(displayWidth,displayHeight-112);
  engine = Engine.create();
  world = engine.world;
  backgroundImg = loadImage("bg2.png");
  docter = new Docter(1000,410,100,300);
  patient1 = new patient(400,410,200,200);

}

function draw() {
  background(backgroundImg);  
  docter.display();
  patient1.display();
 console.log(displayHeight);
}