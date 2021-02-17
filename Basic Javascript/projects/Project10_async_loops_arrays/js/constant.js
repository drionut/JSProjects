console.log("constant has been loaded");

const instrument = { type: "quitar", brand: "Fender", color: "black" };
var button = document.getElementById("change_button");

function make_visible() {
  button.style.visibility = "visible";
}

function constant_function() {
  if (instrument.price == undefined) {
    var price = "nothing.";
  }

  if (instrument.price != undefined) {
    var price = "$ " + instrument.price;
  }

  document.getElementById("constant").innerHTML =
    "We have a " + instrument.color + " " + instrument.brand + " " + instrument.type + " that cost " + price;
  make_visible();
}

function add_property() {
  instrument.price = 200;
  constant_function();
}

function change_value() {
  instrument.brand = "Gibson";
  constant_function();
}
