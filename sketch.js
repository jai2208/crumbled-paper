const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var leftSide;
var rightSide;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20)
    leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1300,600,20,120)

    var ball_options = {
    isStatic:false,
	friction:0,
	restitution:0.3,
	desity:1.2,
   }

    ball = Bodies.circle(300,100,10,ball_options)
    World.add(world,ball)
    
Engine.run(engine);

rectMode(CENTER);
ellipseMode(RADIUS);
  
}


function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,10)
  ground.show();
  rightSide.show();
  leftSide.show();
  Engine.update(engine);
  drawSprites();
 }

function keyPressed(){

if(keyCode === UP_ARROW){

    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
}






