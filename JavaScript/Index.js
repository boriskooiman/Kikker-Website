var slideIndex = 1;
Start();
var id = null;
var index = 0;



function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

function autoSlide(){
  showSlides(slideIndex += 1)
  setTimeout(autoSlide, 3000);
}

function Start(){
  setTimeout(autoSlide, 3000);
  showSlides(slideIndex);
}

