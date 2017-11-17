var hamburger = document.querySelector(".hamburger");
var ul = document.querySelector(".nav-list");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  ul.classList.toggle("is-visible");
});
