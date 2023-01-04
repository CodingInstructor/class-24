const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,680,1200,15)

    box1 = new Box(700,500);
    box2 = new Box(900,500);
   
    log1 = new Log(800,400,250)

    box3 = new Box(700,300)
    box4 = new Box(900,300)

    log2 = new Log(800,250,250)

    box5 = new Box(800,200)

}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display()
}