const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const wrapper = document.querySelector('.slider-wrapper');

let currentIndex = 2;

function centerSlide(index) {
  const slide = slides[index];
  const slideRect = slide.getBoundingClientRect();
  const wrapperRect = wrapper.getBoundingClientRect();

  // Fix calculation for the first slide
  let offset;
  if (index === 0) {
    // Directly use the slide's position for the first slide
    offset = 0; // No offset for the first slide
  } else {
    // Normal calculation for other slides
    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    const wrapperCenter = wrapper.offsetWidth / 2;
    offset = slideCenter - wrapperCenter;
  }

  // Apply the transform with smooth transition
  track.style.transition = "transform 0.6s ease";
  track.style.transform = `translateX(-${offset}px)`;
}


centerSlide(2);
// Navigation buttons
document.querySelector('.nav.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Move left
  centerSlide(currentIndex);
});

document.querySelector('.nav.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Move right
  centerSlide(currentIndex);
});

// Initialize the first slide when page loads
window.addEventListener('load', () => {
  centerSlide(currentIndex);
});

// Recenter on window resize
window.addEventListener('resize', () => {
  centerSlide(currentIndex);
});


