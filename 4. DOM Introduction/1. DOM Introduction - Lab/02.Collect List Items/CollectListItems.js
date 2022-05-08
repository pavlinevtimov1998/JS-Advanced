function extractText() {
  let elements = document.getElementById("items").children;

  let result = "";

  for (let el of Array.from(elements)) {
    result += el.textContent + "\n";
  }

  document.getElementById("result").value = result;
}
