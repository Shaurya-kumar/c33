var score = 0;
var gameState =" start "
var count = 0
var particles;




var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  text("500", 20 ,550)
  text("500", 100 ,550)
  text("500", 180 ,550)
  text("200", 260 ,550)
  text("200", 340 ,550)
  text("200", 420 ,550)
  text("100", 500 ,550)
  text("100", 580 ,550)
  text("100", 660 ,550)
  text("50", 740 ,550)


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
    
   if(particles != null )
   {
   
    particles.display();
    if(particles.body.position.y>760){

    if (particles.body.position.x<200){

     score = score + 500
     particles = null 
     if(count>=5){

      gameState = "end" 

     }

    }else if(particles.body.position.x>240 && particles.body.position.x<440){

   score = score + 200
   particles = null 
   if(count>=5){

    gameState = "end" 

   }

    }else if(particles.body.position.x>440 && particles.body.position.x<670){

      score = score + 100
       particles = null 
     if(count>=5){

      gameState = "end" 

     }
       }
   

    
        
    } 
  
  
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  if(gameState === "end"){

     text("Game Over" , 350 ,350)
     

  }

}


function mousePressed()
{

if(gameState !== "end"){count = count + 1}
particles = new Particle(mouseX,10,10,10)

}