function printEveryN(array, n) {
  let output = [];

  for (let i = 0; i < array.length; i += n) {
    output.push(array[i]);
  }
  return output;
}
printEveryN(["5", "20", "31", "4", "20"], 2);
console.log("--------");
printEveryN(["dsa", "asd", "test", "tset"], 2);
console.log("--------");
printEveryN(["1", "2", "3", "4", "5"], 6);
