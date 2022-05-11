function solve() {
  let text = document.getElementById("text").value.split(" ");
  let namingConvention = document.getElementById("naming-convention").value;

  if (namingConvention == "Camel Case") {
    for (let i = 0; i < text.length; i++) {
      text[i] = text[i].toLocaleLowerCase();
      if (i > 0) {
        text[i] = text[i].replace(text[i][0], text[i][0].toLocaleUpperCase());
      }
    }
    document.getElementById("result").textContent = text.join("");
  } else if (namingConvention == "Pascal Case") {
    for (let i = 0; i < text.length; i++) {
      text[i] = text[i].toLocaleLowerCase();
      text[i] = text[i].replace(text[i][0], text[i][0].toLocaleUpperCase());
    }
    document.getElementById("result").textContent = text.join("");
  } else {
    document.getElementById("result").textContent = "Error!";
  }
}
