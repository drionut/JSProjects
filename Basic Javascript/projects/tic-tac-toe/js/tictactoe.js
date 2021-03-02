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
// msg var
let message = document.getElementById("message");
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

    // clicked element and activePlayer are concatenated and added to array

    // checking player to place pictures
    if (activePlayer === "X") {
      clicked.style.backgroundImage = 'url("./images/x.png")';
    } else {
      clicked.style.backgroundImage = 'url("./images/o.png")';
    }

    selectedSquares.push(squareNumber + activePlayer);
    checkWinConditions();

    // condition to check if it is computer turn
    // preventing autostart after first game
    if (activePlayer === "X" && selectedSquares.length > 0) {
      activePlayer = "O";
      if (activePlayer === "O") {
        disableClick();
        setTimeout(function () {
          computerTurn();
        }, 1000);
      }
    } else {
      activePlayer = "X";
    }

    // call audio()
    audio("./media/place.mp3");
  } else {
    // message
    message.innerHTML = "Can't select square " + (parseInt(squareNumber) + 1);
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

    // message
    message.innerHTML = "Computer picked square " + (random + 1);

    if (placeXOr0(random)) {
      success = true;
    }
  }
}

// function checks if array includes 3 strings
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
    message.innerHTML = "You win on top row";
    player_score = player_score + 1;
    player.innerHTML = player_score;
    drawWinLine(50, 100, 558, 100);
  }
  // x - 3,4,5
  else if (arrayIncludes("3X", "4X", "5X")) {
    message.innerHTML = "You win on middle row";
    player_score = player_score + 1;
    player.innerHTML = player_score;
    drawWinLine(50, 304, 558, 304);
  }
  // x - 6,7,8
  else if (arrayIncludes("6X", "7X", "8X")) {
    message.innerHTML = "You win on bottom row";
    player_score = player_score + 1;
    player.innerHTML = player_score;
    drawWinLine(50, 508, 558, 508);
  }
  // x - 0,3,6
  else if (arrayIncludes("0X", "3X", "6X")) {
    message.innerHTML = "You win on left-vertical row";
    player_score = player_score + 1;
    player.innerHTML = player_score;
    drawWinLine(100, 50, 100, 558);
  }
  // x - 1,4,7
  else if (arrayIncludes("1X", "4X", "7X")) {
    message.innerHTML = "You win on middle-vertical row";
    player_score = player_score + 1;
    player.innerHTML = player_score;
    drawWinLine(304, 50, 304, 558);
  }
  // x - 2,5,8
  else if (arrayIncludes("2X", "5X", "8X")) {
    message.innerHTML = "You win on right-vertical row";
    player_score = player_score + 1;
    player.innerHTML = player_score;
    drawWinLine(508, 50, 508, 558);
  }
  // x - 6,4,2
  else if (arrayIncludes("6X", "4X", "2X")) {
    message.innerHTML = "You win on diagonal row 7-5-3";
    player_score = player_score + 1;
    player.innerHTML = player_score;
    drawWinLine(100, 508, 510, 90);
  }
  // x - 0,4,8
  else if (arrayIncludes("0X", "4X", "8X")) {
    message.innerHTML = "You win on diagonal row 1-5-9";
    player_score = player_score + 1;
    player.innerHTML = player_score;
    drawWinLine(100, 100, 520, 520);
  }
  //   to implement checks for O - computer score
  //   O - 0-1-2
  else if (arrayIncludes("0O", "1O", "2O")) {
    message.innerHTML = "Computer win on top row";
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    drawWinLine(50, 100, 558, 100);
  }
  // O - 3,4,5
  else if (arrayIncludes("3O", "4O", "5O")) {
    message.innerHTML = "Computer win on middle row";
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    drawWinLine(50, 304, 558, 304);
  }
  // O - 6,7,8
  else if (arrayIncludes("6O", "7O", "8O")) {
    message.innerHTML = "Computer win on bottom row";
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    drawWinLine(50, 508, 558, 508);
  }
  // O - 0,3,6
  else if (arrayIncludes("0O", "3O", "6O")) {
    message.innerHTML = "Computer win on left-vertical row";
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    drawWinLine(100, 50, 100, 558);
  }
  // O - 1,4,7
  else if (arrayIncludes("1O", "4O", "7O")) {
    message.innerHTML = "Computer win on middle-vertical row";
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    drawWinLine(304, 50, 304, 558);
  }
  // O - 2,5,8
  else if (arrayIncludes("2O", "5O", "8O")) {
    message.innerHTML = "Computer win on right-vertical row";
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    drawWinLine(508, 50, 508, 558);
  }
  // O - 6,4,2
  else if (arrayIncludes("6O", "4O", "2O")) {
    message.innerHTML = "Computer win on diagonal row 7-5-3";
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    drawWinLine(100, 508, 510, 90);
  }
  // O - 0,4,8
  else if (arrayIncludes("0O", "4O", "8O")) {
    message.innerHTML = "Computer win on diagonal row 1-5-9";
    computer_score = computer_score + 1;
    computer.innerHTML = computer_score;
    drawWinLine(100, 100, 520, 520);
  }

  //
  else if (selectedSquares.length >= 9) {
    resetGame();
    audio("./media/tie.mp3");
    setTimeout(() => {
      clear();
    }, 2000);
    message.innerHTML = "Is a tie! - resetting the game.";
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

// function takes a string parameter of the path for audio files
function audio(audioURL) {
  // creating an audio object
  let audio = new Audio(audioURL);
  // play our audio
  audio.play();
}

// drawing win lines
function drawWinLine(coordsStartX, coordsStartY, coordsEndX, coordsEndY) {
  const canvas = document.getElementById("win-lines");
  const ctx = canvas.getContext("2d");

  // declaring variables to be using when checking for endpoints
  let startX = coordsStartX,
    startY = coordsStartY;

  // animating the line
  function animateLineDrawing() {
    const animation = requestAnimationFrame(animateLineDrawing);
    ctx.beginPath();
    ctx.moveTo(coordsStartX, coordsStartY);
    ctx.lineTo(startX, startY);
    // testing purposes line - TO BE DELETED
    // ctx.lineTo(coordsEndX, coordsEndY);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(70,255,33,.8)";
    ctx.stroke();

    //   condition to check if we reached endpoint for vertically/horizontally
    if (startX <= coordsEndX && startY <= coordsEndY) {
      if (startX < coordsEndX) {
        startX += 5;
      }
      if (startY < coordsEndY) {
        startY += 5;
      }
      if (startX >= coordsEndX && startY >= coordsEndY) {
        // stop the animateLineDrawing and clear the canvas
        cancelAnimationFrame(animation);
        ctx.clearRect(0, 0, 608, 608);
        setTimeout(() => {
          clear();
        }, 1500);
      }
    }

    // condition to check for diagonally 6-4-2
    if (startX <= coordsEndX && startY >= coordsEndY) {
      if (startX < coordsEndX) {
        startX += 5;
      }
      if (startY > coordsEndY) {
        startY -= 5;
      }
      if (startX >= coordsEndX && startY <= coordsEndY) {
        // stop the animateLineDrawing and clear the canvas
        cancelAnimationFrame(animation);
        ctx.clearRect(0, 0, 608, 608);
        setTimeout(() => {
          clear();
        }, 1500);
      }
    }
  }

  disableClick();
  audio("./media/winGame.mp3");
  animateLineDrawing();
  resetGame();
}

// reset the game if a tie or win
function resetGame() {
  // reset array with moves
  selectedSquares = [];
}

// clearing the table
function clear() {
  // loop through each HTML square element
  for (let i = 0; i < 9; i++) {
    // gets the HTML element of i
    let square = document.getElementById(String(i));
    // removes background images
    square.style.backgroundImage = "";
  }
  message.innerHTML = "Your turn. Place an X.";
}
