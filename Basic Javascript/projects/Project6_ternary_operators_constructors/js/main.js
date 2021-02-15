function rideFunction() {
  var height, canRide;
  height = document.getElementById("height").value;
  canRide = height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("ride").innerHTML = canRide + " to ride.";
}

function canVote() {
  var age = document.getElementById("age").value;
  var diff = 18 - age;
  var oldEnough = age >= 18 ? "You can vote!" : "You are not old enough to vote. Try again in " + diff + " years.";
  document.getElementById("vote").innerHTML = oldEnough;
}

function Vehicle(make, model, year, color) {
  this.VehicleMake = make;
  this.VehicleModel = model;
  this.VehicleYear = year;
  this.VehicleColor = color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2002, "Black");
var Erik = new Vehicle("Ford", "Focus", 1992, "Mustard");

// CAN'T name function 'constructor()'
// https://www.w3schools.com/js/js_reserved.asp
// https://www.w3schools.com/js/js_object_constructors.asp
function myFunction() {
  document.getElementById("new_and_this").innerHTML =
    "Jack drives a " + Jack.VehicleColor + "-colored " + Jack.VehicleModel + " manufactured in " + Jack.VehicleYear;
}

// nested function
function increment() {
  document.getElementById("numberField").innerHTML = count();
  function count() {
    var start = 9;
    function addOne() {
      start += 1;
    }
    addOne();
    return start;
  }
}
