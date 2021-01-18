const d = document;

let $hamburger = d.querySelector(".hamburger"),
  $menu = d.querySelector(".navbar-menu");

d.addEventListener("click", (e) => {
  if (window.innerWidth < 920) {
    if (e.target.matches(".hamburger")) {
      console.log("hola");
      $menu.classList.add("navbar-menu-active");
    } else if (e.target.matches(".close") || e.target.matches(".menu-links a")) {
      $menu.classList.remove("navbar-menu-active");
    }
  }
});

d.addEventListener("DOMContentLoaded", menuResize);

window.addEventListener("resize", menuResize);

function menuResize() {
  if (window.innerWidth >= 920) {
    $menu.classList.add("navbar-menu-active");
    console.log("hola");
  } else {
    $menu.classList.remove("navbar-menu-active");
  }
}
