const nextButton = document.getElementById("menu-next-page");
const menuPages = document.querySelectorAll(".menu-page");
let currentPageIndex = 0;

gsap.registerPlugin(ScrollTrigger);

function firstPageAnim() {
  const tl = gsap.timeline();

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
}

function culinaryAnim() {
  gsap.from(".culinary-items__imgWrapper.culinary-img-left", {
    x: "-200",
    opacity: 0,
    duration: 1.2,
    ease: Expo,
    scrollTrigger: {
      trigger: ".culinary-items__imgWrapper.culinary-img-left",
      start: "top center",
      toggleActions: "restart none none none",
    },
  });

  gsap.from(".culinary-items__imgWrapper.culinary-img-right", {
    x: "200",
    opacity: 0,
    duration: 1.5,
    ease: Expo,
    scrollTrigger: {
      trigger: ".culinary-items__imgWrapper.culinary-img-left",
      start: "top 80%",
      toggleActions: "restart none none none",
    },
  });

  gsap.from(".culinary-items__content.culinary-content-right", {
    x: "200",
    opacity: 0,
    duration: 1.5,
    ease: Expo,
    delay: 0.6,
    scrollTrigger: {
      trigger: ".culinary-items__imgWrapper.culinary-img-left",
      start: "top 80%",
      toggleActions: "restart none none none",
    },
  });

  gsap.from(".culinary-items__content.culinary-content-left", {
    x: "-200",
    opacity: 0,
    duration: 1.5,
    ease: Expo,
    delay: 0.6,
    scrollTrigger: {
      trigger: ".culinary-items__imgWrapper.culinary-img-left",
      start: "top 80%",
      toggleActions: "restart none none none",
    },
  });
}

function openingHoursAnim() {
  gsap.from(".opening-content__hours", {
    x: "-400",
    opacity: 0,
    duration: 1,
    ease: Expo,
    scrollTrigger: {
      trigger: "#opening",
      start: "top 80%",
      toggleActions: "restart none none none",
    },
  });

  gsap.from(".opening-hours__content-dishWrapper__item.item-top", {
    y: "-100",
    opacity: 0,
    duration: 1,
    ease: Expo,
    scrollTrigger: {
      trigger: "#opening",
      start: "top 80%",
      toggleActions: "restart none none none",
    },
  });
  gsap.from(".opening-hours__content-dishWrapper__item.item-bottom", {
    y: "100",
    opacity: 0,
    duration: 1,
    ease: Expo,
    scrollTrigger: {
      trigger: "#opening",
      start: "top 80%",
      toggleActions: "restart none none none",
    },
  });
}

function menuAnim() {
  gsap.from("#explore-menu", {
    x: "-200",
    opacity: 0,
    duration: 1,
    ease: Expo,
    scrollTrigger: {
      trigger: "#menu",
      start: "top 80%",
      toggleActions: "restart none none none",
    },
  });

  gsap.from("#menu", {
    x: "200",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    scrollTrigger: {
      trigger: "#menu",
      start: "top center",
      toggleActions: "restart none none none",
    },
  });
}

function updateButtonText() {
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
firstPageAnim();
menuAnim();
culinaryAnim();
document.addEventListener("DOMContentLoaded", openingHoursAnim);
