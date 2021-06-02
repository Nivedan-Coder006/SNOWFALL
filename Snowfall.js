class Snow{
    constructor(x,y,r){
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("snow4.webp");
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 75,75);

        
        
    }
}