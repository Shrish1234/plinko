class Plinko{
   constructor(x,y,r) {
       var options={
        restitution:0.8
       }
       this.body = Bodies.rectangle(x,y,radius);
       this.r=radius;
    World.add(world,this.body);
   }
   display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill("brown");
    ellipse(pos.x, pos.y, this.r);

   }
}