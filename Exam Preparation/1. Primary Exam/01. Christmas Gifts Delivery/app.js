function solution() {
  const adding = document.querySelectorAll(".card")[0];
  const list = document.querySelectorAll(".card ul")[0];
  const sended = document.querySelectorAll(".card ul")[1];
  const discarded = document.querySelectorAll(".card ul")[2];

  const addingButton = document.querySelector(".card button");

  addingButton.addEventListener("click", (event) => {
    let input = adding.querySelector("input");

    let li = document.createElement("li");
    li.classList.add("gift");
    li.textContent = input.value;

    let sendButton = document.createElement("button");
    let discardButton = document.createElement("button");
    sendButton.textContent = "Send";
    sendButton.setAttribute("id", "sendButton");
    discardButton.textContent = "Discard";
    discardButton.setAttribute("id", "discardButton");

    li.appendChild(sendButton);
    li.appendChild(discardButton);

    if (input.value.length > 0) {
      list.appendChild(li);

      let items = Array.from(list.children);

      items = items.sort((a, b) => a.textContent.localeCompare(b.textContent));

      items.forEach((el) => {
        list.removeChild(el);
        list.appendChild(el);
      });

      input.value = "";
    }

    sendButton.addEventListener("click", (e) => {
      let el = e.target.parentNode;
      let btns = el.querySelectorAll("button");
      Array.from(btns).forEach((b) => {
        el.removeChild(b);
      });
      sended.appendChild(el);
    });

    discardButton.addEventListener("click", (e) => {
      let el = e.target.parentNode;
      let btns = el.querySelectorAll("button");
      Array.from(btns).forEach((b) => {
        el.removeChild(b);
      });
      discarded.appendChild(el);
    });
  });
}
