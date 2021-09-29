function zimet(){
var canvas = document.getElementById("saule");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(150, 150, 50, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.strokeStyle = "yellow"
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(60, 200);
ctx.lineWidth = 5;
ctx.strokeStyle = "yellow"
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(60, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(240, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(240, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(150, 60);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(150, 240);
ctx.stroke();
}
