// Vanilla

const menuToggle = document.querySelector(".menu-toggler");
const topNav = document.querySelector(".top-nav");
const navLink = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", menTog);
navLink.forEach(function(elem) {
  elem.addEventListener("click", menTog);
});

function menTog() {
  menuToggle.classList.toggle("open");
  topNav.classList.toggle("open");
}

// jQuery Smooth Scroll

// $(".top-nav a").on("click", function(e) {
//   if (this.hash !== "") {
//     e.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800
//     );
//   }
// });

// Smooth scroll script
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});
