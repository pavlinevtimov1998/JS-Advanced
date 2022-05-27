function solve() {
  let name = document.querySelector("#container input:nth-of-type(1)");
  let hall = document.querySelector("#container input:nth-of-type(2)");
  let price = document.querySelector("#container input:nth-of-type(3)");
  let btnOnScreen = document.querySelector("#container button");

  const ulMovies = document.querySelector("#movies ul");
  const ulArchive = document.querySelector("#archive ul");

  btnOnScreen.addEventListener("click", (event) => {
    event.preventDefault();

    if (
      (name.value && hall.value && Number(price.value)) ||
      price.value === "0"
    ) {
      const li = document.createElement("li");
      const spanMovieName = document.createElement("span");
      const strongHallEl = document.createElement("strong");
      const div = document.createElement("div");
      const strongPrice = document.createElement("strong");
      const input = document.createElement("input");
      input.placeholder = "Tickets Sold";
      const btnArchive = document.createElement("button");
      btnArchive.textContent = "Archive";

      spanMovieName.textContent = name.value;
      strongHallEl.textContent = `Hall: ${hall.value}`;
      strongPrice.textContent = Number(price.value).toFixed(2);

      [strongPrice, input, btnArchive].forEach((el) => div.appendChild(el));
      [spanMovieName, strongHallEl, div].forEach((el) => li.appendChild(el));

      ulMovies.appendChild(li);

      let priceHolder = price.value;
      let nameHolder = name.value;

      name.value = "";
      hall.value = "";
      price.value = "";

      btnArchive.addEventListener("click", (event) => {
        event.preventDefault();

        if (Number(input.value) || input.value === "0") {
            
          while (li.firstChild) {
            li.removeChild(li.firstChild);
          }

          const total = document.createElement("strong");
          const span = document.createElement("span");
          span.textContent = nameHolder;
          total.textContent = `Total amount: ${(
            Number(priceHolder) * Number(input.value)
          ).toFixed(2)}`;
          const btnDelete = document.createElement("button");
          btnDelete.textContent = "Delete";

          [span, total, btnDelete].forEach((el) => li.appendChild(el));

          ulArchive.appendChild(li);

          btnDelete.addEventListener("click", (event) => {
            event.preventDefault();

            event.target.parentNode.parentNode.removeChild(
              event.target.parentNode
            );
          });
          document
            .getElementById("archive")
            .children[2].addEventListener("click", (e) => {
              e.preventDefault();

              while (ulArchive.firstChild) {
                console.log(ulArchive.querySelector("li"));
                ulArchive.removeChild(ulArchive.firstChild);
              }
            });
        }
      });
    }
  });
}
