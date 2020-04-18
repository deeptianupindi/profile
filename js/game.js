function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById("textDisplay").innerHTML = "X is : "+x+", Y is : "+y;
}

function drawLine(ctx, params) {
  ctx.beginPath();
  ctx.moveTo(params.x1,params. y1);
  ctx.lineTo(params.x2, params.y2);
  ctx.stroke();
}

function drawText(ctx) {
  ctx.font = "20px Arial";
  ctx.fillText("sometext", 10, 50);
}
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = 934;
canvas.height = 622;


var background = new Image();
background.src = "images/cleveland.png";

background.onload = function(){
    ctx.drawImage(background,0,0);
    drawLine(ctx, {x1: 0, y1: 400, x2: 200, y2: 400});
    drawLine(ctx, {x1: 200, y1: 400, x2: 400, y2: 100});
}
