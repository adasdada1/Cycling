gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);
lightGallery(document.querySelector(".gallery__grid"), {
  plugins: [lgThumbnail],
  thumbnail: true,
  mousewheel: true,
  thumbWidth: 125,
  thumbHeight: 125,
  animateThumb: true,
  download: false,
  thumbMargin: 20,
  mobileSettings: {
    controls: false,
  },
});

const burger = document.querySelector(".burger");
const headerList = document.querySelector(".header__list");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  headerList.classList.toggle("left");
});

//! GSAP
document.querySelectorAll(".header__item").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:100}});
  });
});


gsap.to(
  [
    ".start__title",
    ".start__subtitle",
    ".start__description",
    ".start__button",
  ],
  {
    delay: 0.5,
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power1.out",
  }
);

gsap.to(".start__left", {
  delay: 1.2,
  x: 0,
  opacity: 1,
  duration: 1.3,
  ease: "power1.out",
});

const titles = gsap.utils.toArray(".title");

titles.forEach((block) => {
  gsap.to(block, {
    duration: 1,
    opacity: 1,
    y: 0,

    scrollTrigger: {
      trigger: block.parentNode,
      start: "top 90%",
      toggleActions: "play none none none",
    },
    onComplete: function () {
      gsap.to(block, {
        "--width": "100%",
      });
    },
  });
});

gsap.to(".about__item", {
  scrollTrigger: {
    trigger: ".about__list",
    start: "top 80%",
    end: "top 30%",

    toggleActions: "play none none none",
  },
  x: 0,
  duration: 1,
  opacity: 1,
});

const participants = gsap.utils.toArray(".participants_item");
participants.forEach((block) => {
  gsap.to(block, {
    duration: 1,
    opacity: 1,
    y: 0,

    scrollTrigger: {
      trigger: block,
      start: "top 95%",
      end: "top 30%",
      toggleActions: "play none none none",
    },
  });
});

const galleryLink = gsap.utils.toArray(".gallery_link");
galleryLink.forEach((block) => {
  gsap.to(block, {
    duration: 1,
    opacity: 1,
    y: 0,

    scrollTrigger: {
      trigger: block,
      start: "top 90%",
      end: "top 30%",
      toggleActions: "play none none none",
    },
    onComplete: function () {
      gsap.to(block, {
        "--width": "100%",
      });
    },
  });
});

// console.clear();
