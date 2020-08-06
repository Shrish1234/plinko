function setup() {
  createCanvas(480,800);
  ground=new Ground(240,780)
}
var particles=[];
var plinkos=[];
var divisions =[];

var divisionHeight=300;

function draw() {
  background(255,255,255); 
  ground.display(); 
  drawSprites();
  
  for (var k=0;k<=width;k=k+80){
    divisionHeight.push(newDivisions(k,height-divisionHeight/2,10,divisionHeight))
  } 

  for(var j=40;j <=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }
  
    for(var j=15;j <=width-10;j=j+50){
    plinko.push(new Plinko(j,175));
  }
  
  for(var j=-10;j <=width-20;j=j+50){
    plinko.push(new Plinko(j,275));
  }
  
  for(var j=-35;j <=width-30;j=j+50){
    plinko.push(new Plinko(j,375));
  }

  for (var j=0;j<particles.length;j++){
    particle[j].display();
  }

  for (var k=0;k<particles.length;k++){
    division[k].display();
  }

  for (var l=0;l<particles.length;l++){
    plinko[l].display();
  }
}
if(frameCount%90===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}