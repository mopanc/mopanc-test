const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ScrollReveal animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

sr.reveal(".home__content, .about__content");
sr.reveal(".home__img", { origin: "top" });

sr.reveal(
  ".home__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content",
  {
    delay: 500,
    interval: 100,
  }
);

sr.reveal(".qualification__footer-text, .contact__content", {
  origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });


document.querySelector("input").addEventListener("click", toggleDarkMode);

let darkMode = true;

function toggleDarkMode() {
  switch (darkMode) {
    case true:
      darkMode = false;
      document.body.style.backgroundColor = "white";
      document.getElementsByClassName("header")[0].style.backgroundColor = "#f8f8f8";
      document.getElementsByClassName("qualification__name")[0].style.color = "#1a1a1a";
      document.getElementsByClassName("skills__title")[0].style.color = "#1a1a1a";
      document.getElementsByClassName("qualification__footer__projects-text")[0].style.color = "#1a1a1a";
      document.getElementsByClassName("contact__title")[0].style.color = "#1a1a1a";
      document.getElementsByClassName("btn--secondary")[0].style.backgroundColor = "#1a1a1a";
      document.getElementsByClassName("btn--secondary")[0].style.color = "white";
      document.getElementsByClassName("ri-code-s-slash-line")[0].style.color = "#1a1a1a";
      var elements = document.getElementsByClassName("home__info-number");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = "#1a1a1a";
        }
      var items = document.getElementsByClassName("skills__item");
        for (var i = 0; i < items.length; i++) {
          items[i].style.color = "#eeeaea";
        }
      var title = document.getElementsByClassName("section__title");
        for (var i = 0; i < title.length; i++) {
          title[i].style.color = "#1a1a1a";
        }
      document.querySelector("h1").style.color = "#1a1a1a";
      document.querySelector("h2").style.color = "#1a1a1a";
      document.querySelector("h3").style.color = "#1a1a1a";
      document.querySelector("p").style.color = "#1a1a1a";
      break;
      case false:
        darkMode = true;
        document.body.style.backgroundColor = "#1a1a1a";
        document.getElementsByClassName("header")[0].style.backgroundColor = "#1a1a1a";
        document.getElementsByClassName("qualification__name")[0].style.color = "white";
        document.getElementsByClassName("skills__title")[0].style.color = "white";
        document.getElementsByClassName("qualification__footer__projects-text")[0].style.color = "white";
        document.getElementsByClassName("contact__title")[0].style.color = "white";
        document.getElementsByClassName("btn--secondary")[0].style.backgroundColor = "white";
        document.getElementsByClassName("btn--secondary")[0].style.color = "#1a1a1a";
        document.getElementsByClassName("ri-code-s-slash-line")[0].style.color = "white";
        var elements = document.getElementsByClassName("home__info-number");
          for (var i = 0; i < elements.length; i++) {
              elements[i].style.color = "white";
          }
        var items = document.getElementsByClassName("skills__item");
          for (var i = 0; i < items.length; i++) {
            items[i].style.color = "white";
          }
        var title = document.getElementsByClassName("section__title");
          for (var i = 0; i < title.length; i++) {
            title[i].style.color = "white";
          }
        document.querySelector("h1").style.color = "white";
        document.querySelector("h2").style.color = "white";
        document.querySelector("h3").style.color = "white";
        document.querySelector("p").style.color = "white";
      break;
  }
}
