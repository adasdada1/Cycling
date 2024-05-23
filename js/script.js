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
  document.addEventListener("click", function (e) {
    if (e.target !== headerList && e.target !== burger)
      headerList.classList.remove("left");
  });
});

const button = document.querySelectorAll(".start__button");
const popupBg = document.querySelector(".popup-register");
const popup = document.querySelector(".popup-register__form");
const popupClose = document.querySelector(".popup-register__close");
const succsess = document.querySelector(".popup-register__success");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
button.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    popupBg.classList.add("activated");
    popup.classList.add("activated");
    header.classList.add("dark");
    main.classList.add("dark");
    footer.classList.add("dark");
  });
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg || e.target === popupClose) {
    succsess.classList.add("hidden");
    Array.from(
      document.querySelector(".popup-register__wrapper").children
    ).forEach((element) => {
      element.classList.remove("hidden");
    });

    popupBg.classList.remove("activated");
    popup.classList.remove("activated");
    header.classList.remove("dark");
    main.classList.remove("dark");
    footer.classList.remove("dark");

    popup.name.value = "";
    popup.phone.value = "";
  }
});

const formNamePlaceholder = popup.name.placeholder;
const formPhonePlaceholder = popup.phone.placeholder;

popup.name.addEventListener("focus", function (e) {
  popup.name.placeholder = "";
});
popup.name.addEventListener("blur", function (e) {
  popup.name.placeholder = formNamePlaceholder;
});

popup.phone.addEventListener("focus", function (e) {
  popup.phone.placeholder = "";
});
popup.phone.addEventListener("blur", function (e) {
  popup.phone.placeholder = formPhonePlaceholder;
});

popup.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    !validatePhoneNumber(popup.phone.value) &&
    succsess.textContent !== "Enter the correct data"
  ) {
    succsess.textContent = "Enter the correct data";
  } else {
    succsess.textContent = "Application successfully sent";
  }
  Array.from(
    document.querySelector(".popup-register__wrapper").children
  ).forEach((element) => {
    element.classList.add("hidden");
  });
  succsess.classList.remove("hidden");
});

function validatePhoneNumber(input) {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return regex.test(input);
}

//! GSAP

document.querySelectorAll(".header__item").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#section" + (index + 1), offsetY: 100 },
    });
  });
});

gsap.to(
  [".start__title", ".start__subtitle", ".start__description", ".main_button"],
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

gsap.to(".last_button", {
  scrollTrigger: {
    trigger: ".last__button_wrapper",
    start: "top 80%",
    end: "top 30%",

    toggleActions: "play none none none",
  },
  y: 0,
  duration: 1,
  opacity: 1,
});

console.clear();
