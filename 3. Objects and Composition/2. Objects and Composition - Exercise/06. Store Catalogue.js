function storeCatalogue(array) {
  let obj = {};

  for (let el of array) {
    let [product, price] = el.split(" : ");
    price = Number(price);

    obj[product] = price;
  }

  let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

  for (let i = 0; i < sorted.length; i++) {
    let [product, price] = sorted[i];
    let char = product[0];
    console.log(char);
    while (product.startsWith(char)) {
      console.log(` ${product}: ${price}`);
      i++;
      if (sorted[i] == undefined) {
        break;
      }
      product = sorted[i][0];
      price = sorted[i][1];
    }
    i--;
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
console.log("-------");
storeCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
