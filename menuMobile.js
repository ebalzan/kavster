var menuIcon = document.querySelector(".menu-icon");
var closeIcon = document.querySelector(".close-icon");
var menu = document.querySelector(".menu-mobile");

menuIcon.addEventListener("click", () => {
  menu.style.right = 0;
  setTimeout(() => {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  }, 500);
});

closeIcon.addEventListener("click", () => {
  menu.style.right = "-200px";
  setTimeout(() => {
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }, 300);
});
