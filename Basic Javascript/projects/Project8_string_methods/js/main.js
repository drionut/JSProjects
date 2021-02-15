// Function that is using concat() method
function generateContent() {
  var loginButton = document.getElementById("login"); // asign login button element to a variable
  var greeting = "Hello, "; //  declaring
  var firstName = "Tech"; //        variables
  var lastName = " Academy."; //        with a string value

  // variable with string value composed from previous variables
  var sentence = greeting.concat(firstName, lastName);

  // replacing paragraph element content
  document.getElementById("string").innerHTML = sentence;

  loginButton.remove(); //  remove login button
  sliceString(); //         calling sliceString() function
  searchString(); //        calling searchString() function
  generateTime();
  precision();
}

// Global variable used by sliceString() and searchString()
var fruits = "Apple, Banana, Kiwi, apple";

// Function that is using slice() and concat() methods
function sliceString() {
  var text = "Please grab a";
  var fruit = fruits.slice(14, 19);
  // using slice() and toUpperCase() methods combined into one declaration
  document.getElementById("slice").innerHTML = text.concat(fruit.toUpperCase());
}

// using search() string method
function searchString() {
  // performing a case-sensitive search
  // for a case-insensitive use: fruits.search(/apple/i)
  var fruitLocation = fruits.search("apple");

  console.log('"apple" is starting at location: ' + fruitLocation); // - string location into console -
}

// using toString method
function generateTime() {
  var text = "Time is ";
  var clock = new Date();
  var hour = clock.getHours();
  var minute = clock.getMinutes();
  var second = clock.getSeconds();
  var milisecond = clock.getMilliseconds();

  // transforming integer values of the hour,minute, second into strings
  // using ternary to display the leading 0 if values of hours,minutes, seconds are less than 10
  // concatenation with + sign
  var hourString = hour.toString() < 10 ? "0" + hour.toString() : hour.toString();
  var minuteString = minute.toString() < 10 ? "0" + minute.toString() : minute.toString();
  var secondString = second.toString() < 10 ? "0" + second.toString() : second.toString();

  // concatenation using concat() method
  var timeIs = text.concat(hourString, ":", minuteString, ":", secondString, " and ");

  document.getElementById("time").innerHTML = timeIs;
  document.getElementById("ms").innerHTML = milisecond;
}

// using toPrecision(), toFixed() methods
function precision() {
  // grab the value of the ms element
  var number = document.getElementById("ms").innerHTML;

  // generate a floating number
  var float = number * (number * 0.222222);

  // use toPrecision method and display the differences in the console
  console.log("Random floating number:        " + float);
  console.log("toPrecision() length 7 digits: " + float.toPrecision(7));

  // use toFixed method: convert number into a string, keep 2 decimals
  console.log("toFixed() method output      : " + float.toFixed(2));

  // using valueOf method, returning primitive value of the number
  console.log("valueOf() method output      : " + float.valueOf());
}
