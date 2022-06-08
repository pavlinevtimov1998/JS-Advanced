function autoCompany(infoArr) {
  const productionStorage = {};

  infoArr.forEach((el) => {
    let [brand, model, cars] = el.split(" | ");

    if (productionStorage.hasOwnProperty(brand) == false) {
      productionStorage[brand] = { [model]: Number(cars) };
    } else {
      if (productionStorage[brand].hasOwnProperty(model) == false) {
        productionStorage[brand][model] = Number(cars);
      } else {
        productionStorage[brand][model] += Number(cars);
      }
    }
  });

  for (let key in productionStorage) {
    console.log(key);
    for (let model in productionStorage[key]) {
      console.log(`###${model} -> ${productionStorage[key][model]}`);
    }
  }
}
autoCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
