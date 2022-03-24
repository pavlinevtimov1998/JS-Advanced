function mathOperations(numbOne, numbTwo, operator) {
  let result;

  switch (operator) {
    case "+":
      result = numbOne + numbTwo;
      break;
    case "-":
      result = numbOne - numbTwo;
      break;
    case "*":
      result = numbOne * numbTwo;
      break;
    case "/":
      result = numbOne / numbTwo;
      break;
    case "%":
      result = numbOne % numbTwo;
      break;
    case "**":
      result = numbOne ** numbTwo;
      break;
  }
  console.log(result);
}
mathOperations(5, 6, "+");
console.log("-----------");
mathOperations(3, 5.5, "*");
