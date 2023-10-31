let btn = document.getElementById("btn");
const audio = document.getElementById("audio");

function btnImage() {
  audio.play();
  let container = document.getElementById("container");
  let h1 = document.getElementById("h1");
  container.classList.toggle("full");
  btn.classList.toggle("hide");
  h1.classList.toggle("hide");
}
