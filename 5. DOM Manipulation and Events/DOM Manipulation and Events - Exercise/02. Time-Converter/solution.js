function attachEventsListeners() {
  const divs = document.getElementsByTagName("div");

  for (const div of divs) {
    div.children[2].addEventListener("click", onClick);
  }

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  function onClick(ev) {
    if (ev.target.id == "daysBtn") {
      let input = Number(days.value);
      hours.value = input * 24;
      minutes.value = input * 24 * 60;
      seconds.value = input * 24 * 60 * 60;
    } else if (ev.target.id == "hoursBtn") {
      let input = Number(hours.value);
      days.value = input / 24;
      minutes.value = input * 60;
      seconds.value = input * 60 * 60;
    } else if (ev.target.id == "minutesBtn") {
      let input = Number(minutes.value);
      days.value = input / 60 / 24;
      hours.value = input / 60;
      seconds.value = input * 60;
    } else if (ev.target.id == "secondsBtn") {
      let input = Number(seconds.value);
      days.value = input / 60 / 60 / 24;
      minutes.value = input / 60;
      hours.value = input / 60 / 60;
    }
  }
}
