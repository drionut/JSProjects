function helloWorldFunction() {
  var a = document.getElementsByClassName("click");
  a[0].innerHTML = "The text has changed";
}

// using canvas to draq a gradient
var c = document.getElementById("canvasId");
var context = c.getContext("2d");

var gradient = context.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, "#dfe0e6");
gradient.addColorStop(1, "#676a85");

context.fillStyle = gradient;
context.fillRect(0, 0, 300, 400);
