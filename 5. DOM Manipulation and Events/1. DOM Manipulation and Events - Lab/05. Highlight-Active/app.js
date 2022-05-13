function focused() {
  let inputs = Array.from(document.getElementsByTagName("input"));

  for (let el of inputs) {
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
  }

  function onFocus(ev) {
    let target = ev.target;
    target.parentNode.classList.add("focused");
  }

  function onBlur(ev) {
    let target = ev.target;
    target.parentNode.classList.remove("focused");
  }
}
