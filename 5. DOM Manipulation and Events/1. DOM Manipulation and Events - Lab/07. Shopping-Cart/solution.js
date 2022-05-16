function solve() {
  document
    .getElementsByClassName("shopping-cart")[0]
    .addEventListener("click", onClick);

  const textArea = document.querySelector("textarea");
  textArea.textContent = "";

  const checkoutObject = {
    products: [],
    sum: 0,
  };

  function onClick(ev) {
    if (
      ev.target.tagName === "BUTTON" &&
      ev.target.classList.contains("add-product")
    ) {
      const product = ev.target.parentNode.parentNode;
      const name = product.querySelector(".product-title").textContent;
      const price = Number(
        product.querySelector(".product-line-price").textContent
      );
      let output = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      textArea.textContent += output;
      if (checkoutObject["products"].includes(name) == false) {
        checkoutObject["products"].push(name);
        checkoutObject["sum"] += price;
      } else {
        checkoutObject["sum"] += price;
      }
    } else if (
      ev.target.tagName === "BUTTON" &&
      ev.target.classList.contains("checkout")
    ) {
      textArea.textContent += `You bought ${checkoutObject["products"].join(
        ", "
      )} for ${checkoutObject["sum"].toFixed(2)}.`;

      ev.target.disabled = true;
      let addButtons = Array.from(
        ev.target.parentNode.querySelectorAll(".add-product")
      );
      addButtons.forEach((b) => (b.disabled = true));
    }
  }
}
