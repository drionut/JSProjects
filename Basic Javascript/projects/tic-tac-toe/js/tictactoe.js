// ARROW FUNCTIONS CHALLENGE

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// arrowFunction = () => "this is an arrow function";
// var car = (val) => "brands :" + val;

// console.log(car("honda, ford"));

//  traditional function
// function addUsingTraditionalFunction(numberOne, numberTwo) {
//   return numberOne + numberTwo;
// }
// calling the traditional function
// console.log("Traditional Function: " + addUsingTraditionalFunction(2, 22));

// arrow function
// var numberOne = 1;
// var numberTwo = 25;
// var addUsingArrowFunction = (numberOne, numberTwo) => {
//   return numberOne + numberTwo;
// };

// console.log("Arrow Function: " + addUsingArrowFunction(numberOne, numberTwo));
//
// END OF ARROW FUNCTION

// TIC TAC TOE
// score variables
let player = document.getElementById("player_score");
let computer = document.getElementById("computer_score");
let player_score = 0,
  computer_score = 0;
// variable to keep track of who's turn it is
let activePlayer = "X";
// array that stores moves. use this to  check win conditions
let selectedSquares = [];

// function to place an X or O in a square
function placeXOr0(squareNumber) {
  let isPresent = (element) => element.includes(squareNumber);
  // condition to check if a square has been selected
  // .some() method is used to checke each element inside selectedSquare array
  if (!selectedSquares.some(isPresent)) {
    // get html element ID that was clicked
    let clicked = document.getElementById(squareNumber);

    // checking player to place pictures
    if (activePlayer === "X") {
      clicked.style.backgroundImage = 'url("./images/x.png")';
    } else {
      clicked.style.backgroundImage = 'url("./images/o.png")';
    }

    // clicked element and activePlayer are concatenated and added to array
    selectedSquares.push(squareNumber + activePlayer);
    console.log("All selected moves: " + selectedSquares);

    // check for wins
    console.log("checking for win conditions");
    checkWinConditions();

    // condition for changing the activePlayer
    if (activePlayer === "X") {
      activePlayer = "O";
    } else {
      activePlayer = "X";
    }

    // call audio()

    // condition to check if it is computer turn
    // preventing autostart after first game
    if (activePlayer === "O") {
      if (selectedSquares.length == 0) {
        activePlayer = "X";
      } else {
        disableClick();
        setTimeout(function () {
          computerTurn();
        }, 1000);
      }
    }
  } else {
    console.log("can't select " + squareNumber);
    return false;
  }

  //   return true is needed for computerTurn() to work
  return true;
}

// function results in a random square being selected
function computerTurn() {
  // boolean needed for while loop
  let success = false;
  let random;

  // keep picking random numbers if random is present in selectedSquares array
  while (!success) {
    // generating a random number
    random = Math.round(Math.random() * 8);
    console.log("Computer picked: " + random);

    if (placeXOr0(random)) {
      success = true;
    } else {
      console.log("keep trying computer ... ");
    }
  }
}

// function checks if an array includes 3 strings
function arrayIncludes(squareA, squareB, squareC) {
  const a = selectedSquares.includes(squareA);
  const b = selectedSquares.includes(squareB);
  const c = selectedSquares.includes(squareC);

  // if the 3 variables we pass are all included in our array
  //  TRUE is returned and else if condition from checkWinConditions() execute the drawWinLine function
  if (a === true && b === true && c === true) {
    return true;
  }
}

