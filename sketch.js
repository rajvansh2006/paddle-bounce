var ballimg,paddleimg;
var ball,paddle;
var edges;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimg=loadImage("ball.png");
  paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball=createSprite(20,200,20,20);
  paddle=createSprite(360,200,50,20);
  ball.addImage(ballimg);
  paddle.addImage(paddleimg);
  ball.velocityX=9;
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(paddle,randomVelocity);
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  
  paddle.y=mouseY;
  
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=random(-8,8);
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

