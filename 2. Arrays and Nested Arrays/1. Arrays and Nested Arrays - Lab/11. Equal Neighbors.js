function equalNeighbors(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let array = arr[i];
    for (let j = 0; j < array.length; j++) {
      let element = array[j];
      if (i !== arr.length - 1) {
        if (element === array[j + 1]) {
          count++;
        }
        if (element === arr[i + 1][j]) {
          count++;
        }
      } else if (element === array[j + 1]) {
        count++;
      }
    }
  }

  console.log(count);
}
equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
console.log("------------");
equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
