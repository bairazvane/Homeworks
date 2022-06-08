var canvas1 = document.getElementById("firstCanvas");
var ctx = canvas1.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello There!", 10, 50);

// Canvas 2
var canvas2 = document.getElementById("secondCanvas");
var ctx = canvas2.getContext("2d");

// Create gradient
var grad = ctx.createLinearGradient(0, 0, 200, 0);
grad.addColorStop(0, "blue");
grad.addColorStop(1, "violet");

// Fill with gradient
ctx.fillStyle = grad;
ctx.fillRect(10, 10, 150, 80);
s