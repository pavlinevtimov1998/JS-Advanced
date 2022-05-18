function solve() {
  const container = document.getElementById("exercise");

  container.querySelectorAll("button")[0].addEventListener("click", generate);
  container.querySelectorAll("button")[1].addEventListener("click", buy);

  function generate(event) {
    let input = JSON.parse(
      event.target.parentNode.querySelector("textarea").value
    );

    input.forEach((obj) => {
      let trow = document.createElement("tr");
      trow.appendChild(document.createElement("td"));
      trow.children[0].appendChild(document.createElement("img"));
      trow.children[0].children[0].src = obj["img"];

      trow.appendChild(document.createElement("td"));
      trow.children[trow.children.length - 1].appendChild(
        document.createElement("p")
      );
      trow.children[trow.children.length - 1].children[0].textContent =
        obj["name"];

      trow.appendChild(document.createElement("td"));
      trow.children[trow.children.length - 1].appendChild(
        document.createElement("p")
      );
      trow.children[trow.children.length - 1].children[0].textContent = Number(
        obj["price"]
      );

      trow.appendChild(document.createElement("td"));
      trow.children[trow.children.length - 1].appendChild(
        document.createElement("p")
      );
      trow.children[trow.children.length - 1].children[0].textContent = Number(
        obj["decFactor"]
      );

      trow.appendChild(document.createElement("td"));
      trow.children[trow.children.length - 1].appendChild(
        document.createElement("input")
      );
      trow.children[trow.children.length - 1].children[0].type = "checkbox";

      let tbody = document.querySelector(".table tbody");
      tbody.appendChild(trow);
    });
  }

  function buy(event) {
    const buyArea = container.querySelectorAll("textarea")[1];
    const checkBoxes = document.querySelectorAll(".table tbody input");

    let nameArr = [];
    let sum = 0;
    let decFactors = [];
    let decFactorSum = 0;

    for (const checkBox of checkBoxes) {
      if (checkBox.checked == true) {
        nameArr.push(
          checkBox.parentNode.parentNode.children[1].firstChild.textContent
        );
        console.log(nameArr);
        sum += Number(
          checkBox.parentNode.parentNode.children[2].firstChild.textContent
        );
        decFactors.push(checkBox.parentNode.parentNode.children[3].firstChild);
        decFactorSum += Number(
          checkBox.parentNode.parentNode.children[3].firstChild.textContent
        );
      }
    }

    decFactorSum /= decFactors.length;
    buyArea.value =
      `Bought furniture: ${nameArr.join(", ")}` +
      "\n" +
      `Total price: ${sum.toFixed(2)}` +
      "\n" +
      `Average decoration factor: ${decFactorSum}`;
  }
}
