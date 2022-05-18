function solve() {
  const tableBody = Array.from(document.querySelectorAll("tbody tr"));
  const btns = Array.from(document.querySelectorAll("tfoot button"));

  let isWin = false;

  btns[0].addEventListener("click", quickCheck);
  btns[1].addEventListener("click", clear);

  const table = document.getElementById("exercise").children[0];
  const p = document.getElementById("check").children[0];

  function quickCheck(event) {
    if (valueChecking(tableBody)) {
      let arr = [];

      for (let i = 0; i < tableBody.length; i++) {
        arr.push(Array.from(tableBody[i].querySelectorAll("input")));
      }

      for (let i = 0; i < arr.length; i++) {
        let row = arr[i];

        for (let j = 0; j < row.length; j++) {
          if (j < 2 && i !== 2) {
            if (
              row[j].value !== row[j + 1].value &&
              row[j].value !== arr[i + 1][j].value
            ) {
              isWin = true;
            } else {
              isWin = false;
              break;
            }
          } else if (i < 2 && j == 3) {
            if (
              row[0].value !== row[j].value &&
              row[j].value !== arr[i + 1][j].value
            ) {
              isWin = true;
            } else {
              isWin = false;
              break;
            }
          } else {
            if (j !== 2) {
              if (row[j].value !== row[j + 1].value) {
                isWin = true;
              } else {
                isWin = false;
                break;
              }
            } else {
              if (row[0].value !== row[j].value) {
                isWin = true;
              } else {
                isWin = false;
                break;
              }
            }
          }
        }

        if (!isWin) {
          break;
        }
      }
    }

    const table = document.getElementById("exercise").children[0];
    const p = document.getElementById("check").children[0];

    if (isWin) {
      table.style.border = "2px solid green";
      p.textContent = "You solve it! Congratulations!";
      p.style.color = "green";
    } else {
      table.style.border = "2px solid red";
      p.textContent = "NOP! You are not done yet...";
      p.style.color = "red";
    }
  }

  function clear(event) {
    table.style.border = "none";
    Array.from(document.querySelectorAll("tbody td input")).forEach(
      (el) => (el.value = "")
    );
    p.textContent = "";
  }

  function valueChecking(arr) {
    let isCorrect = false;

    for (let i = 0; i < arr.length; i++) {
      const row = arr[i].children;
      for (let j = 0; j < row.length; j++) {
        let num;
        if (row[j].children[0].value !== "") {
          num = row[j].children[0].value;
        } else {
          isCorrect = false;
          return isCorrect;
        }
        if (num > 0 && num <= 3 && num !== "") {
          isCorrect = true;
        } else {
          isCorrect = false;
          return isCorrect;
        }
      }
    }
    return isCorrect;
  }
}
