// When the icon is clicked, the class name of the button becomes is-black
document.querySelector(".header_moon").onclick = function () {
  document.querySelector("body").classList.toggle("is-black");
};

// When the screen becomes tablet size, the mob icon comes out
document.querySelector(".header__mob-menu").onclick = function () {
  document.querySelector(".header-menu").classList.toggle("is-active");
};
