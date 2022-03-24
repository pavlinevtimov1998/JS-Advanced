function cookingByNumbers(startingPoint, arr1, arr2, arr3, arr4, arr5) {
  let array = [arr1, arr2, arr3, arr4, arr5];

  for (let el of array) {
    switch (el) {
      case "chop":
        startingPoint /= 2;
        console.log(startingPoint);
        break;
      case "dice":
        startingPoint = Math.sqrt(startingPoint);
        console.log(startingPoint);
        break;
      case "spice":
        startingPoint += 1;
        console.log(startingPoint);
        break;
      case "bake":
        startingPoint *= 3;
        console.log(startingPoint);
        break;
      case "fillet":
        let substract = startingPoint * 0.2;
        startingPoint -= substract;
        console.log(startingPoint);
        break;
    }
  }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
console.log("-----------");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
