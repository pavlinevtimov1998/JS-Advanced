function create(words) {
  const parent = document.getElementById("content");

  words.forEach((w) => {
    parent.appendChild(document.createElement("div"));
    const divs = parent.children;
    const p = document.createElement("p");
    p.textContent = w;
    p.style.display = "none";
    divs[divs.length - 1].appendChild(p);
    divs[divs.length - 1].addEventListener("click", onClick);
  });

  function onClick(ev) {
    ev.target.querySelector("p").style.display = "";
  }
}
