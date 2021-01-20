function onLoad() {
  power();
}

// research why numbers get concatenated instead of added
function add() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  //   console.log(num1 + num2);
  document.getElementById("result").innerText = num1 + num2;
}

function showAddition() {
  var add = 5 + 3;
  document.getElementById("math").innerHTML = "Example: 5 + 3 = " + add;
}

function showSubtraction() {
  var subtract = 355 - 35;
  document.getElementById("math").innerHTML = "Example: 355 - 35 = " + subtract;
}

function showDivision() {
  var divide = 48 / 3;
  document.getElementById("math").innerHTML = "Example: 48 / 3 = " + divide;
}

function showMultiplication() {
  var multiply = 6 * 8;
  document.getElementById("math").innerHTML = "Example: 6 * 8 = " + multiply;
}

function modulusOperator() {
  var modulus = 25 % 6;
  document.getElementById("math").innerHTML =
    "Example: When you divide 25 by 6 you have a remainder of: " + modulus;
}

function negationOperator() {
  var x = 10;
  document.getElementById("math").innerHTML = -x;
}

function increment() {
  var x = document.getElementById("number").innerText;
  x++;
  document.getElementById("number").innerText = x;
}

function decrement() {
  var x = document.getElementById("number").innerText;
  x--;
  document.getElementById("number").innerText = x;
}

//  Using some Math object methods
function generateRandom() {
  var randomNumber = Math.random() * 100;
  document.getElementById("generate").innerText =
    "Number generated : " + randomNumber;
  return randomNumber;
}

function roundingNumber() {
  var rounded = Math.round(generateRandom());
  document.getElementById("round").innerText = "Number rounded : " + rounded;
  return rounded;
}

function power() {
  var y = roundingNumber();
  var x = Math.pow(y, 2);
  document.getElementById("power").innerText =
    y + " to the power of 2 is equal with: " + x;
}
