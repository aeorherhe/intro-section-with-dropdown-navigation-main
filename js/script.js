// select HTML elements
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close-icon");
const main = document.querySelector(".main");
const sectionOverlay = document.querySelector(".overlay");
const menuLists = document.querySelectorAll(".list-items ");
const navMenu = document.querySelectorAll(".nav-menu ");
const navbar = document.querySelector(".navbar ");

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

function showNavLists(menubar, event) {
  menubar.forEach(function (menus) {
    const menusHeader = menus.querySelectorAll(
      ".features-header *, .about-header *"
    );
    menusHeader.forEach(function (menuHeader) {
      menuHeader.addEventListener(event, () => {
        menubar.forEach(function (menu) {
          if (menu !== menuHeader) {
            menu.classList.remove("show-lists");
          }
        });

        menus.classList.add("show-lists");
        sectionOverlay.addEventListener("mouseover", () => {
          menus.classList.remove("show-lists");
        });
      });
    });
  });
}

navbar.addEventListener("mouseover", () => {
  let desktopScreen = window.matchMedia("(min-width:45rem)");
  if (!desktopScreen.matches) {
    // main.classList.remove("show-navbar");
    showNavLists(menuLists, "click");
  } else {
    showNavLists(menuLists, "mouseover");
  }
});

sectionOverlay.addEventListener("mouseover", () => {
  console.log("hello world");
  //  menus.classList.remove("show-lists");
});
