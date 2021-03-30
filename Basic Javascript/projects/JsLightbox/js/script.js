var slideIndex = 1;
showSlides(slideIndex);

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function changeSlide(n) {
    showSlides((slideIndex += n));
}

function toSlide(n) {
    showSlides((slideIndex = n));
}

function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slide");
    var thumbs = document.getElementsByClassName("thumb");
    var caption = document.getElementById("caption");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].className = thumbs[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    thumbs[slideIndex - 1].className += " active";
    var text = thumbs[slideIndex - 1].alt;
    // capitalise first letter
    caption.innerHTML = jsUcfirst(text);
}
