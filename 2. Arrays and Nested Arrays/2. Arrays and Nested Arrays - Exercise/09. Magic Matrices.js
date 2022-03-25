function magicMatrices(array) {
  let isMagic = true;
  let sums = [];

  for (let row = 0; row < array.length; row++) {
    let sum1 = array[row].reduce((a, b) => a + b);
    let sum2 = 0;
    for (let col = 0; col < array.length; col++) {
      sum2 += array[col][row];
    }

    if (sum1 !== sum2) {
      isMagic = false;
      break;
    }
    sums.push(sum1);
    for (let el of sums) {
      if (el !== sum2) {
        isMagic = false;
        break;
      }
    }
    if (!isMagic) {
      break;
    }
  }
  console.log(isMagic);
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
console.log("---------");
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
console.log("---------");
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
