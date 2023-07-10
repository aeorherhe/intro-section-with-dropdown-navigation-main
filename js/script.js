// select HTML elements
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close-icon");
const main = document.querySelector(".main");
const sectionOverlay = document.querySelector(".overlay");
const menuLists = document.querySelectorAll(".list-items ");
const navMenu = document.querySelectorAll(".nav-menu ");
// const menuLists = document.querySelectorAll(".features , .about  ");

// show navmenu
navOpen.addEventListener("click", () => {
  main.classList.add("show-navbar");
});

// hide nav menu and lists
function hideNavMenu(param) {
  param.addEventListener("click", () => {
    main.classList.remove("show-navbar");
    menuLists.forEach(function (menus) {
      menus.classList.remove("show-lists");
    });
  });
}
hideNavMenu(navClose);
hideNavMenu(sectionOverlay);

console.log(navMenu);
navMenu.forEach(function (navMenu) {
  if (navMenu.classList.contains("mobile-login")) {
  }
});
menuLists.forEach(function (menus) {
  const menusHeader = menus.querySelectorAll(
    ".features-header *, .about-header *"
  );
  menusHeader.forEach(function (menuHeader) {
    menuHeader.addEventListener("click", () => {
      menuLists.forEach(function (menu) {
        if (menu !== menuHeader) {
          menu.classList.remove("show-lists");
        }
      });

      menus.classList.add("show-lists");
      if (menus.classList.contains("show-lists")) {
        menuHeader.addEventListener("click", () => {
          menus.classList.toggle("show-lists");
        });
      }
    });
  });
});
