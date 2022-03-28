function lowerPrices(array) {
  let obj = {};

  for (let el of array) {
    let [townName, productName, price] = el.split(" | ");
    price = Number(price);

    if (obj.hasOwnProperty(productName) == false) {
      obj[productName] = { town: townName, price: price };
    } else if (obj[productName]["price"] > price) {
      obj[productName] = { town: townName, price: price };
    }
  }

  for (let key in obj) {
    console.log(`${key} -> ${obj[key]["price"]} (${obj[key]["town"]})`);
  }
}
lowerPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
