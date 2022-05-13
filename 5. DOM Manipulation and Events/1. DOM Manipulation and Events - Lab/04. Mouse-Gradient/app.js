function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", hover);

  const result = document.getElementById("result");

  function hover(ev) {
    let box = ev.target;
    const offset = Math.floor((ev.offsetX / box.clientWidth) * 100);

    result.textContent = `${offset}%`;
  }
}
