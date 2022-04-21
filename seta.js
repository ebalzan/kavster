var arrow = document.querySelector(".arrow");

if (innerWidth >= 1024) {
  arrow.addEventListener("click", () => {
    scrollTo(0, 0);
  });
} else {
  arrow.addEventListener("touchend", () => {
    scrollTo(0, 0);
  });
}
