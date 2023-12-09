let images = ["../assets/cara boton.png", "image2.jpg", "image3.jpg"];
let position = 0;
let speed = 0;
let acceleration = 0.001;
let width = window.innerWidth;

function draw() {
 // clear canvas
 ctx.clearRect(0, 0, width, window.innerHeight);

 // draw image
 ctx.drawImage(images[position % images.length], 0, 0, width, window.innerHeight);

 // update speed and position
 speed += acceleration;
 position += speed;

 // reset position and speed when the animation ends
 if (position >= images.length) {
    position = 0;
    speed = 0;
 }

 // call draw function again
 requestAnimationFrame(draw);
}

// create canvas and get context
let canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");

// start animation
draw();