// function parses the selectedSquares array to search for win conditions
// drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
  // x - 0,1,2
  if (arrayIncludes("0X", "1X", "2X")) {
    // drawWinLine(50, 100, 558, 100);
    console.log("%c x wins top row ", "background: #222; color: #bada55");
    player_score = player_score + 1;
    player.innerHTML = player_score;
    resetGame();
  }
  // x - 3,4,5
  else if (arrayIncludes("3X", "4X", "5X")) {
    // drawWinLine(50, 304, 558, 304);
    console.log("%c x wins middle row ", "background: #222; color: #bada55");
    player_score = player_score + 1;
    player.innerHTML = player_score;
    resetGame();
  }
  // x - 6,7,8
  else if (arrayIncludes("6X", "7X", "8X")) {
    // drawWinLine(50, 508, 558, 508);
    console.log("%c x wins bottom row ", "background: #222; color: #bada55");
    player_score = player_score + 1;
    player.innerHTML = player_score;
    resetGame();
  }
  // x - 0,3,6
  else if (arrayIncludes("0X", "3X", "6X")) {
    // drawWinLine(100, 50, 100, 558);
    console.log("%c x wins left vertical row", "background: #222; color: #bada55");
    player_score = player_score + 1;
    player.innerHTML = player_score;
    resetGame();
  }
  // x - 1,4,7
  else if (arrayIncludes("1X", "4X", "7X")) {
    // drawWinLine(304, 50, 304, 558);
    console.log("%c x wins middle vertical row ", "background: #222; color: #bada55");
    player_score = player_score + 1;
    player.innerHTML = player_score;
    resetGame();
  }
  // x - 2,5,8
  else if (arrayIncludes("2X", "5X", "8X")) {
    // drawWinLine(508, 50, 508, 558);
    console.log("%c x wins rigth vertical row ", "background: #222; color: #bada55");
    player_score = player_score + 1;
    player.innerHTML = player_score;
    resetGame();
  }
  // x - 6,4,2
  else if (arrayIncludes("6X", "4X", "2X")) {
    // drawWinLine(100, 508, 510, 90);
    console.log("%c x wins diagonal row 6-4-2 ", "background: #222; color: #bada55");
    player_score = player_score + 1;
    player.innerHTML = player_score;
    resetGame();
  }
  // x - 0,4,8
  else if (arrayIncludes("0X", "4X", "8X")) {
    // drawWinLine(100, 100, 520, 520);
    console.log("%c x wins diagonal row 0-4-8", "background: #222; color: #bada55");
    player_score = player_score + 1;
    player.innerHTML = player_score;
    resetGame();
  }
  //   to implement checks for O - computer score
  //   O - 0-1-2
  else if (arrayIncludes("0O", "1O", "2O")) {
    // drawWinLine(50, 100, 558, 100);
    console.log("%c O wins top row ", "background: #222; color: #bada55");
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    resetGame();
  }
  // O - 3,4,5
  else if (arrayIncludes("3O", "4O", "5O")) {
    // drawWinLine(50, 304, 558, 304);
    console.log("%c O wins middle row ", "background: #222; color: #bada55");
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    resetGame();
  }
  // O - 6,7,8
  else if (arrayIncludes("6O", "7O", "8O")) {
    // drawWinLine(50, 508, 558, 508);
    console.log("%c O wins bottom row ", "background: #222; color: #bada55");
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    resetGame();
  }
  // O - 0,3,6
  else if (arrayIncludes("0O", "3O", "6O")) {
    // drawWinLine(100, 50, 100, 558);
    console.log("%c O wins left vertical row", "background: #222; color: #bada55");
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    resetGame();
  }
  // O - 1,4,7
  else if (arrayIncludes("1O", "4O", "7O")) {
    // drawWinLine(304, 50, 304, 558);
    console.log("%c O wins middle vertical row ", "background: #222; color: #bada55");
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    resetGame();
  }
  // O - 2,5,8
  else if (arrayIncludes("2O", "5O", "8O")) {
    // drawWinLine(508, 50, 508, 558);
    console.log("%c O wins rigth vertical row ", "background: #222; color: #bada55");
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    resetGame();
  }
  // O - 6,4,2
  else if (arrayIncludes("6O", "4O", "2O")) {
    // drawWinLine(100, 508, 510, 90);
    console.log("%c O wins diagonal row 6-4-2 ", "background: #222; color: #bada55");
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    resetGame();
  }
  // O - 0,4,8
  else if (arrayIncludes("0O", "4O", "8O")) {
    // drawWinLine(100, 100, 520, 520);
    console.log("%c O wins diagonal row 0-4-8", "background: #222; color: #bada55");
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    resetGame();
  }

  //
  else if (selectedSquares.length >= 9) {
    console.clear();
    console.log("%c is a tie - reset in 2 seconds ", "background: #222; color: #bada55");
    setTimeout(function () {
      resetGame();
    }, 1000);
  }
}

// disabling click
function disableClick() {
  let body = document.getElementsByTagName("body")[0];
  // making body unclickable
  body.style.pointerEvents = "none";
  // make it clickable after 1 second
  setTimeout(function () {
    body.style.pointerEvents = "auto";
  }, 1000);
}

// reset the game if a tie or win
function resetGame() {
  // loop through each HTML square element
  for (let i = 0; i < 9; i++) {
    // gets the HTML element of i
    let square = document.getElementById(String(i));
    // removes background images
    square.style.backgroundImage = "";
  }
  // reset array with moves
  selectedSquares = [];
  //   console.clear();
}
