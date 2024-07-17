export default function prevSlide(frame) {
  const currentScroll = frame.scrollLeft;
  frame.scrollTo(currentScroll - 250, 0);
}
