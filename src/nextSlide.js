export default function nextSlide(frame) {
  const currentScroll = frame.scrollLeft;
  frame.scrollTo(currentScroll + 250, 0);
}
