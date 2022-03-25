function spiralMatrix(n) {
  let total = n * n;
  let result = [];

  for (let i = 0; i < n; i++) {
    let rs = [];
    for (let j = 0; j < n; j++) {
      rs.push(0);
    }
    result.push(rs);
  }

  let row = 0;
  let col = 0;
  let step = 0;

  for (let i = 0; i < total; ) {
    while (row + col < n) {
      i++;
      result[row][col] = i;
      col++;
    }
    row++;
    col--;

    while (row + step < n) {
      i++;
      result[row][col] = i;
      row++;
    }
    col--;
    row--;
    while (col >= step) {
      i++;
      result[row][col] = i;
      col--;
    }
    step++;
    row--;
    col++;
    while (row >= step) {
      i++;
      result[row][col] = i;
      row--;
    }
    col++;
    row++;
  }

  result.forEach((el) => console.log(el.join(" ")));
}
spiralMatrix(5, 5);
console.log("-------------");
spiralMatrix(3, 3);
