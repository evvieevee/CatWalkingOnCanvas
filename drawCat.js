
var canvas = document.getElementsByTagName('canvas')[0];
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var ctx = canvas.getContext("2d");

var dx = 10;
var dy = 10;

var dWidth = 320;
var dHeight = 320;

var sx = 0;
var sy = 0;

var sWidth = 320;
var sHeight = 320;

var img = new Image();
img.onload = () => {
    ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
}
img.src = "cat.png"

function drawImage(event) {
    if(event.pageX) {
        dx = event.pageX - 160//- img.clientWidth / 2;
        dy = event.pageY - 260//- img.clientHeight / 2;
    }
    ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
}

function drawCall(event) {
    drawImage(event);
    //drawLine();
}

setInterval(function () {
    if(sx > 320 * 2) {
        sx = 0;
    }else {
        sx += 320;
    }
    
}, 200);

document.onmousemove = (event) => {
    ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height);
    //ctx.drawImage(img, event.pageX - img.clientWidth / 2, event.pageY - img.clientHeight / 2);
    drawCall(event);
};/*
window.onresize = (event) => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height);
    drawCall(event);
};*/

