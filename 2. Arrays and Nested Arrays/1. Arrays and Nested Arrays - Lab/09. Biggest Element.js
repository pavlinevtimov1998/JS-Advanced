function biggestElement(array) {
  let biggest = array[0][0];

  for (let i = 0; i < array.length; i++) {
    let arr = array[i];
    for (let numb of arr) {
      if (numb > biggest) {
        biggest = numb;
      }
    }
  }

  return biggest;
}
biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
console.log("---------");
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
