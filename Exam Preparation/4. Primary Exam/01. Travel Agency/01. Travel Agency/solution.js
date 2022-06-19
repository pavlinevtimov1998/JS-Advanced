window.addEventListener("load", solution);

function solution() {
  // Inputs
  const name = document.getElementById("fname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const postalCode = document.getElementById("code");

  document.getElementById("submitBTN").addEventListener("click", (e) => {
    e.preventDefault();


    if (name.value.length == 0 || email.value.length == 0) {
      return;
    }

    const preview = document.getElementById("infoPreview");

    const liName = createElement("li", `Full Name:`, name.value);
    const liEmail = createElement("li", `Email:`, email.value);
    const liPhone = createElement("li", `Phone Number:`, phone.value);
    const liAddress = createElement("li", `Address:`, address.value);
    const liCode = createElement("li", `Postal Code:`, postalCode.value);

    [liName, liEmail, liPhone, liAddress, liCode].forEach((e) => {
      preview.appendChild(e);
    });

    let inputsArr = [name, email, phone, address, postalCode];

    inputsArr.forEach((e) => {
      e.value = "";
    });

    e.target.disabled = true;

    let editBtn = document.getElementById("editBTN");
    let continueBtn = document.getElementById("continueBTN");

    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener("click", (e) => {
      let textArr = [];

      Array.from(preview.children).forEach((e) => {
        let [_, info] = e.textContent.split(": ");
        if (info != undefined) {
          textArr.push(info.trim());
        }

        e.remove();
      });

      inputsArr.forEach((e, i) => {
        if (textArr[i]) {
          e.value = textArr[i];
        }
      });

      e.target.disabled = true;
      e.target.parentNode.children[1].disabled = true;

      document.getElementById("submitBTN").disabled = false;
    });

    continueBtn.addEventListener("click", (e) => {
      document.getElementById("block").innerHTML = '';
      let h3 = document.createElement("h3");
      h3.textContent = "Thank you for your reservation!";
      document.getElementById("block").appendChild(h3);
    });
  });

  function createElement(element, text, value) {
    let el = document.createElement(element);
    el.textContent = text;
    if (value.length > 0) {
      el.textContent = `${text} ${value}`;
    }

    return el;
  }
}
