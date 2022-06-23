window.addEventListener("load", solve);

function solve() {
  const genre = document.getElementById("genre");
  const name = document.getElementById("name");
  const author = document.getElementById("author");
  const date = document.getElementById("date");

  document.getElementById("add-btn").addEventListener("click", addSong);

  function addSong(event) {
    event.preventDefault();

    if (
      genre.value.length == 0 ||
      name.value.length == 0 ||
      author.value.length == 0 ||
      date.value.length == 0
    ) {
      return;
    }

    const allHits = document.querySelector(".all-hits-container");

    const divInfo = createElement("div", undefined, "hits-info");
    const img = createElement("img");
    img.src = "./static/img/img.png";

    const h2Genre = createElement("h2", `Genre: ${genre.value}`);
    const h2Name = createElement("h2", `Name: ${name.value}`);
    const h2Author = createElement("h2", `Author: ${author.value}`);
    const h3Date = createElement("h3", `Date: ${date.value}`);

    const saveSongBtn = createElement("button", "Save song", "save-btn");
    const likeSongBtn = createElement("button", "Like song", "like-btn");
    const deleteSongBtn = createElement("button", "Delete", "delete-btn");

    [
      img,
      h2Genre,
      h2Name,
      h2Author,
      h3Date,
      saveSongBtn,
      likeSongBtn,
      deleteSongBtn,
    ].forEach((e) => divInfo.appendChild(e));

    allHits.appendChild(divInfo);

    genre.value = "";
    name.value = "";
    author.value = "";
    date.value = "";

    likeSongBtn.addEventListener("click", (e) => {
      let totalLikes = document.querySelector(".likes p");
      let increase = totalLikes.textContent[totalLikes.textContent.length - 1];
      increase = Number(increase) + 1;
      totalLikes.textContent =
        totalLikes.textContent.substring(0, totalLikes.textContent.length - 1) +
        increase;
      e.target.disabled = true;
    });

    saveSongBtn.addEventListener("click", (e) => {
      const saved = document.querySelector(".saved-container");
      saved.appendChild(e.target.parentNode);
      e.target.parentNode.childNodes[6].remove();
      e.target.parentNode.childNodes[5].remove();
    });

    deleteSongBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
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
