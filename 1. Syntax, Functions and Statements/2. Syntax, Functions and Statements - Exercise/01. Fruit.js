function calculating (fruit, weight, money) {

    let weightInKg = weight / 1000;
    let allPrice = weightInKg * money;
    console.log(`I need $${allPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);

}
calculating ('orange', 2500, 1.80);
console.log('----------');
calculating ('apple', 1563, 2.35);