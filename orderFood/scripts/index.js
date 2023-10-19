let menuBtn = document.getElementById("menu-btn");
let containerOne = document.getElementById("container-one");
let containerTwo = document.getElementById("container-two");
let cancelBtn = document.getElementById("cancel-btn");
let navOptions = document.getElementById("navigation-mobile-options");
menuBtn.addEventListener("click", () => {
  containerOne.style.visibility = "hidden";
  containerTwo.style.visibility = "hidden";
  menuBtn.style.visibility = "hidden";
  cancelBtn.style.visibility = "visible";
  navOptions.style.visibility = "visible";
});
cancelBtn.addEventListener("click", () => {
  containerOne.style.visibility = "visible";
  containerTwo.style.visibility = "visible";
  menuBtn.style.visibility = "visible";
  cancelBtn.style.visibility = "hidden";
  navOptions.style.visibility = "hidden";
});
