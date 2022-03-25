function sumFirstAndLast(array) {
  let result;

  if (array.length > 1) {
    let first = Number(array.shift());
    let last = Number(array.pop());
    result = first + last;
  } else {
    result = array[0];
  }
  return result;
}
sumFirstAndLast();
console.log("-------");
sumFirstAndLast();
