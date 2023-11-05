let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slideCount;
  slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 3000);