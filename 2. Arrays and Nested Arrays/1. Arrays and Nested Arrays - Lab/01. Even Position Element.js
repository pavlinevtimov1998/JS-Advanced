function evenPositionElements(array) {
  let evenIndexes = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenIndexes.push(array[i]);
    }
  }
  console.log(evenIndexes.join(" "));
}
evenPositionElements(["20", "30", "40", "50", "60"]);
console.log("---------");
evenPositionElements(["5", "10"]);
