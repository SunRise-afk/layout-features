document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((element) => {
    let speed = element.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX * speed) / 250;
    let y = (window.innerWidth - e.pageX * speed) / 250;
    element.style.transform = `translate(${-x}px) translateY(${y}px)`;
  });
}
