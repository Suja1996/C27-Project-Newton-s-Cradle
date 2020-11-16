class Chain{
    constructor(body1,body2,offsetX,offsetY) {
      this.offsetX=offsetX
      this.offsetY=offsetY
        var options = {
            bodyA:body1.body,
            bodyB:body2.body,
            stiffness:0.04,
            length:100,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.chain=Matter.Constraint.create(options)
 
   

        World.add(world, this.chain);
      }
      display(){
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.bodyB.position;

        push();
        strokeWeight(4)
        stroke("blue")
        line(pos1.x,pos1.y,pos2.x+this.offsetX,pos2.y+this.offsetY)
        pop();
      }
}