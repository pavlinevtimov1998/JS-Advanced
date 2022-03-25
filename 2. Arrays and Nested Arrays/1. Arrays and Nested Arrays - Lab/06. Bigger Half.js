function biggerHalf(array) {
  let result = array
  .sort((a, b) => a - b)
  .splice(Math.floor(array.length / 2));
  return result;
}
biggerHalf([4, 7, 2, 5]);
console.log("---------");
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
