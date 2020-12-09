const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 

var myengine,myworld,myground;
var box1, box2;
 

function setup() 
{ 
  createCanvas(800,400); 

  myengine=Engine.create(); 
  myworld=myengine.world; 

  myground=new Ground(400,390,800,50);
  box1= new Box(400, 200, 50, 50);
  box2= new Box(420, 150, 50, 100);
   

   
} 
   
function draw() 
{ 
  background(0); 
  Engine.update(myengine); 
  
 myground.display();
 box1.display();
 box2.display();
  
}