class Box{
  constructor(x,y){
      var options = {
          isStatic:false,
          restitution:0.5
      }
      this.body=Bodies.rectangle(x,y,50,50,options)
      this.width = 50
      this.height = 50
      World.add(world,this.body)
  }

  display(){

      rectMode(CENTER);
    push()
      translate(this.body.position.x, this.body.position.y)
      rotate(this.body.angle)
      fill("blue")
      rect(0,0, this.width, this.height);
     pop() 
  }
}