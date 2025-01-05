// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Target the specific div
gsap.from(".glass", {
  y: 300, // Start with the div 100px above its original position
  opacity: 0, // Start with full transparency
  scrollTrigger: {
    trigger: ".glass", // The element to trigger the animation
    start: "top bottom", // Animation starts when the top of the div is at the bottom of the viewport
    end: "top center", // Animation ends when the top of the div reaches the top of the viewport
    scrub: true, // Smoothly animates on scroll
  },
});
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Target the specific div
gsap.from(".bigHeader", {
  y: 300, // Start with the div 100px above its original position
  opacity: 0, // Start with full transparency
  scrollTrigger: {
    trigger: ".bigHeader", // The element to trigger the animation
    start: "top bottom", // Animation starts when the top of the div is at the bottom of the viewport
    end: "top center", // Animation ends when the top of the div reaches the top of the viewport
    scrub: true, // Smoothly animates on scroll
  },
});
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Target the specific div
gsap.from(".p1", {
  y: 300, // Start with the div 100px above its original position
  opacity: 0, // Start with full transparency
  scrollTrigger: {
    trigger: ".p1", // The element to trigger the animation
    start: "top bottom", // Animation starts when the top of the div is at the bottom of the viewport
    end: "top center", // Animation ends when the top of the div reaches the top of the viewport
    scrub: true, // Smoothly animates on scroll
  },
});

//smooth
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

gsap.ticker.lagSmoothing(0);
