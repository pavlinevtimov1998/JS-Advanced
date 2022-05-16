function validate() {
  const input = document.getElementById("email");
  input.addEventListener("change", onChange);

  function onChange(ev) {
    const pattern = /(?<name>[a-z]+)\@(?<domain>[a-z]+)\.(?<extension>[a-z]+)/g;

    if (pattern.test(input.value)) {
      ev.target.classList.remove("error");
    } else {
      ev.target.classList.add("error");
    }
  }
}
