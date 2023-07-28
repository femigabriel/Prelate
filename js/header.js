// JavaScript code to handle side drawer toggle
const drawer = document.getElementById("side-drawer");
const hamburgers = document.querySelectorAll(".fa-bars");

hamburgers.forEach((hamburger) => {
  hamburger.addEventListener("click", () => {
    drawer.classList.toggle("drawer-open");
  });
});
