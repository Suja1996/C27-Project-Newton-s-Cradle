
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
bob1=new Ball(100,1000,20)
bob2=new Ball(150,1000,20)
bob3=new Ball(200,1000,20)
bob4=new Ball(250,1000,20)
bob5=new Ball(300,1000,20)
roof=new Ground(400,150,1200,30)
chain1=new Chain(bob1,roof,100,0)
chain2=new Chain(bob2,roof,150,0)
chain3=new Chain(bob3,roof,200,0)
chain4=new Chain(bob4,roof,250,0)
chain5=new Chain(bob5,roof,300,0)
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  
  drawSprites();
 

}

function keyPressed(){
	if(keyCode===RIGHT_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:100,y:0})
	}
	if(keyCode===LEFT_ARROW){

		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-100,y:0})
	}
}

