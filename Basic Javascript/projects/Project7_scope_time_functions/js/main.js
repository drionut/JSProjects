var globalVariable = 3; // declaring a global variable

// Cannot set property 'innerHTML' of null ??
// document.getElementById("numberElement").innerHTML = globalVariable;
// assign a value to span element when page loads
function castValue() {
  document.getElementById("numberElement").textContent = globalVariable;
}

// onload - display different greetings based on 'hour' variable value
function greeting() {
  var hour = new Date().getHours();
  if (hour > 5 == hour <= 11) {
    document.getElementById("greeting").innerHTML = "Good Morning!";
  } else if (hour > 11 == hour <= 18) {
    document.getElementById("greeting").innerHTML = "Good Afternoon!";
  } else if (hour > 18 == hour <= 22) {
    document.getElementById("greeting").innerHTML = "Good Evening!";
  } else {
    document.getElementById("greeting").innerHTML = "Time to sleep!";
  }
}

// using some nested function
function addOne() {
  var addOneLocalVariable = 1;
  function incrementByOne() {
    globalVariable += addOneLocalVariable;
  }
  incrementByOne();
  document.getElementById("numberElement").textContent = globalVariable;
}

// w/o nested function
function addTwo() {
  // intentionally using localVariable from addOne()
  //   globalVariable += addOneLocalVariable * 2;
  var addTwoLocalVariable = 2;
  globalVariable += addTwoLocalVariable;
  document.getElementById("numberElement").textContent = globalVariable;
}
