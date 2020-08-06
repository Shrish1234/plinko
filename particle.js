class Particle{
    constructor(x,y,r) {
        var options={
         restitution:0.8
        }
        this.body = Bodies.rectangle(x,y,radius);
        this.color=color(random(0,255),random(0,255),random(0,255))
        this.r=radius;
        World.add(world,this.body);
    }
    display(){
     var pos =this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     noStroke();
     fill("brown");
     ellipseMode(RADIUS);
     ellipse(pos.x, pos.y, this.r);
     pop()
    }
 }