function sumTable() {
  let sum = 0;

  const elements = document.querySelectorAll("table tr");

  for (let i = 1; i < elements.length - 1; i++) {
    let price = Number(elements[i].lastElementChild.textContent);

    sum += price;
  }

  document.getElementById("sum").textContent = sum;
}
