import jumpSlide from "./jumpSlide";
import setActiveDot from "./setActiveDot";

export default function drawNavdots() {
  const frame = document.querySelector(".frame");
  const images = document.querySelectorAll(".slide img");
  const navDots = document.createElement("div");
  navDots.classList.toggle("nav-dots");
  navDots.classList.toggle("flex");
  [...images].forEach((i, idx) => {
    const dot = document.createElement("div");
    dot.classList.toggle("dot");
    dot.addEventListener("click", () => {
      jumpSlide(frame, idx);
      setActiveDot(frame);
    });
    navDots.appendChild(dot);
  });
  document.querySelector(".image-carousel").after(navDots);
}
