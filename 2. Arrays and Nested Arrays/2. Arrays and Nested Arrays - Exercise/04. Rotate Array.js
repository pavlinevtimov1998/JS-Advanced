function rotateArray(array, number) {
  for (let i = 0; i < number; i++) {
    array.unshift(array.pop());
  }
  console.log(array.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
console.log("------------");
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
