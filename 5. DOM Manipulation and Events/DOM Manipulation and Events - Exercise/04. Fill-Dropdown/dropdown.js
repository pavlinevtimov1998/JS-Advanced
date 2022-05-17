function addItem() {
  const menu = document.getElementById("menu");
  const text = document.getElementById("newItemText");
  const value = document.getElementById("newItemValue");

  let option = document.createElement("option");

  option.textContent = text.value;
  option.value = value.value;

  if (option.value !== "" && value.value !== "") {
    menu.appendChild(option);

    text.value = "";
    value.value = "";
  }
}
