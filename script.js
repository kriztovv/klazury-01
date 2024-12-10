const slowScrollDiv = document.querySelector(".stripes");
const fastScrollDiv = document.querySelector(".scroll");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Slower scrolling
  slowScrollDiv.style.transform = `translateY(${scrollPosition * 0.8}px)`;

  // Faster scrolling
  fastScrollDiv.style.transform = `translateY(${-scrollPosition * 0.5}px)`;
});
