function lastNumbers(n, k) {
  let result = [1];

  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = 1; j <= k; j++) {
      if (j > result.length) {
        break;
      }
      sum += result[result.length - j];
    }
    result.push(sum);
  }
  return result;
}
lastNumbers(6, 3);
console.log("---------");
lastNumbers(8, 2);
