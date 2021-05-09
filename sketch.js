const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, packageIMG;
var helicopterBody, packageBody,ground;
var boxLeftBody, boxBottomBody, boxRightBody;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	//Create  helicopter
	helicopterBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, helicopterBody);
	
	//Create  package
	packageBody = Bodies.circle(width/2 , 200 , 10 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create  Ground
	ground = Bodies.rectangle(width/2, 670, width, 30 , {isStatic:true} );
 	World.add(world, ground);
 

 	// Add code here to create 3 bodies for 3 sides of the box

	
	Engine.run(engine);
  
}


function draw() {
 

  background(0);
 
  rectMode(CENTER);

  fill("brown");
  rect(ground.position.x , ground.position.y, width, 20);
  
  imageMode(CENTER);
  image(packageIMG,packageBody.position.x, packageBody.position.y, 40,40 )
  image(helicopterIMG,helicopterBody.position.x, helicopterBody.position.y, 300,100 )

   
  //Add code here to show 3 sides of the box
  

 
}

function keyPressed() {
  

	// Add code here to drop package when the down arrow key is pressed 
	//and if postion is within the red box
	



  // Package and helicopter moves left when LEFT ARROW key is pressed
  if (keyCode === LEFT_ARROW) {
	    if (packageBody.isStatic === true){
			translation={x:-20,y:0}
			Matter.Body.translate(packageBody, translation)
			Matter.Body.translate(helicopterBody, translation)
		}
  }

  // Package and helicopter moves right when RIGHT ARROW key is pressed
  if (keyCode === RIGHT_ARROW) {
	    if (packageBody.isStatic === true){
			translation={x:20,y:0}
			Matter.Body.translate(packageBody, translation);
			Matter.Body.translate(helicopterBody, translation);
		}
  }


}



