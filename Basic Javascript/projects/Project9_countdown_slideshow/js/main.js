//
// Check console logs for more details

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls into one single function that require a parameter when is called
function changeSlides(n) {
  console.log("increase ");
  slideIndex += n;
  showSlides(slideIndex);
}

// function to subtract one from global variable 'slideIndex' value
function prevSlide() {
  console.clear();
  console.log("slideIndex value: " + slideIndex);
  console.log("-- subtract one from slideIndex --");
  slideIndex -= 1;
  showSlides(slideIndex);
}

// function to add one to global variable 'slideIndex' value
function nextSlide() {
  console.clear();
  console.log("slideIndex value: " + slideIndex);
  console.log("++ add one to slideIndex ++");
  slideIndex += 1;
  showSlides(slideIndex);
}

function showSlides(n) {
  // store all mySlides elements into one variable
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    console.log("condition TRUE for slideIndex bigger than 5(slides.length)");
    slideIndex = 1;
    console.log("slideIndex is now :" + slideIndex);
  }
  if (n < 1) {
    slideIndex = slides.length;
    console.log("condition TRUE for slideIndex smaller than 1(slideIndex goes back to 5(slides.length)");
    console.log("slideIndex is now :" + slideIndex);
  }

  // looping from 0 to 5 (slides.length) and hide elements from slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log("loop to remove element: slide[" + i + "]");
  }

  // display slide number
  // elements from slides are 0 based
  // we need to subtract one from the slideIndex value to display slides[4] that is last element
  console.log("display slide[" + slideIndex + " - 1]");
  slides[slideIndex - 1].style.display = "block";
}

//
// Setting the countdown
function countdown() {
  // grab the value of the input
  var seconds = document.getElementById("seconds").value;

  // starting countdown
  var tick = setInterval(function () {
    seconds -= 1;

    // display the remaining seconds
    document.getElementById("timer").innerHTML = seconds;

    //
    if (seconds < 1) {
      document.getElementById("timer").innerHTML = "Changing the picture";
    }

    if (seconds < 0) {
      // stop the timer
      clearInterval(tick);

      // call the function responsible for changing the image
      nextSlide();

      // clear fields
      document.getElementById("timer").innerHTML = "";
      document.getElementById("seconds").value = "";
    }
  }, 1000);
}
