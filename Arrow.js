class Arrow extends BaseClass {
  constructor(x,y){
    super(x,y,120,120);
    this.image = loadImage("sprites/Arrow.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
