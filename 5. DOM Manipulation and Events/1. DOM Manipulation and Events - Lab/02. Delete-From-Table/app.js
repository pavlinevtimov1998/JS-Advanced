function deleteByEmail() {
  const input = document.querySelector('input[name="email"]');
  const table = Array.from(document.querySelector("tbody").children);

  let isRemoved = false;

  for (let row of table) {
    if (row.children[1].textContent === input.value) {
      row.remove();
      isRemoved = true;
    }
  }

  const result = document.getElementById("result");

  if (isRemoved) {
    result.textContent = "Deleted.";
  } else {
    result.textContent = "Not found.";
  }
}
