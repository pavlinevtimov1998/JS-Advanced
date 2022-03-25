function sortArray(array) {
  let result = array.sort((a, b) => {
    if (a.length - b.length !== 0) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });

  result.forEach((element) => console.log(element));
}
sortArray(["alpha", "beta", "gamma"]);
console.log("-------");
sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("------");
sortArray(["test", "Deny", "omen", "Default"]);
