const numberOperations = {
  powNumber: function (num) {
    return num * num;
  },
  numberChecker: function (input) {
    input = Number(input);

    if (isNaN(input)) {
      throw new Error("The input is not a number!");
    }

    if (input < 100) {
      return "The number is lower than 100!";
    } else {
      return "The number is greater or equal to 100!";
    }
  },
  sumArrays: function (array1, array2) {
    const longerArr = array1.length > array2.length ? array1 : array2;
    const rounds =
      array1.length < array2.length ? array1.length : array2.length;

    const resultArr = [];

    for (let i = 0; i < rounds; i++) {
      resultArr.push(array1[i] + array2[i]);
    }

    resultArr.push(...longerArr.slice(rounds));

    return resultArr;
  },
};

const { assert, expect } = require("chai");

describe("numberOperations tests", () => {
  describe(".powNumber functionality", () => {
    it("should return the power of the given number", () => {
      assert.strictEqual(numberOperations.powNumber(5), 25);
      assert.strictEqual(numberOperations.powNumber(0), 0);
      assert.strictEqual(numberOperations.powNumber(-4), 16);
      assert.strictEqual(numberOperations.powNumber(1.5), 1.5 * 1.5);
    });
  });
  describe(".numberChecker functionality", () => {
    it("should parse the input in to number", () => {
      assert.strictEqual(
        numberOperations.numberChecker("5"),
        "The number is lower than 100!"
      );
      assert.strictEqual(
        numberOperations.numberChecker("-1"),
        "The number is lower than 100!"
      );
    });
    it("should throw error if the parsed input is NaN", () => {
      assert.throw(
        () => numberOperations.numberChecker("hello"),
        Error,
        "The input is not a number!"
      );
      assert.throw(
        () => numberOperations.numberChecker(undefined),
        Error,
        "The input is not a number!"
      );
      assert.throw(
        () => numberOperations.numberChecker("123a"),
        Error,
        "The input is not a number!"
      );
    });
    it("should check if the number is higher or lower than 100", () => {
      assert.strictEqual(
        numberOperations.numberChecker(0),
        "The number is lower than 100!"
      );
      assert.strictEqual(
        numberOperations.numberChecker(100),
        "The number is greater or equal to 100!"
      );
      assert.strictEqual(
        numberOperations.numberChecker("1000"),
        "The number is greater or equal to 100!"
      );
      assert.strictEqual(
        numberOperations.numberChecker("-25"),
        "The number is lower than 100!"
      );
    });
  });
  describe(".sumArrays functionality", () => {
    it("should return the sum of the given arrays index by index", () => {
      assert.deepEqual(numberOperations.sumArrays([], []), []);
      assert.deepEqual(
        numberOperations.sumArrays([1, 2, 3], [1, 2]),
        [2, 4, 3]
      );
      assert.deepEqual(
        numberOperations.sumArrays(["a", "b", "c"], ["a", "a", "a"]),
        ["aa", "ba", "ca"]
      );
      assert.deepEqual(numberOperations.sumArrays([1.5, 1, 1], [1.5, 1, 1]), [
        1.5 + 1.5,
        2,
        2,
      ]);
    });
  });
});
