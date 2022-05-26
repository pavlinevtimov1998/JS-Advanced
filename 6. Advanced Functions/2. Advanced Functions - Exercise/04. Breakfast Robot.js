function solution() {
  const supplies = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

  const recipes = {
    apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
    lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
    burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    cooking(recipe, qnt) {
      let usedSupplie = {};

      for (let value in this[recipe]) {
        if (supplies[value] < this[recipe][value] * qnt) {
          return `Error: not enough ${value} in stock`;
        }

        usedSupplie[value] = supplies[value] - this[recipe][value] * qnt;
      }

      Object.assign(supplies, usedSupplie);
      return `Success`;
    },
  };

  return function controller(string) {
    if (string.includes("restock")) {
      let [_, microelement, qnt] = string.split(" ");
      qnt = Number(qnt);
      supplies[microelement] += qnt;
      return "Success";
    }

    if (string.includes("prepare")) {
      let [_, recipe, qnt] = string.split(" ");
      return recipes.cooking(recipe, Number(qnt));
    }

    return `protein=${supplies.protein} carbohydrate=${supplies.carbohydrate} fat=${supplies.fat} flavour=${supplies.flavour}`;
  };
}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
