function smallestTwoNumbers(array) {
  let smallest = array
  .sort((a, b) => a - b)
  .splice(0, 2)
  .join(" ")

  console.log(smallest);
}
smallestTwoNumbers([30, 15, 50, 5]);
console.log("-----------");
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
