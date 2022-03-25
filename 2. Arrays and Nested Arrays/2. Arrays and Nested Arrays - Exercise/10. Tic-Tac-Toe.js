function ticTac(array) {
  let initialStateDashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let player = "X";

  for (let el of array) {
    let [row, col] = el.split(" ").map(Number);

    if (initialStateDashboard[row][col] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    initialStateDashboard[row][col] = player;

    // chacking horizontal and vertical;
    for (let i = 0; i < initialStateDashboard.length; i++) {
      if (
        initialStateDashboard[i][0] == player &&
        initialStateDashboard[i][1] == player &&
        initialStateDashboard[i][2] == player
      ) {
        console.log(`Player ${player} wins!`);
        print(initialStateDashboard);
        return;
      } else if (
        initialStateDashboard[0][i] == player &&
        initialStateDashboard[1][i] == player &&
        initialStateDashboard[2][i] == player
      ) {
        console.log(`Player ${player} wins!`);
        print(initialStateDashboard);
        return;
      }
    }
    //diagonal check
    if (
      initialStateDashboard[0][0] == player &&
      initialStateDashboard[1][1] == player &&
      initialStateDashboard[2][2] == player
    ) {
      console.log(`Player ${player} wins!`);
      print(initialStateDashboard);
      return;
    } else if (
      initialStateDashboard[0][2] == player &&
      initialStateDashboard[1][1] == player &&
      initialStateDashboard[2][0] == player
    ) {
      console.log(`Player ${player} wins!`);
      print(initialStateDashboard);
      return;
    }

    let isThereMoreFalse = false;

    for (let el of initialStateDashboard) {
      if (el.includes(false)) {
        isThereMoreFalse = true;
        break;
      }
    }

    if (!isThereMoreFalse) {
      console.log("The game ended! Nobody wins :(");
      print(initialStateDashboard);
      break;
    }

    player = player == "X" ? "O" : "X";
  }

  function print(arr) {
    for (const el of arr) {
      console.log(el.join("\t"));
    }
  }
}
ticTac(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
console.log("---------");
ticTac(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
