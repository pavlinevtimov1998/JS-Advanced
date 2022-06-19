window.addEventListener("load", solve);

function solve() {
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const description = document.getElementById("description");
  const price = document.getElementById("price");

  const total = document.querySelector(".total-price");

  const tbody = document.getElementById("furniture-list");

  document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault();

    if (
      model.value.length < 1 ||
      Number(year.value) < 1 ||
      description.value.length < 1 ||
      Number(price.value) < 1
    ) {
      return;
    }

    const trInfo = createElement("tr", undefined, "info");
    const tdModel = createElement("td", model.value);
    const tdPrice = createElement("td", Number(price.value).toFixed(2));
    const tdButtons = createElement("td");

    const btnMoreInfo = createElement("button", "More Info", "moreBtn");
    const btnBuy = createElement("button", "Buy it", "buyBtn");

    tdButtons.appendChild(btnMoreInfo);
    tdButtons.appendChild(btnBuy);

    trInfo.appendChild(tdModel);
    trInfo.appendChild(tdPrice);
    trInfo.appendChild(tdButtons);

    const trHide = createElement("tr", undefined, "hide");
    const tdYear = createElement("td", `Year: ${year.value}`);
    const tdDescr = createElement("td", `Description: ${description.value}`);
    tdDescr.colSpan = "3";

    trHide.appendChild(tdYear);
    trHide.appendChild(tdDescr);

    [trInfo, trHide].forEach((e) => tbody.appendChild(e));

    [model, year, description, price].forEach((e) => (e.value = ""));

    btnMoreInfo.addEventListener("click", (e) => {
      if (e.target.textContent == "More Info") {
        e.target.textContent = "Less Info";
        trHide.style.display = "contents";
      } else {
        e.target.textContent = "More Info";
        trHide.style.display = "none";
      }
    });

    btnBuy.addEventListener("click", (e) => {
      total.textContent = (
        Number(total.textContent) +
        Number(e.target.parentNode.parentNode.children[1].textContent)
      ).toFixed(2);

      trInfo.remove();
      trHide.remove();
    });
  });

  function createElement(element, text, className) {
    let el = document.createElement(element);

    if (text) {
      el.textContent = text;
    }

    if (className) {
      el.classList.add(className);
    }

    return el;
  }
}
