function addAndRemove(array) {
  let output = [];
  let count = 1;
  for (const el of array) {
    if (el === "add") {
      output.push(count);
    } else {
      output.pop();
    }
    count++;
  }
  if (output.length > 0) {
    output.forEach((el) => console.log(el));
  } else {
    console.log("Empty");
  }
}
addAndRemove(["add", "add", "add", "add"]);
console.log("----------");
addAndRemove(["add", "add", "remove", "add", "add"]);
console.log("----------");
addAndRemove(["remove", "remove", "remove"]);
