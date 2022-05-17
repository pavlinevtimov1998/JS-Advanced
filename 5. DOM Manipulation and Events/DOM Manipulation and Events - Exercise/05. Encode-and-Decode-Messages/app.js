function encodeAndDecodeMessages() {
  const main = document.getElementById("main").children;

  main[0].querySelector("button").addEventListener("click", encoding);
  main[1].querySelector("button").addEventListener("click", decoding);

  const received = main[1].querySelector("textarea");

  function encoding(event) {
    let message = event.target.parentNode.querySelector("textarea");

    if (message.value !== "") {
      let arr = message.value.split("");

      for (let i = 0; i < arr.length; i++) {
        let charCode = arr[i].charCodeAt(0);
        charCode += 1;
        arr[i] = String.fromCharCode(charCode);
      }

      message.value = arr.join("");
      received.value = message.value;
      message.value = "";
    }
  }

  function decoding(event) {
    if (received.value !== "") {
      let arr = received.value.split("");

      for (let i = 0; i < arr.length; i++) {
        let charCode = arr[i].charCodeAt(0);
        charCode -= 1;
        arr[i] = String.fromCharCode(charCode);
      }

      received.value = arr.join("");
    }
  }
}
