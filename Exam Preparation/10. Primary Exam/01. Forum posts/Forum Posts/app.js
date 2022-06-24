window.addEventListener("load", solve);

function solve() {
  const [title, category] = Array.from(
    document.querySelectorAll(".newPostContent input")
  );
  const textArea = document.querySelector(".newPostContent textarea");
  const reviewList = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");

  document.getElementById("clear-btn").addEventListener("click", (e) => {
    publishedList.innerHTML = "";
  });

  document.getElementById("publish-btn").addEventListener("click", publish);

  function publish(e) {
    if (title.value == "" || category.value == "" || textArea.value == "") {
      return;
    }

    const postLi = createElement("li", undefined, "rpost");
    const article = createElement("article");
    const h4 = createElement("h4", title.value);
    const pCategory = createElement("p", `Category: ${category.value}`);
    const pContent = createElement("p", `Content: ${textArea.value}`);
    const btnEdit = createElement("button", "Edit", "action-btn");
    btnEdit.classList.add("edit");
    btnEdit.addEventListener("click", editFunc);
    const btnApprove = createElement("button", "Approve", "action-btn");
    btnApprove.classList.add("approve");
    btnApprove.addEventListener("click", approveFunc);

    [h4, pCategory, pContent].forEach((e) => article.appendChild(e));
    postLi.appendChild(article);
    postLi.appendChild(btnApprove);
    postLi.appendChild(btnEdit);

    reviewList.appendChild(postLi);

    title.value = "";
    category.value = "";
    textArea.value = "";
  }

  function editFunc(e) {
    title.value = e.target.parentNode.children[0].children[0].textContent;
    let [h, c] =
      e.target.parentNode.children[0].children[1].textContent.split(": ");
    category.value = c;
    let [_, t] =
      e.target.parentNode.children[0].children[2].textContent.split(": ");
    textArea.value = t;

    e.target.parentNode.remove();
  }

  function approveFunc(e) {
    publishedList.appendChild(e.target.parentNode);
    let btns = e.target.parentNode.querySelectorAll("button");
    btns[0].remove();
    btns[1].remove();
  }

  function createElement(el, content, className) {
    let element = document.createElement(el);

    if (content) {
      element.textContent = content;
    }

    if (className) {
      element.classList.add(className);
    }

    return element;
  }
}
