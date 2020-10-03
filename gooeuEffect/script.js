let container = document.getElementById("container");
let count = 40;
for (let i = 0; i < count; i++) {
  let gooeyBox = document.createElement("div");
  gooeyBox.className = "box";
  container.appendChild(gooeyBox);
}
setInterval(() => {
  let gooey = document.getElementsByClassName("box");
  console.log(gooey);
  for (let i = 0; i < gooey.length; i++) {
    gooey[i].style.left = Math.floor(Math.random() * 90) + "vw";
    gooey[i].style.top = Math.floor(Math.random() * 80) + "vh";
  }
}, 2000);
