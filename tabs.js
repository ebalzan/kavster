var home = document.querySelector("body");
var colecoes = document.querySelector(".colecoes");
var produtos = document.querySelector(".produtos");
var sobre = document.querySelector(".sobre");
var contato = document.querySelector(".slogan");

if (innerWidth > 1024) {
  var liDesktop = document.querySelectorAll(".menu-desktop li");
  var bottomBar = document.querySelector(".bottom_bar");
  var tabsDesktop = [home, colecoes, sobre, contato];

  for (let i = 0; i < tabsDesktop.length; i++) {
    liDesktop[i].addEventListener("click", () => {
      var posY = tabsDesktop[i].offsetTop - 100;
      scrollTo(0, posY);
    });
    window.addEventListener("scroll", () => {
      var posY = tabsDesktop[i].offsetTop - 100;
      if (scrollY >= posY) {
        var posX = liDesktop[i].offsetLeft;
        bottomBar.style.left = posX + "px";
      }
    });
  }
} else if (innerWidth <= 1024) {
  var liMobile = document.querySelectorAll(".menu-mobile li");
  var tabsMobile = [home, produtos, sobre, contato];

  for (let i = 0; i < tabsMobile.length; i++) {
    liMobile[i + 1].addEventListener("touchend", () => {
      var posY = tabsMobile[i].offsetTop;
      scrollTo(0, posY);
    });
  }
}
