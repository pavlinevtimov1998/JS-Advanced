function orbit(array) {
  let rows = array[0];
  let cols = array[1];
  let starRows = array[2];
  let starCols = array[3];

  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let arr = [];
    matrix.push(arr);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      matrix[row][col] =
        Math.max(Math.abs(row - starRows), Math.abs(col - starCols)) + 1;
    }
  }

  matrix.forEach((el) => console.log(el.join(" ")));
}
orbit([4, 4, 0, 0]);
console.log("----------");
orbit([5, 5, 2, 2]);
