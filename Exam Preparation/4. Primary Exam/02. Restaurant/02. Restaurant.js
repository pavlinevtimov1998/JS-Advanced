class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = budgetMoney;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    products.forEach((p) => {
      let [productName, productQuantity, productPrice] = p.split(" ");
      productPrice = Number(productPrice);
      productQuantity = Number(productQuantity);
      let isBought = false;

      if (this.budgetMoney >= productPrice) {
        isBought = true;
        if (this.stockProducts.hasOwnProperty(productName) == false) {
          this.stockProducts[productName] = productQuantity;
        } else {
          this.stockProducts[productName] += productQuantity;
        }

        this.budgetMoney -= productPrice;
      }

      if (isBought) {
        this.history.push(
          `Successfully loaded ${productQuantity} ${productName}`
        );
      } else {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    });

    return this.history.join("\n");
  }

  addToMenu(meal, needetProducts, price) {
    if (this.menu.hasOwnProperty(meal) == false) {
      this.menu[meal] = {
        products: {},
        price: price,
      };

      needetProducts.forEach((p) => {
        let [productName, productQuantity] = p.split(" ");
        productQuantity = Number(productQuantity);

        this.menu[meal].products[productName] = productQuantity;
      });
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }

    let meals = Object.keys(this.menu);

    return `Great idea! Now with the ${meal} we have ${meals.length} meal in the menu, other ideas?`;
  }

  showTheMenu() {
    let output = [];

    if (Object.keys(this.menu).length > 0) {
      for (let key in this.menu) {
        output.push(`${key} - $ ${this.menu[key].price}`);
      }
    } else {
      return "Our menu is not ready yet, please come later...";
    }

    return output.join("\n");
  }

  makeTheOrder(meal) {
    if (Object.keys(this.menu).includes(meal) == false) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    for (let key in this.menu[meal].products) {
      if (this.stockProducts.hasOwnProperty(key)) {
        if (this.stockProducts[key] - this.menu[meal].products[key] >= 0) {
          this.stockProducts[key] -= this.menu[meal].products[key];
        } else {
          return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
      } else {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      }
    }
    this.budgetMoney += this.menu[meal].price;

    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}
let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  "Yogurt 30 3",
  "Honey 50 4",
  "Strawberries 20 10",
  "Banana 5 1",
]);
kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);
console.log(kitchen.stockProducts);
console.log(kitchen.makeTheOrder("frozenYogurt"));
console.log(kitchen.menu["frozenYogurt"]);
console.log(kitchen.stockProducts);
console.log(kitchen.history);

// let kitchen = new Restaurant(1000);
// console.log(
//   kitchen.addToMenu(
//     "frozenYogurt",
//     ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
//     9.99
//   )
// );
// console.log(
//   kitchen.addToMenu(
//     "Pizza",
//     [
//       "Flour 0.5",
//       "Oil 0.2",
//       "Yeast 0.5",
//       "Salt 0.1",
//       "Sugar 0.1",
//       "Tomato sauce 0.5",
//       "Pepperoni 1",
//       "Cheese 1.5",
//     ],
//     15.55
//   )
// );
// console.log(kitchen.showTheMenu());

// let kitchen = new Restaurant(1000);
