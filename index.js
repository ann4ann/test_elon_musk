const menu = document.querySelector(".header__menu");
const hamburger = document.querySelector(".header__menuicon");
const menuItems = document.querySelectorAll(".menu__item");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    hamburger.classList.remove("close")
} else {
    menu.classList.add("showMenu");
    hamburger.classList.add("close")
  }
}

hamburger.addEventListener("click", toggleMenu);
