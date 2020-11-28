const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var manImage, man
var bolderImage
var castleImage


function preload() {
    backgroundImg = loadImage("sprites/nightfall.jpg");
    manImage = loadImage("sprites/Archer.png");
    bolderImage = loadImage("sprites/bolderImage.png")
    castleImage = loadImage("sprites/castle.png")
    
}

function setup(){
    var canvas = createCanvas(windowWidth-10,windowHeight-10);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height,width,20);
    //platform = new Ground(width/2-500, height-95, 300, 170);

    man = createSprite(width/2-450, height-370, 50,50)
    man.addImage(manImage);

    arrow = new Arrow(100,200)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
   
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
   

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    //bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(arrow.body,{x:300, y:150});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);  
    //strokeWeight(4);
  
    ground.display();
   

    imageMode(CENTER)
    image(bolderImage,width/2-500, height-80    , 300, 170);
    image(castleImage,870,350,550,550)
    box1.display();
    arrow.display()
    
    drawSprites()
}

function mouseDragged(){
   Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingshot.fly();
}