
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, paperObject,groundObject	
var Constraint= Matter.Constraint 
var world;


function setup() {
	var canvas = createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,100,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	launcher= new Launcher(paperObject.body,{x:300,y:300});
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();  
  launcher.display();
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}



