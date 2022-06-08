function juiceFlavors(juiceArr) {
  const juiceStorage = {};
  const output = {};

  juiceArr.forEach((el) => {
    let [juice, qnt] = el.split(" => ");

    if (juiceStorage.hasOwnProperty(juice) == false) {
      juiceStorage[juice] = { quantity: Number(qnt), bottles: 0 };
    } else {
      juiceStorage[juice]["quantity"] += Number(qnt);
    }

    if (juiceStorage[juice]["quantity"] >= 1000) {
      bottlesCounting(juiceStorage, juice);
      output[juice] = juiceStorage[juice]["bottles"];
    }
  });

  for (let key in output) {
    console.log(`${key} => ${output[key]}`);
  }

  function bottlesCounting(obj, juice) {
    while (obj[juice]["quantity"] >= 1000) {
      obj[juice]["quantity"] -= 1000;
      obj[juice]["bottles"]++;
    }
  }
}
juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
