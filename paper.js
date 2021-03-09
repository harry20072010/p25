class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
        this.image = loadImage("paper.png");
    }
    display(){
        var poss = this.body.position
        push()
        translate(poss.x,poss.y)
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}