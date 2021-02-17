console.log("let.js has been loaded");

//
var x = 82;
document.write("Global var x value: " + x + "</br>");
{
  var x = 33;
  document.write("var x inside code block is : " + x + "</br>");
}

document.write("var x called again outside code block is : " + x + "</br>");
document.write("</br>");

var y = 882;
document.write("Global var y value: " + y + "</br>");

{
  let y = 333;
  document.write("let y inside code block is : " + y + " -- block scope cant be accessed outside</br>");
}

document.write(" y called again outside code block is : " + y + "</br>");
