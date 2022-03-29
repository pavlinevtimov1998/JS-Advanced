function jansNotation(array) {
  let operants = {
    "+": (numb1, numb2) => {
      return numb1 + numb2;
    },
    "-": (numb1, numb2) => {
      return numb1 - numb2;
    },
    "*": (numb1, numb2) => {
      return numb1 * numb2;
    },
    "/": (numb1, numb2) => {
      return numb1 / numb2;
    },
  };

  let numbArray = [];

  for (let el of array) {
    if (typeof el == "number") {
      numbArray.push(el);
    } else if (typeof el == "string") {
      if (numbArray.length > 1) {
        let numb1 = numbArray.pop();
        let numb2 = numbArray.pop();
        let result = operants[el](numb2, numb1);
        numbArray.push(result);
      } else {
        return "Error: not enough operands!";
      }
    }
  }

  console.log(
    numbArray.length > 1 ? "Error: too many operands!" : numbArray[0]
  );
}
jansNotation([3, 4, "+"]);
console.log("---------");
jansNotation([5, 3, 4, "*", "-"]);
console.log("---------");
jansNotation([7, 33, 8, "-"]);
console.log("---------");
jansNotation([15, "/"]);
