function calculator() {
  let numOne;
  let numTwo;
  let result;

  const init = (selectorOne, selectorTwo, selectorThree) => {
    numOne = document.querySelector(selectorOne);
    numTwo = document.querySelector(selectorTwo);
    result = document.querySelector(selectorThree);
  };

  const add = () => {
    result.value = Number(numOne.value) + Number(numTwo.value);
  };

  const subtract = () => {
    result.value = Number(numOne.value) - Number(numTwo.value);
  };

  return {
    init,
    add,
    subtract,
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
