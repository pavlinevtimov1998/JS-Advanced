function solve() {
  const textArea = document
    .getElementById("input")
    .value.split(".")
    .filter((element) => element != "");

  let sentences = [];

  let count = 0;
  if (textArea.length > 0) {
    for (let sentence of textArea) {
      sentences.push(sentence);
      count++;

      if (count == 3) {
        const el = document.createElement("p");
        const text = document.createTextNode(sentences.join(". ") + ".");
        el.appendChild(text);
        document.getElementById("output").appendChild(el);
        sentences = [];
        count = 0;
      }
    }

    if (count > 0) {
      const el = document.createElement("p");
      const text = document.createTextNode(sentences.join(". ") + ".");
      el.appendChild(text);
      document.getElementById("output").appendChild(el);
    }
  }
}