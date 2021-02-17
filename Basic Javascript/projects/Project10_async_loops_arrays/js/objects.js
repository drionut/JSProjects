console.log("objects.js has been loaded");

function object_function() {
  let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2019 ",
    color: "red ",
    description: function () {
      return "The car is a " + this.year + this.color + this.make + this.model;
    },
  };

  document.getElementById("object").innerHTML = car.description();
}
