function diagonalSums(array) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let index = 0;
  let secondIndex = array[0].length - 1;
  array.forEach((arr) => {
    firstDiagonal += arr[index++];
    secondDiagonal += arr[secondIndex--];
  });

  console.log(firstDiagonal, secondDiagonal);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
console.log("-------");
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
