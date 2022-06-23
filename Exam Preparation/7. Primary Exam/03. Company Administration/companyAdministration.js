const companyAdministration = {
  hiringEmployee(name, position, yearsExperience) {
    if (position == "Programmer") {
      if (yearsExperience >= 3) {
        return `${name} was successfully hired for the position ${position}.`;
      } else {
        return `${name} is not approved for this position.`;
      }
    }
    throw new Error(`We are not looking for workers for this position.`);
  },
  calculateSalary(hours) {
    let payPerHour = 15;
    let totalAmount = payPerHour * hours;

    if (typeof hours !== "number" || hours < 0) {
      throw new Error("Invalid hours");
    } else if (hours > 160) {
      totalAmount += 1000;
    }
    return totalAmount;
  },
  firedEmployee(employees, index) {
    let result = [];

    if (
      !Array.isArray(employees) ||
      !Number.isInteger(index) ||
      index < 0 ||
      index >= employees.length
    ) {
      throw new Error("Invalid input");
    }
    for (let i = 0; i < employees.length; i++) {
      if (i !== index) {
        result.push(employees[i]);
      }
    }
    return result.join(", ");
  },
};

const { assert } = require("chai");

describe("companyAdministration testing", function () {
  describe("hiringEmployee functionality", function () {
    it("should throw error if the position is not 'Programmer'", function () {
      assert.throw(
        () =>
          companyAdministration.hiringEmployee(
            "Pavlin",
            "Sistem Administrator",
            3
          ),
        Error,
        `We are not looking for workers for this position.`
      );
      assert.throw(
        () =>
          companyAdministration.hiringEmployee(
            "Pesho",
            "Marketing Director",
            3
          ),
        Error,
        `We are not looking for workers for this position.`
      );
      assert.throw(
        () => companyAdministration.hiringEmployee("Pesho", "programmer", 3),
        Error,
        `We are not looking for workers for this position.`
      );
    });
    it("should return successfull message if the years is greater or equal to 3", function () {
      assert.equal(
        companyAdministration.hiringEmployee("Pavlin", "Programmer", 3),
        `Pavlin was successfully hired for the position Programmer.`
      );
      assert.equal(
        companyAdministration.hiringEmployee("Pesho", "Programmer", 4),
        `Pesho was successfully hired for the position Programmer.`
      );
    });
    it("should return unsuccessfull message if the years are lower than 3", function () {
      assert.equal(
        companyAdministration.hiringEmployee("Pavlin", "Programmer", 2),
        `Pavlin is not approved for this position.`
      );
      assert.equal(
        companyAdministration.hiringEmployee("Pesho", "Programmer", 0),
        `Pesho is not approved for this position.`
      );
    });
  });
  describe("calculateSalary functionality", function () {
    it("should throw error if the hours are not a number or the number is negative", function () {
      assert.throw(
        () => companyAdministration.calculateSalary("3"),
        Error,
        "Invalid hours"
      );
      assert.throw(
        () => companyAdministration.calculateSalary(-1),
        Error,
        "Invalid hours"
      );
      assert.throw(
        () => companyAdministration.calculateSalary(undefined),
        Error,
        "Invalid hours"
      );
    });
    it("should return calculated sum of number of hours and salary per hour", function () {
      let perHour = 15;
      assert.equal(companyAdministration.calculateSalary(5), 5 * perHour);
      assert.equal(companyAdministration.calculateSalary(0), 0 * perHour);
      assert.equal(companyAdministration.calculateSalary(160), 160 * perHour);
    });
    it("should return calculated sum + bonus if hours are more than 160", function () {
      let perHour = 15;
      let bonus = 1000;
      assert.equal(
        companyAdministration.calculateSalary(161),
        161 * perHour + bonus
      );
      assert.equal(
        companyAdministration.calculateSalary(200),
        200 * perHour + bonus
      );
      assert.equal(
        companyAdministration.calculateSalary(1000),
        1000 * perHour + bonus
      );
    });
  });

  describe("firedEmployee functionality", function () {
    it("should throw error if the array is not array", function () {
      assert.throw(
        () => companyAdministration.firedEmployee({}, 0),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => companyAdministration.firedEmployee("peter", 0),
        Error,
        "Invalid input"
      );
    });
    it("should throw error if the number is not integer and is not in the range of the array", function () {
      assert.throw(
        () =>
          companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1),
        Error,
        "Invalid input"
      );
      assert.throw(
        () =>
          companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3),
        Error,
        "Invalid input"
      );
      assert.throw(
        () =>
          companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0.5),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => companyAdministration.firedEmployee([], 0),
        Error,
        "Invalid input"
      );
    });
    it("should return new array without the element at the given index", function () {
      assert.equal(
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0),
        ["Ivan", "George"].join(", ")
      );
      assert.equal(
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2),
        ["Petar", "Ivan"].join(", ")
      );
      assert.equal(
        companyAdministration.firedEmployee(["Petar"], 0),
        [].join(", ")
      );
    });
  });
});
