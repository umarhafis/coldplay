const nav = document.querySelector("#navigation");
const navbarNav = document.querySelector(".navbar-nav");

nav.addEventListener("click", function () {
  switch (navbarNav.style.display) {
    case "none":
      navbarNav.style.display = "block";
      break;
    case "block":
      navbarNav.style.display = "none";
      break;
    default:
      navbarNav.style.display = "block";
  }
});
