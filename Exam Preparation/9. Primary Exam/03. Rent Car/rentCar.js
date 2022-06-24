const rentCar = {
  searchCar(shop, model) {
    let findModel = [];
    if (Array.isArray(shop) && typeof model == "string") {
      for (let i = 0; i < shop.length; i++) {
        if (model == shop[i]) {
          findModel.push(shop[i]);
        }
      }
      if (findModel.length !== 0) {
        return `There is ${findModel.length} car of model ${model} in the catalog!`;
      } else {
        throw new Error("There are no such models in the catalog!");
      }
    } else {
      throw new Error("Invalid input!");
    }
  },
  calculatePriceOfCar(model, days) {
    let catalogue = {
      Volkswagen: 20,
      Audi: 36,
      Toyota: 40,
      BMW: 45,
      Mercedes: 50,
    };

    if (typeof model == "string" && Number.isInteger(days)) {
      if (catalogue.hasOwnProperty(model)) {
        let cost = catalogue[model] * days;
        return `You choose ${model} and it will cost $${cost}!`;
      } else {
        throw new Error("No such model in the catalog!");
      }
    } else {
      throw new Error("Invalid input!");
    }
  },
  checkBudget(costPerDay, days, budget) {
    if (
      !Number.isInteger(costPerDay) ||
      !Number.isInteger(days) ||
      !Number.isInteger(budget)
    ) {
      throw new Error("Invalid input!");
    } else {
      let cost = costPerDay * days;
      if (cost <= budget) {
        return `You rent a car!`;
      } else {
        return "You need a bigger budget!";
      }
    }
  },
};

const { assert } = require("chai");

describe("rentCar testing", function () {
  describe("Testing searchCar functionality", function () {
    it("Should throw error if shop parameter is not array", function () {
      assert.throw(
        () => rentCar.searchCar({}, "testing"),
        Error,
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.searchCar(1, "testing"),
        Error,
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.searchCar("", "testing"),
        Error,
        "Invalid input!"
      );
    });
    it("Should throw error if model parameter is not string", function () {
      assert.throw(() => rentCar.searchCar([], {}), Error, "Invalid input!");
      assert.throw(() => rentCar.searchCar([], null), Error, "Invalid input!");
      assert.throw(
        () => rentCar.searchCar([], undefined),
        Error,
        "Invalid input!"
      );
      assert.throw(() => rentCar.searchCar([], 1), Error, "Invalid input!");
      assert.throw(() => rentCar.searchCar({}, []), Error, "Invalid input!");
    });
    it("Should throw error if there are no matching elements", function () {
      assert.throw(
        () => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "lada"),
        Error,
        "There are no such models in the catalog!"
      );
      assert.throw(
        () => rentCar.searchCar([], "lada"),
        Error,
        "There are no such models in the catalog!"
      );
    });
    it("Should return successfull message if there are matching elements", function () {
      assert.equal(
        rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Volkswagen"),
        `There is ${1} car of model ${"Volkswagen"} in the catalog!`
      );
      assert.equal(
        rentCar.searchCar(["Volkswagen", "Audi", "Audi"], "Audi"),
        `There is ${2} car of model ${"Audi"} in the catalog!`
      );
    });
  });
  describe("Testing calculatePriceOfCar functionality", function () {
    it("should throw error if model is not a string", () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar(1, 1),
        Error,
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar(undefined, 1),
        Error,
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar({}, 1),
        Error,
        "Invalid input!"
      );
    });
    it("should throw error if days parameter is not integer number", () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar("", -1.5),
        Error,
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar("", 10.5),
        Error,
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar("", 0.5),
        Error,
        "Invalid input!"
      );
    });
    it("should throw error if model is not in the catalogue", () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar("", 1),
        Error,
        "No such model in the catalog!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar("lada", 1),
        Error,
        "No such model in the catalog!"
      );
      assert.throw(
        () => rentCar.calculatePriceOfCar("fiat", 1),
        Error,
        "No such model in the catalog!"
      );
    });
    it("should return successfull message", () => {
      assert.equal(
        rentCar.calculatePriceOfCar("Volkswagen", 1),
        `You choose ${"Volkswagen"} and it will cost $${20}!`
      );
      assert.equal(
        rentCar.calculatePriceOfCar("BMW", 0),
        `You choose ${"BMW"} and it will cost $${0}!`
      );
      assert.equal(
        rentCar.calculatePriceOfCar("Audi", 10),
        `You choose ${"Audi"} and it will cost $${360}!`
      );
    });
  });
  describe("Testing calculatePriceOfCar functionality", function () {
    it("should throw error if one of the inputs is not integer number", () => {
      assert.throw(
        () => rentCar.checkBudget(1, 1.5, 2),
        Error,
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.checkBudget(0.5, 1, 2),
        Error,
        "Invalid input!"
      );
      assert.throw(
        () => rentCar.checkBudget(5, 1, 2.2),
        Error,
        "Invalid input!"
      );
    });
    it("should return message if the budget is bigger or equal to the cost", () => {
      assert.equal(rentCar.checkBudget(20, 10, 200), `You rent a car!`);
      assert.equal(rentCar.checkBudget(0, 1, 1000), `You rent a car!`);
      assert.equal(rentCar.checkBudget(20, 0, 200), `You rent a car!`);
    });
    it("should return message if the budget is lower to the cost", () => {
      assert.equal(
        rentCar.checkBudget(20, 10, 199),
        "You need a bigger budget!"
      );
      assert.equal(rentCar.checkBudget(0, 1, -1), "You need a bigger budget!");
      assert.equal(rentCar.checkBudget(20, 20, 0), "You need a bigger budget!");
    });
  });
});
