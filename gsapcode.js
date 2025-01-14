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

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.from(".card1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".card1", // The element that triggers the animation
    start: "center center", // Start when the top of the div is 75% down the viewport
    end: "bottom top", // End when the top of the div is 25% down the viewport
    scrub: true, // Smoothly syncs animation with the scroll
  },
});

// Animate the div with the 'slide-in' class
gsap.to(".card1", {
  x: 0, // Slide it into view (initial transform was -100%)
  scrollTrigger: {
    trigger: ".card1", // The element that triggers the animation
    start: "center center",
    end: "bottom top",
    scrub: true, // Smoothly syncs animation with the scroll
  },
});
gsap.to(".card1", {
  scrollTrigger: {
    trigger: ".card1",
    start: "center center",
    end: "+=1000vw",
    scrub: true, // Smoothly syncs animation with the scroll

    pin: true, // Pin the element in place when it reaches the end of the animation
  },
});
gsap.from(".card2", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".card2", // The element that triggers the animation
    start: "center center", // Start when the top of the div is 75% down the viewport
    end: "bottom top", // End when the top of the div is 25% down the viewport
    scrub: true, // Smoothly syncs animation with the scroll
  },
});

// Animate the div with the 'slide-in' class
gsap.to(".card2", {
  x: 0, // Slide it into view (initial transform was -100%)
  scrollTrigger: {
    trigger: ".card2", // The element that triggers the animation
    start: "center center",
    end: "bottom top",
    scrub: true, // Smoothly syncs animation with the scroll
  },
});
gsap.to(".card2", {
  scrollTrigger: {
    trigger: ".card2",
    start: "center center",
    end: "+=1000vw",
    scrub: true, // Smoothly syncs animation with the scroll

    pin: true, // Pin the element in place when it reaches the end of the animation
  },
});
gsap.from(".card3", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".card3", // The element that triggers the animation
    start: "center center", // Start when the top of the div is 75% down the viewport
    end: "bottom top", // End when the top of the div is 25% down the viewport
    scrub: true, // Smoothly syncs animation with the scroll
  },
});

// Animate the div with the 'slide-in' class
gsap.to(".card3", {
  x: 0, // Slide it into view (initial transform was -100%)
  scrollTrigger: {
    trigger: ".card3", // The element that triggers the animation
    start: "center center",
    end: "bottom top",
    scrub: true, // Smoothly syncs animation with the scroll
  },
});
gsap.to(".card3", {
  scrollTrigger: {
    trigger: ".card3",
    start: "center center",
    end: "+=1000vw",
    scrub: true, // Smoothly syncs animation with the scroll

    pin: true, // Pin the element in place when it reaches the end of the animation
  },
});
gsap.from(".card4", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".card4", // The element that triggers the animation
    start: "center center", // Start when the top of the div is 75% down the viewport
    end: "bottom top", // End when the top of the div is 25% down the viewport
    scrub: true, // Smoothly syncs animation with the scroll
  },
});

// Animate the div with the 'slide-in' class
gsap.to(".card4", {
  x: 0, // Slide it into view (initial transform was -100%)
  scrollTrigger: {
    trigger: ".card4", // The element that triggers the animation
    start: "center center",
    end: "bottom top",
    scrub: true, // Smoothly syncs animation with the scroll
  },
});
gsap.to(".card4", {
  scrollTrigger: {
    trigger: ".card4",
    start: "center center",
    end: "+=1000vw",
    scrub: true, // Smoothly syncs animation with the scroll

    pin: true, // Pin the element in place when it reaches the end of the animation
  },
});

gsap.from(".table", {
  opacity: 0, // Start with full transparency
  scrollTrigger: {
    trigger: ".table", // The element to trigger the animation
    start: "top bottom", // Animation starts when the top of the div is at the bottom of the viewport
    end: "top center", // Animation ends when the top of the div reaches the top of the viewport
    scrub: true, // Smoothly animates on scroll
  },
});
gsap.to(".table", {
  scrollTrigger: {
    trigger: ".table",
    start: "center center",
    end: "+=1000vw",
    scrub: true, // Smoothly syncs animation with the scroll

    pin: true, // Pin the element in place when it reaches the end of the animation
  },
});
gsap.from(".conclusion", {
  opacity: 0, // Start with full transparency
  scrollTrigger: {
    trigger: ".conclusion", // The element to trigger the animation
    start: "top bottom", // Animation starts when the top of the div is at the bottom of the viewport
    end: "top center", // Animation ends when the top of the div reaches the top of the viewport
    scrub: true, // Smoothly animates on scroll
  },
});
gsap.to(".conclusion", {
  scrollTrigger: {
    trigger: ".conclusion",
    start: "center center",
    end: "+=1000vw",
    scrub: true, // Smoothly syncs animation with the scroll

    pin: true, // Pin the element in place when it reaches the end of the animation
  },
});
//smooth
//const lenis = new Lenis();

//lenis.on("scroll", ScrollTrigger.update);

//gsap.ticker.add((time) => {
//  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
//});

//gsap.ticker.lagSmoothing(0);
