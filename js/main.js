const getStarted = document.querySelector("#getStarted>p");
const CatAndDog = document.getElementById("CatAndDog");

getStarted.addEventListener("mouseover", () => {
  document.getElementById("background").style.filter = "blur(6px)";
  document.getElementById("background").style.transition = "all 300ms";
});
getStarted.addEventListener("mouseout", () => {
  document.getElementById("background").style.filter = "blur(0px)";
});

getStarted.addEventListener("click", () => {
  getStarted.style.display = "none";
  getStarted.style.transition = "all 100ms";
  CatAndDog.style.display = "grid";

  document.getElementById("dogs").style.animation = "slideLeft 2s 1";
  document.getElementById("cats").style.animation = "slideRight 2s 1";
});
setInterval(() => {
  if (CatAndDog.style.display == "grid") {
    document.getElementById("background").style.filter = "blur(6px)";
    document.getElementById("background").style.transition = "all 300ms";
  }
});
