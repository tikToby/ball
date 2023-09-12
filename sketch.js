
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,b2,b3,b4;

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  b1=createImg('up.png');
  b1.position(170,10);
  b1.size(50,50);
  b1.mouseClicked(upforce);

  b2=createImg('down.png');
  b2.position(170,330);
  b2.size(50,50);
  b2.mouseClicked(downforce);

  b3=createImg('left.png');
  b3.position(1,150);
  b3.size(50,50);
  b3.mouseClicked(leftforce);

  b4=createImg('right.png');
  b4.position(350,140);
  b4.size(50,50);
  b4.mouseClicked(rightforce);

 ground=Bodies.rectangle(100,300,100,20,ground_options);
//  World.add(world,ground);

  ball=Bodies.circle(100,200,20,ball_options)
  World.add(world,ball);
 
ground = Bodies.rectangle(100,400,1000000,20,ground_options);
World.add(world,ground); 
 

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);


//console.log(ground.position.y);

  
  
}
function upforce(){
  Matter.Body.applyForce(ball, {x: 0, y:0} , {x:0 ,y:-0.03 });
}
function downforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.03})
}
function leftforce(){
  Matter.Body.applyForce(ball, {x: 0, y:0} , {x:-0.03 ,y:0 });
}
function rightforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0})
}