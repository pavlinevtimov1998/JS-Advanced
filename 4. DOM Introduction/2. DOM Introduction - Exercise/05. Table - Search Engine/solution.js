function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const cells = document.querySelectorAll(".container tbody tr td");
    const input = document.getElementById("searchField").value;

    for (const el of cells) {
      if (el.parentElement.classList.contains("select")) {
        el.parentElement.classList.remove("select");
      }
    }

    const regex = new RegExp(input, "g");

    for (const el of cells) {
      let match = regex.exec(el.textContent);

      if (match) {
        el.parentElement.classList.add("select");
      }
    }

    document.getElementById("searchField").value = "";
  }
}
