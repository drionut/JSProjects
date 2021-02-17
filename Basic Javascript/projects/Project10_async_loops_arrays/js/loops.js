console.log("loops has been loaded");

// while loop
function count_to_ten() {
  var digit = "";
  var x = 1;

  while (x < 11) {
    digit += " " + x;
    x++;
  }
  document.getElementById("count_to_ten").innerHTML = digit;
}

// preparing for loop
var instruments = ["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"];
var content = "";

function for_loop() {
  for (var y = 0; y < instruments.length; y++) {
    content += instruments[y] + " ";
  }
  document.getElementById("list_of_instruments").innerHTML = "Instruments: " + content;
}

// create and use array
function array_function() {
  // create an empty array
  var instruments_array = [];
  // create a local variable
  var output = "";

  // looping thorugh GLOBAL instruments
  for (var x = 0; x < instruments.length; x++) {
    // asign values from instruments to instruments_array[index]
    instruments_array[x] = instruments[x];

    //    grab                           index        :          value
    var loop_step = "instruments_array[" + x + "] is : " + instruments_array[x] + "</br>";
    // and add each of them to the output variable
    output += "" + loop_step;
  }
  document.getElementById("array").innerHTML = output;
}

// continue and break
function continue_break() {
  var text = "";
  for (var i = 0; i < 11; i++) {
    if (i === 2) {
      text += "Number is " + i + ", please continue... </br>";
      continue;
    }
    if (i === 10) {
      text += "Number is " + i + ". We should stop.";
      break;
    }
  }
  document.getElementById("count_by_two").innerHTML = text;
}
