class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    let successfullyAdded = new Set();

    vegetables.forEach((element) => {
      let [type, quantity, price] = element.split(" ");
      price = Number(price);
      quantity = Number(quantity);

      if (this.availableProducts.find((t) => t.type === type) !== undefined) {
        if (price > this.availableProducts.find((t) => t.type === type).price) {
          this.availableProducts.find((t) => t.type === type).price = price;
        }
        this.availableProducts.find((t) => t.type === type).quantity +=
          quantity;
      } else {
        this.availableProducts.push({ type, quantity, price });
      }
      successfullyAdded.add(type);
    });

    return `Successfully added ${[...successfullyAdded].join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    selectedProducts.forEach((e) => {
      let [type, quantity] = e.split(" ");
      quantity = Number(quantity);

      if (this.availableProducts.find((t) => t.type === type) == undefined) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      if (
        this.availableProducts.find((t) => t.type === type).quantity < quantity
      ) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      totalPrice +=
        this.availableProducts.find((t) => t.type === type).price * quantity;
      this.availableProducts.find((t) => t.type === type).quantity -= quantity;
    });

    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    if (this.availableProducts.find((t) => t.type === type) == undefined) {
      throw new Error(`${type} is not available in the store.`);
    }

    if (
      this.availableProducts.find((t) => t.type === type).quantity < quantity
    ) {
      this.availableProducts.find((t) => t.type === type).quantity = 0;

      return `The entire quantity of the ${type} has been removed.`;
    }

    this.availableProducts.find((t) => t.type === type).quantity -= quantity;

    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    let result = [];
    result.push("Available vegetables:");

    let sorted = this.availableProducts.sort((a, b) => a.price - b.price);

    for (let veg of sorted) {
      result.push(`${veg.type}-${veg.quantity}-$${veg.price}`);
    }

    result.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );

    return result.join("\n");
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);

console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
