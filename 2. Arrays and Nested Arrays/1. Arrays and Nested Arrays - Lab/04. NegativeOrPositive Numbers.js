function negativeOrPositive(array) {
  let result = [];

  for (let el of array) {
    if (el > -1) {
      result.push(el);
    } else {
      result.unshift(el);
    }
  }

  console.log(result);
}
negativeOrPositive([7, -2, 8, 9]);
console.log("---------");
negativeOrPositive([3, -2, 0, -1]);
