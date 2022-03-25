function diagonalAttack(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split(" ").map(Number);
  }

  let firstIndex = 0;
  let secondIndex = array.length - 1;
  let sum1 = 0;
  let sum2 = 0;

  array.forEach((element) => {
    sum1 += element[firstIndex++];
    sum2 += element[secondIndex--];
  });

  if (sum1 == sum2) {
    firstIndex = 0;
    secondIndex = array.length - 1;
    for (let i = 0; i < array.length; i++) {
      for (let p = 0; p < array.length; p++) {
        if (p !== firstIndex && p !== secondIndex) {
          array[i][p] = sum1;
        }
      }
      firstIndex++;
      secondIndex--;
    }
    print(array);
  } else {
    print(array);
  }

  function print(arr) {
    for (const el of arr) {
      console.log(el.join(" "));
    }
  }
}
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
console.log("------------");
diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
