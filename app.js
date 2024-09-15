document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const dotsContainer = document.querySelector(".dots");

  let currentSlide = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function updateSlider() {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    prevButton.style.display = currentSlide === 0 ? "none" : "block";
    nextButton.style.display =
      currentSlide === slides.length - 1 ? "none" : "block";
  }

  nextButton.addEventListener("click", function () {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  prevButton.addEventListener("click", function () {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      updateSlider();
    });
  });

  updateSlider();
});
