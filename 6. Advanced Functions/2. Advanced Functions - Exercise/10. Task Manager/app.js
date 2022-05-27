function solve() {
  const articlesArray = document.querySelectorAll("section");
  const [_, open, inProgress, complete] = articlesArray;

  const [task, date] = document.querySelectorAll("section input");
  const description = document.querySelector("section textarea");

  function createElement(element, value, className) {
    let result = document.createElement(element);

    if (value) {
      result.textContent = value;
    }

    if (className) {
      result.classList.add(className);
    }

    return result;
  }

  document.getElementById("add").addEventListener("click", (event) => {
    event.preventDefault();

    if (task.value == "" || description.value == "" || date.value == "") {
      return;
    }

    let article = createElement("article");
    let h3 = createElement("h3", task.value);
    let pDescription = createElement("p", `Description: ${description.value}`);
    let pDate = createElement("p", `Due Date: ${date.value}`);
    let flexDiv = createElement("div", undefined, "flex");
    let greenBtn = createElement("button", "Start", "green");
    let redBtn = createElement("button", "Delete", "red");

    flexDiv.appendChild(greenBtn);
    flexDiv.appendChild(redBtn);

    article.appendChild(h3);
    article.appendChild(pDescription);
    article.appendChild(pDate);
    article.appendChild(flexDiv);

    open.children[1].appendChild(article);

    task.value = "";
    description.value = "";
    date.value = "";

    redBtn.addEventListener("click", (e) => {
      article.remove();
    });

    greenBtn.addEventListener("click", (e) => {
      flexDiv.querySelector(".green").remove();
      let orangeBtn = createElement("button", "Finish", "orange");
      flexDiv.appendChild(orangeBtn);
      inProgress.children[1].appendChild(article);

      orangeBtn.addEventListener("click", (e) => {
        complete.children[1].appendChild(article);

        flexDiv.remove();
      });
    });
  });
}
