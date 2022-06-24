function solve() {
  const name = document.getElementById("recipientName");
  const title = document.getElementById("title");
  const message = document.getElementById("message");

  const addBtn = document.getElementById("add");

  document.getElementById("reset").addEventListener("click", (e) => {
    e.preventDefault();

    name.value = "";
    title.value = "";
    message.value = "";
  });

  const list = document.querySelector("#list");
  const sendList = document.querySelector(".sent-list");
  const deletedList = document.querySelector(".delete-list");

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (name.value == "" || title.value == "" || message.value == "") {
      return;
    }
    const li = createElement("li");
    const h4Title = createElement("h4", `Title: ${title.value}`);
    const h4Name = createElement("h4", `Recipient Name: ${name.value}`);
    const spanText = createElement("span", message.value);
    const btnParent = createElement("div", undefined, undefined, "list-action");
    const btnSend = createElement("button", "Send");
    btnSend.setAttribute("type", "submit");
    btnSend.setAttribute("id", "send");

    const btnDelete = createElement("button", "Delete");
    btnDelete.setAttribute("type", "submit");
    btnDelete.setAttribute("id", "delete");

    btnSend.addEventListener("click", (e) => {
      e.preventDefault();
      let [_, name] =
        e.target.parentNode.parentNode.children[1].textContent.split(": ");
      const li = createElement("li");
      const spanName = createElement("span", `To: ${name} `);
      const spanTitle = createElement(
        "span",
        e.target.parentNode.parentNode.children[0].textContent
      );
      const div = createElement("div", undefined, "btn");
      const btn = createElement("button", "Delete");
      btn.setAttribute("type", "submit");
      btn.classList.add("delete");
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        deletedList.appendChild(e.target.parentNode.parentNode);
        e.target.parentNode.remove();
      });
      div.appendChild(btn);
      [spanName, spanTitle, div].forEach((e) => li.appendChild(e));
      sendList.appendChild(li);

      e.target.parentNode.parentNode.remove();
    });

    btnDelete.addEventListener("click", (e) => {
      e.preventDefault();

      e.target.parentNode.parentNode.remove();
      const li = createElement("li");
      let [_, name] =
        e.target.parentNode.parentNode.children[1].textContent.split(": ");
      const spanName = createElement("span", `To: ${name} `);
      const spanTitle = createElement(
        "span",
        e.target.parentNode.parentNode.children[0].textContent
      );
      li.appendChild(spanName);
      li.appendChild(spanTitle);
      deletedList.appendChild(li);
    });

    btnParent.appendChild(btnSend);
    btnParent.appendChild(btnDelete);

    [h4Title, h4Name, spanText, btnParent].forEach((e) => li.appendChild(e));
    list.appendChild(li);

    name.value = "";
    title.value = "";
    message.value = "";
  });

  function createElement(el, content, className, id) {
    let element = document.createElement(el);

    if (content) {
      element.textContent = content;
    }

    if (className) {
      element.classList.add(className);
    }

    if (id) {
      element.setAttribute("id", id);
    }

    return element;
  }
}
solve();
