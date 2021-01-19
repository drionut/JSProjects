function getElements() {
  var outputContent = document.getElementById("output"); // assign the #output to a variable
  console.log(outputContent.innerText); // logging the content
}

function generate() {
  // assigning a string value to a variable
  // i can use HTML tags like <br> because of .innerHTML  ?
  var quote =
    "If you always put limit on everything you do, physical or anything else. <br>";
  // using shorthand string concatenation
  quote += " It will spread into your work and into your life. <br><br><br>";
  var author = "<span id = 'author'>Bruce Lee</span>";

  //   modifying #randomText HTML element
  document.getElementById("randomText").innerHTML = quote + author;
}

// Challenge
// 1 - Write and execute your own JavaScript function.
// 2 - Write and execute the document.getElementById() method.
function changeAuthorColor(color) {
  document.getElementById("author").style.color = color;
}
