function subSum(array, start, end) {
  if (!Array.isArray(array)) {
    return NaN;
  }

  let startIndex = Math.max(0, start);
  let endIndex = Math.min(array.length - 1, end);

  return array
    .slice(startIndex, endIndex + 1)
    .map(Number)
    .reduce((acc, n) => acc + n, 0);
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
