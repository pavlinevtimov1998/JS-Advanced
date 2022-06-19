function solve() {
  function createElement(tagName, text, className) {
    let el = document.createElement(tagName);

    if (text) {
      el.textContent = text;
    }

    if (className) {
      el.classList.add(className);
    }

    return el;
  }

  document.getElementById("add").addEventListener("click", (e) => {
    e.preventDefault();

    const task = document.getElementById("task");
    const description = document.getElementById("description");
    const date = document.getElementById("date");

    if (
      task.value.length > 0 &&
      description.value.length > 0 &&
      date.value.length > 0
    ) {
      const openSection = document.querySelectorAll("section")[1].children[1];
      const article = createElement("article");
      const h3 = createElement("h3", task.value);
      const pDesc = createElement("p", `Description: ${description.value}`);
      const pDate = createElement("p", `Due Date: ${date.value}`);
      const div = createElement("div", undefined, "flex");

      const buttonGreen = createElement("button", "Start", "green");
      const buttonRed = createElement("button", "Delete", "red");

      div.appendChild(buttonGreen);
      div.appendChild(buttonRed);

      article.appendChild(h3);
      article.appendChild(pDesc);
      article.appendChild(pDate);
      article.appendChild(div);

      openSection.appendChild(article);

      task.value = "";
      description.value = "";
      date.value = "";

      buttonGreen.addEventListener("click", (e) => {
        e.preventDefault();

        const inProgress = document.getElementById("in-progress");

        let [btnDelete, btnFinish] =
          e.target.parentNode.querySelectorAll("button");
        btnDelete.textContent = "Delete";
        btnDelete.classList.remove("green");
        btnDelete.classList.add("red");
        btnFinish.textContent = "Finish";
        btnFinish.classList.remove("red");
        btnFinish.classList.add("orange");

        inProgress.appendChild(e.target.parentNode.parentNode);

        btnFinish.addEventListener("click", (e) => {
          e.preventDefault();

          const complete = document.querySelectorAll("section")[3].children[1];

          complete.appendChild(e.target.parentNode.parentNode);

          e.target.parentNode.remove();
        });

        btnDelete.addEventListener("click", (e) => {
          e.preventDefault();

          e.target.parentNode.parentNode.remove();
        });
      });

      buttonRed.addEventListener("click", (e) => {
        e.preventDefault();

        e.target.parentNode.parentNode.remove();
      });
    }
  });
}
