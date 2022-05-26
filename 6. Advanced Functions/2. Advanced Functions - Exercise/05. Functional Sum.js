function add(num) {
  let sum = 0;

  function calc(number) {
    sum += number;
    return calc;
  }

  calc.toString = () => {
      return sum
  }

  return calc(num);
}
console.log(add(1).toString());

console.log(add(1)(6)(-3).toString());
