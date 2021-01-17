var canvas;
var music;
var box1, box2, box3, box4;
var ball, edges; 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1=createSprite(300,400,10,50);
box1.shapeColor="violet";
box2=createSprite(400,400,10,50);
box2.shapeColor="lightblue";
box3=createSprite(500,400,10,50);
box3.shapeColor="cyan";
box4=createSprite(600,400,10,50);
box4.shapeColor="pink"
ball=createSprite(100,100,20,20);
ball.velocityX=4;
ball.velocityY=9;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges= createEdgeSprites();
ball.bounceOff(edges);
if(box1.isTouching(ball)&& ball.bounceOff(box1)){
    ball.shapeColor="violet";
    music.play();
}

if(box2.isTouching(ball)&& ball.bounceOff(box2)){
    ball.shapeColor="lightblue";
}

if(box3.isTouching(ball)&& ball.bounceOff(box3)){
    ball.shapeColor="cyan";
}
if(box4.isTouching(ball)){
    ball.shapeColor="pink";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
}
    //add condition to check if box touching surface and make it box
    drawSprites();
}
