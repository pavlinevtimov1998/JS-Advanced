function extract(array) {
  let result = [array.shift()];

  for (const el of array) {
    if (el >= result[result.length - 1]) {
      result.push(el);
    }
  }

  return result;
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log("----------");
extract([1, 2, 3, 4]);
console.log("----------");
extract([20, 3, 2, 15, 6, 1]);
