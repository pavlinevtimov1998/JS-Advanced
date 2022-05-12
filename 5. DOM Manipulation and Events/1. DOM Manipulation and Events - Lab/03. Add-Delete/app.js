function addItem() {
  const input = document.getElementById("newItemText");
  const liElement = document.createElement("li");
  liElement.textContent = input.value;

  document.getElementById("items").appendChild(liElement);

  const aTag = document.createElement("a");
  aTag.href = "#";
  aTag.textContent = "[Delete]";
  aTag.addEventListener("click", onClick);

  liElement.appendChild(aTag);

  function onClick(ev) {
    let parent = ev.target.parentNode;
    parent.remove();
  }

  input.value = "";
}
