function processOddPositions(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      result.push(array[i]);
    }
  }

  result = result
  .map((el) => el * 2)
  .reverse();

  return result;
}
processOddPositions([10, 15, 20, 25]);
console.log("---------");
processOddPositions([3, 0, 10, 4, 7, 3]);
