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
    y: "50",
    opacity: 0,
    duration: 0.8,
    ease: Expo,
  });
}
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
