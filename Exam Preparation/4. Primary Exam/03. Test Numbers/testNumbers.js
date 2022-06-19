const testNumbers = {
  sumNumbers: function (num1, num2) {
    let sum = 0;

    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    } else {
      sum = (num1 + num2).toFixed(2);
      return sum;
    }
  },
  numberChecker: function (input) {
    input = Number(input);

    if (isNaN(input)) {
      throw new Error("The input is not a number!");
    }

    if (input % 2 === 0) {
      return "The number is even!";
    } else {
      return "The number is odd!";
    }
  },
  averageSumArray: function (arr) {
    let arraySum = 0;

    for (let i = 0; i < arr.length; i++) {
      arraySum += arr[i];
    }

    return arraySum / arr.length;
  },
};

let { assert } = require("chai");

describe("testNumbers testing", () => {
  describe("sumNumbers functionality", () => {
    it("should check if parameters are numbers", () => {
      assert.equal(testNumbers.sumNumbers("hi", 1), undefined);
      assert.equal(testNumbers.sumNumbers(1, "hi"), undefined);
      assert.equal(testNumbers.sumNumbers("10", "1"), undefined);
    });
    it("should return sum, rounded to second number after decimal point", () => {
      assert.equal(testNumbers.sumNumbers(1, 1), 2.0);
      assert.equal(testNumbers.sumNumbers(-1, -1), -2.0);
      assert.equal(testNumbers.sumNumbers(0, 0), 0.0);
      assert.equal(testNumbers.sumNumbers(1.5, 1.5), (1.5 + 1.5).toFixed(2));
    });
  });
  describe("numberChecker functionality", () => {
    it("should check if parameters are numbers", () => {
      assert.throw(
        () => testNumbers.numberChecker("hello"),
        Error,
        "The input is not a number!"
      );
      assert.throw(
        () => testNumbers.numberChecker("123b"),
        Error,
        "The input is not a number!"
      );
      assert.throw(
        () => testNumbers.numberChecker(undefined),
        Error,
        "The input is not a number!"
      );
    });
    it("should check if the given number is even or odd", () => {
      assert.equal(testNumbers.numberChecker(5), "The number is odd!");
      assert.equal(testNumbers.numberChecker(2), "The number is even!");
      assert.equal(testNumbers.numberChecker(-5), "The number is odd!");
      assert.equal(testNumbers.numberChecker(0), "The number is even!");
    });
  });
  describe("averageSum functionality", () => {
    it("should sum the numbers in the input array", () => {
      assert.equal(testNumbers.averageSumArray([1,2,3]), 2);
      assert.equal(testNumbers.averageSumArray([-1,-2,-3]), -2);
      assert.equal(testNumbers.averageSumArray([1,2,3]), 2);
    });
  });
});
