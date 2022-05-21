function solve() {
  const sections = Array.from(document.querySelectorAll("section"));

  sections.forEach((el) =>
    Array.from(el.querySelectorAll(".answer-text")).forEach((a) =>
      a.addEventListener("click", onClick)
    )
  );

  let rightAnswersCout = 0;
  let questionsCount = 0;

  function onClick(event) {
    let target = event.target;

    if (
      target.textContent == "onclick" ||
      target.textContent == "JSON.stringify()" ||
      target.textContent == "A programming API for HTML and XML documents"
    ) {
      rightAnswersCout++;
    }

    for (let i = 0; i < sections.length; i++) {
      if (sections[i].style.display == "block") {
        sections[i].style.display = "";
      }
      if (sections[i].style.display == "") {
        sections[i].style.display = "none";
        if (i + 1 < sections.length) {
          sections[i + 1].style.display = "block";
        }
        break;
      }
    }

    questionsCount++;

    if (questionsCount == sections.length) {
      if (rightAnswersCout == 3) {
        let result = document.getElementById("results");
        result.style.display = "block";
        result.children[0].children[0].textContent =
          "You are recognized as top JavaScript fan!";
      } else {
        let result = document.getElementById("results");
        result.style.display = "block";
        result.children[0].children[0].textContent = `You have ${rightAnswersCout} right answers`;
      }
    }
  }
}
