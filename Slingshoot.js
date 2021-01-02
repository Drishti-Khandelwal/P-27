class Slingshoot{
    constructor(bodyA, bodyB, xoffset){
    var options ={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness: 0.4,
    length:300,
    pointB:{x:xoffset,y:0}
    }
    this.chain = Constraint.create(options);
    this.xoffset = xoffset;
    World.add(world,this.chain);   
    }
    display(){
    var pointA = this.chain.bodyA.position; //starting point
    var pointB = this.chain.bodyB.position; // ending point
    line(pointA.x,pointA.y,pointB.x+this.xoffset ,pointB.y)
    
    }
    }