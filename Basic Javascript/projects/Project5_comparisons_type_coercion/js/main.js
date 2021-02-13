// document.write(typeof 3);

// boolean
// document.write(typeof true);
document.write(10 < 3);

// floating point - infinity
var positiveInfinity = 2.797693134862315e308;
var negativeInfinity = -2.797693134862315e308;
console.log(positiveInfinity, negativeInfinity);

// type coercion
console.log("10" + 5);

function myFunction() {
  //   display true
  //   document.getElementById("outputText").innerHTML = isNaN("string");

  //    display NaN
  //   document.getElementById("outputText").innerHTML = 0 - "e";
  console.log(0 - "e");
}

// display 'false' in console using boolean
console.log(10 >= 11);
// is equal comparison
console.log(10 == 11);
// VALUE and TYPE comparison
console.log(10 === "10");
console.log(10 === 10);
// Using AND (&&) OR (||) NOT (!) comparisons
console.log(10 <= 11 && 11 < 10); // return false because just one comparison is true
console.log(10 <= 11 || 11 < 10); // return true because just one comparison NEED to be true
console.log(10 <= 11 != 11 < 10); // return true because first comparison(TRUE) is NOT the same as second one(FALSE)
function isNot() {
  document.getElementById("outputText").innerHTML =
    "isNot() function !(TRUE) returns: " + !(20 >= 10);
}
