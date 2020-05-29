const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  //check for the next slide
  if (current.nextElementSibling) {
    //add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to start
    slides[0].classList.add(current);
  }

  setTimeout(() => current.classList.remove("current"));
};
const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  //check for the next slide
  if (current.previousElementSibling) {
    //add current to next sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to start
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

// button evens

document.querySelector("#prev").addEventListener("click", prevSlide);
document.querySelector("#next").addEventListener("click", nextSlide);
