function subtract() {
  document.getElementById("firstNumber").disabled = false;
  document.getElementById("secondNumber").disabled = false;

  const firstNumber = Number(document.getElementById("firstNumber").value);
  const secondNumber = Number(document.getElementById("secondNumber").value);

  let result = firstNumber - secondNumber;

  document.getElementById("result").style.display = "";
  document.getElementById("result").textContent = result;
}
