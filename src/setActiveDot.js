export default function setActiveDot(frame) {
  const activeDot = document.querySelector(".active");
  if (activeDot) {
    activeDot.classList.toggle("active");
  }
  const currentScroll = frame.scrollLeft;
  const dotIndex = currentScroll / 250;
  const currentDot = document.querySelector(`.dot:nth-child(${dotIndex + 1})`);
  currentDot.classList.toggle("active");
}
