class Paper{
constructor(x,y,r){
var options={isStatic:false ,restitution:0.3, friction:0.5, density:1.2}
this.x=x
this.y=y
this.r=70
this.body= Bodies.circle(this.x,this.y,15,options)
this.image= loadImage("paper.png")
this.image.scale=5
World.add(world,this.body)
}
display(){
var paperPos=(this.body.position) 
push()
translate(paperPos.x,paperPos.y)
imageMode(CENTER)
fill("black")
strokeWeight(6)
stroke("red")
image(this.image,0,0,this.r,this.r)
pop()
}


}