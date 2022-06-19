function solve() {
  const author = document.getElementById("creator");
  const title = document.getElementById("title");
  const category = document.getElementById("category");
  const content = document.getElementById("content");

  document.querySelector(".create").addEventListener("click", (e) => {
    e.preventDefault();

    const mainSection = document.querySelector("main section");
    const article = createElement("article");
    const h1 = createElement("h1", title.value);
    const pCategory = createElement("p", "Category:");
    const strong = createElement("strong", category.value);
    const pCreator = createElement("p", "Creator:");
    const strongCreator = createElement("strong", author.value);
    const pContent = createElement("p", content.textContent);

    pCategory.appendChild(strong);
    pCreator.appendChild(strongCreator);

    const divBtns = createElement("div", undefined, "buttons");

    const btnDelete = createElement("button", "Delete", "btn");
    const btnArchive = createElement("button", "Archive", "btn");
    btnDelete.classList.add("delete");
    btnArchive.classList.add("archive");

    divBtns.appendChild(btnDelete);
    divBtns.appendChild(btnArchive);

    article.appendChild(h1);
    article.appendChild(pCategory);
    article.appendChild(pCreator);
    article.appendChild(pContent);
    article.appendChild(divBtns);

    mainSection.appendChild(article);

    btnArchive.addEventListener("click", (e) => {
      e.preventDefault();

      const archiveSectionOl = document.querySelector(".archive-section ol");
      const li = createElement("li");
      li.textContent = e.target.parentNode.parentNode.children[0].textContent;

      archiveSectionOl.appendChild(li);

      let items = Array.from(archiveSectionOl.children);

      items = items
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach((el) => {
          archiveSectionOl.removeChild(el);
          archiveSectionOl.appendChild(el);
        });

      e.target.parentNode.parentNode.remove();
    });

    btnDelete.addEventListener("click", (e) => {
      e.preventDefault();

      e.target.parentNode.parentNode.remove();
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
