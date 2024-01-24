const nextButton = document.getElementById("menu-next-page");
const menuPages = document.querySelectorAll(".menu-page");
let currentPageIndex = 0;

function firstPageAnim() {
  var tl = gsap.timeline();
  tl.from("#animated-heading", {
    y: "-50",
    opacity: 0,
    duration: 1.4,
    ease: Expo,
  });
  tl.to("#animated-text", {
    x: "0",
    duration: 2,
    opacity: 1,
    delay: -1,
    ease: Expo.easeInOut,
    stagger: 0.5,
  });
  tl.from("#acm__logo", {
    y: "50",
    opacity: 0,
    duration: 1.4,
    ease: Expo,
  });
  tl.from(".culinary-items__imgWrapper", {
    x: "50",
    opacity: 0,
    duration: 1.3,
    ease: Expo.easeInOut,
  });
}

function openingHoursAnim() {
  let tl = gsap.timeline();
  tl.from(".opening-content__hours", {
    x: "-400",
    opacity: 0,
    duration: 1,
    ease: Expo,
    scrollTriger: {
      trigger: ".opening-content__hours",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
    },
  });

  tl.from(".opening-hours__content-dishWrapper", {
    x: "400",
    opacity: 0,
    duration: 0.9,
    ease: Expo,
  });
}

openingHoursAnim();

firstPageAnim();

function updateButtonText() {
  // Change button text based on the current page
  nextButton.textContent =
    currentPageIndex === menuPages.length - 1
      ? "< Previous Page"
      : "Next Page >";
}

nextButton.addEventListener("click", function () {
  menuPages[currentPageIndex].classList.remove("active");
  currentPageIndex = (currentPageIndex + 1) % menuPages.length;

  menuPages[currentPageIndex].classList.add("active");
  updateButtonText();
});

updateButtonText();
