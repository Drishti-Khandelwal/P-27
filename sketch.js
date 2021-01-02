
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var w1;
var ball1,ball2,ball3,ball4,ball5,ball6;
var r1,r2,r3,r4,r5;


function setup() {
	createCanvas(600, 600);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  w1 = new Wall(300,100,400,20);
 ball1 = new Ball(100,300,25);
 ball2 = new Ball(200,300,25);
 ball3 = new Ball(300,300,25);
 ball4 = new Ball(400,300,25);
 ball5 = new Ball(500,300,25);

 r1 = new Slingshoot(ball1.body, w1.body, -100);
 r2 = new Slingshoot(ball2.body, w1.body, -50);
 r3 = new Slingshoot(ball3.body, w1.body, 0);
 r4 = new Slingshoot(ball4.body, w1.body, 50);
 r5 = new Slingshoot(ball5.body, w1.body, 100);

	Engine.run(engine);
  
}


function draw() {
 
  background("pink");
  w1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
}
function keyPressed(){
if(keyCode=== UP_ARROW ){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-50})
}

}

//CLASS 34 PROJECT PART :
//function mouseDragged(){
//Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})

	
//}






