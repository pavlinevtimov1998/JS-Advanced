class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (
      model == "" ||
      !Number.isInteger(horsepower) ||
      horsepower < 0 ||
      price < 0 ||
      mileage < 0
    ) {
      throw new Error("Invalid input!");
    }

    const car = {
      model,
      horsepower,
      price,
      mileage,
    };

    this.availableCars.push(car);

    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    const car = this.availableCars.find((c) => c.model == model);
    let price;

    if (car == undefined) {
      throw new Error(`${model} was not found!`);
    }

    if (car.mileage <= desiredMileage) {
      price = car.price;
    } else if (car.mileage - desiredMileage <= 40000) {
      price = car.price - car.price * 0.05;
    } else if (car.mileage - desiredMileage > 40000) {
      price = car.price - car.price * 0.1;
    }

    price = Number(price.toFixed(2));

    let selled = {
      model: car.model,
      horsepower: car.horsepower,
      soldPrice: price,
    };

    let index = this.availableCars.indexOf(car);
    this.availableCars.splice(index, 1);
    this.soldCars.push(selled);

    this.totalIncome += price;

    return `${model} was sold for ${price.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length == 0) {
      return "There are no available cars";
    }

    let result = [];
    result.push("-Available cars:");

    this.availableCars.forEach((c) => {
      result.push(
        `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(
          2
        )} km - ${c.price.toFixed(2)}$`
      );
    });

    return result.join("\n");
  }

  salesReport(criteria) {
    let sorted;
    let result = [];
    result.push(
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`
    );
    result.push(`-${this.soldCars.length} cars sold:`);

    if (criteria == "horsepower") {
      sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
      sorted.forEach((c) => {
        result.push(
          `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`
        );
      });
    } else if (criteria == "model") {
      sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
      sorted.forEach((c) => {
        result.push(
          `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`
        );
      });
    } else {
      throw new Error("Invalid criteria!");
    }

    return result.join("\n");
  }
}

let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("model"));

// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.currentCar());

// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.sellCar("Toyota Corolla", 230000));
// console.log(dealership.sellCar("Mercedes C63", 110000));

// let dealership = new CarDealership("SoftAuto");
// console.log(dealership.addCar("Toyota Corolla", 100, 3500, 190000));
// console.log(dealership.addCar("Mercedes C63", 300, 29000, 187000));
// console.log(dealership.addCar("", 120, 4900, 240000));
