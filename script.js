const canvas = document.getElementById("gameCanvas");
canvas.width = 500;
canvas.height = 500;
const ctx = canvas.getContext("2d");

let snakeSize = 10;
let snakeX = 150;
let snakeY = 150;

ctx.fillStyle = "green";
ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);

let snakeDirection = "right";
document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37:
            snakeDirection = "left";
            break;
        case 38:
            snakeDirection = "up";
            break;
        case 39:
            snakeDirection = "right";
            break;
        case 40:
            snakeDirection = "down";
            break;
    }
};

setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(snakeDirection == "left") snakeX -= snakeSize;
    if(snakeDirection == "up") snakeY -= snakeSize;
    if(snakeDirection == "right") snakeX += snakeSize;
    if(snakeDirection == "down") snakeY += snakeSize;
    ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);
}, 500);


var angle = 0;

function rotateBox() {
    angle = (angle + 45) % 360;
    var box = document.getElementById("box");
    box.style.transform = "translate(-50%, -50%) rotate(" + angle + "deg)";
    requestAnimationFrame(rotateBox);
}

requestAnimationFrame(rotateBox);