function lockedProfile() {
  const profiles = Array.from(document.getElementsByClassName("profile"));

  for (let el of profiles) {
    el.children[el.children.length - 1].addEventListener("click", onClick);
  }

  function onClick(event) {
    let options = event.target.parentNode.querySelectorAll(
      'input[type="radio"]'
    );

    if (options[1].checked == true && event.target.textContent == "Show more") {
      event.target.parentNode.querySelector("div").style.display = "block";

      event.target.textContent = "Hide it";
    } else if (
      options[1].checked == true &&
      event.target.textContent == "Hide it"
    ) {
      event.target.parentNode.querySelector("div").style.display = "none";

      event.target.textContent = "Show more";
    }
  }
}
