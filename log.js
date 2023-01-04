class Log{
    constructor(x,y,w){
        var options={
            isStatic:false,
            restitution:0.5
        }
        this.body = Bodies.rectangle(x,y,w,20,options)
        this.width=w
        this.height=20

        World.add(world,this.body)
    }

    display(){
        rectMode(CENTER)
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("red")
        rect(0,0,this.width,this.height)
        pop()
    }
}