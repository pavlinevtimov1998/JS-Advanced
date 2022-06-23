window.addEventListener("load", solve);

function solve() {
  const description = document.getElementById("description");
  const name = document.getElementById("client-name");
  const phone = document.getElementById("client-phone");

  const typeProduct = document.getElementById("type-product");

  document
    .querySelector('button[type="submit"]')
    .addEventListener("click", sendForm);

  function sendForm(e) {
    e.preventDefault();

    if (
      description.value.length == 0 ||
      name.value.length == 0 ||
      phone.value.length == 0
    ) {
      return;
    }

    const receivedOrders = document.getElementById("received-orders");

    const divContainer = createElement("div", undefined, "container");
    const h2 = createElement("h2");
    const h3 = createElement(
      "h3",
      `Client information: ${name.value}, ${phone.value}`
    );
    const h4 = createElement(
      "h4",
      `Description of the problem: ${description.value}`
    );
    const startBtn = createElement("button", "Start repair", "start-btn");
    const finishBtn = createElement("button", "Finish repair", "finish-btn");
    finishBtn.disabled = true;

    if (typeProduct.value == "Computer") {
      h2.textContent = "Product type for repair: Computer";
    } else {
      h2.textContent = "Product type for repair: Phone";
    }

    [h2, h3, h4, startBtn, finishBtn].forEach((e) =>
      divContainer.appendChild(e)
    );

    receivedOrders.appendChild(divContainer);

    description.value = "";
    name.value = "";
    phone.value = "";

    startBtn.addEventListener("click", (e) => {
      e.target.disabled = true;
      e.target.parentNode.lastChild.disabled = false;
    });

    finishBtn.addEventListener("click", (e) => {
      const complete = document.getElementById("completed-orders");

      complete.appendChild(e.target.parentNode);
      startBtn.remove();
      finishBtn.remove();
    });

    document.querySelector(".clear-btn").addEventListener("click", (e) => {
      Array.from(
        document.querySelectorAll("#completed-orders .container")
      ).forEach((e) => e.remove());
    });
  }

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
