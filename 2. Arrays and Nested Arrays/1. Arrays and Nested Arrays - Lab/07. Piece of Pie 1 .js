function pieceOfPie(array, stringOne, stringTwo) {
  let firstIndex = array.indexOf(stringOne);
  let secondIndex = array.indexOf(stringTwo);

  let output = array.slice(firstIndex, secondIndex + 1);

  return output;
}
pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
console.log("------");
pieceOfPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
