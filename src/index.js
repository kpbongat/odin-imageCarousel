import drawNavdots from "./drawNavdots";
import nextSlide from "./nextSlide";
import prevSlide from "./prevSlide";
import setActiveDot from "./setActiveDot";
import "./style.css";

const frame = document.querySelector(".frame");

const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");

prevButton.addEventListener("click", () => {
  prevSlide(frame);
  setActiveDot(frame);
});

nextButton.addEventListener("click", () => {
  nextSlide(frame);
  setActiveDot(frame);
});

drawNavdots();
setActiveDot(frame);
