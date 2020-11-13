class Box{
    constructor(x, y){
      var options={
        restitution:0.4,
        density:1.2,
        friction:0,
        
      }
      this.body=Bodies.rectangle(x,y,30,40,options);
      this.x=x;
      this.y=y;
      this.width=30;
      this.height=40;
      World.add(world,this.body)
      this.visibility = 255;
    }
    display(){
      if(this.body.speed<3){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke(100,200,100);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        strokeWeight(4);
        stroke(100,200,100);
        rect(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
  }