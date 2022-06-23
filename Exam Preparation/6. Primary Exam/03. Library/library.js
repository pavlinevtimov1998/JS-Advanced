const library = {
  calcPriceOfBook(nameOfBook, year) {
    let price = 20;
    if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
      throw new Error("Invalid input");
    } else if (year <= 1980) {
      let total = price - price * 0.5;
      return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
    }
    return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
  },

  findBook: function (booksArr, desiredBook) {
    if (booksArr.length == 0) {
      throw new Error("No books currently available");
    } else if (booksArr.find((e) => e == desiredBook)) {
      return "We found the book you want.";
    } else {
      return "The book you are looking for is not here!";
    }
  },
  arrangeTheBooks(countBooks) {
    const countShelves = 5;
    const availableSpace = countShelves * 8;

    if (!Number.isInteger(countBooks) || countBooks < 0) {
      throw new Error("Invalid input");
    } else if (availableSpace >= countBooks) {
      return "Great job, the books are arranged.";
    } else {
      return "Insufficient space, more shelves need to be purchased.";
    }
  },
};

const { assert } = require("chai");

describe("library testing", function () {
  describe("calcPriceOfBook functionality", function () {
    it("should throl error if the book name is not a string", function () {
      assert.throw(
        () => library.calcPriceOfBook(undefined, 2010),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => library.calcPriceOfBook({}, 2010),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => library.calcPriceOfBook([], 2010),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => library.calcPriceOfBook(1, 2010),
        Error,
        "Invalid input"
      );
    });
    it("should throl error if the year is not integer number", function () {
      assert.throw(
        () => library.calcPriceOfBook("book", 1999.5),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => library.calcPriceOfBook("book", 1.5),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => library.calcPriceOfBook("book", "2000"),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => library.calcPriceOfBook("book", undefined),
        Error,
        "Invalid input"
      );
    });
    it("the price should be 50% less if the year is less or equal 1980", function () {
      assert.equal(
        library.calcPriceOfBook("book", 1980),
        `Price of book is 10.00`
      );
      assert.equal(
        library.calcPriceOfBook("book", 1950),
        `Price of book is 10.00`
      );
    });
    it("if the year is greater than 1980 should return message", function () {
      assert.equal(
        library.calcPriceOfBook("Rich dad Poor dad", 1981),
        `Price of Rich dad Poor dad is 20.00`
      );
      assert.equal(
        library.calcPriceOfBook("book", 2020),
        `Price of book is 20.00`
      );
    });
  });
  describe("findBook functionality", function () {
    it("should throw error if the array is empty", function () {
      assert.throw(
        () => library.findBook([], "The Secret"),
        Error,
        "No books currently available"
      );
    });
    it("should return message if the book exist in the array", function () {
      assert.equal(
        library.findBook(["Troy", "Life Style", "Torronto"], "Torronto"),
        "We found the book you want."
      );
      assert.equal(
        library.findBook(["Troy", "Life Style", "Torronto"], "Life Style"),
        "We found the book you want."
      );
    });
    it("should return message if the book did not exist in the array", function () {
      assert.equal(
        library.findBook(["Troy", "Life Style", "Torronto"], "The Secret"),
        "The book you are looking for is not here!"
      );
      assert.equal(
        library.findBook(["Troy", "Life Style", "Torronto"], ""),
        "The book you are looking for is not here!"
      );
    });
  });
  describe("arrangeTheBooks dunctionality", function () {
    it("should throw error if the number input is not integer number", function () {
      assert.throw(() => library.arrangeTheBooks(1.5), Error, "Invalid input");
      assert.throw(() => library.arrangeTheBooks("10"), Error, "Invalid input");
    });
    it("should throw error if the number input is negative", function () {
      assert.throw(() => library.arrangeTheBooks(-1), Error, "Invalid input");
      assert.throw(() => library.arrangeTheBooks(-100), Error, "Invalid input");
    });
    it("should return positive message if we have avalivable space", function () {
      assert.equal(
        library.arrangeTheBooks(40),
        "Great job, the books are arranged."
      );
      assert.equal(
        library.arrangeTheBooks(0),
        "Great job, the books are arranged."
      );
      assert.equal(
        library.arrangeTheBooks(1),
        "Great job, the books are arranged."
      );
    });
    it("should return negative message if we do not have avalivable space", function () {
      assert.equal(
        library.arrangeTheBooks(41),
        "Insufficient space, more shelves need to be purchased."
      );
      assert.equal(
        library.arrangeTheBooks(50),
        "Insufficient space, more shelves need to be purchased."
      );
      assert.equal(
        library.arrangeTheBooks(100),
        "Insufficient space, more shelves need to be purchased."
      );
    });
  });
});
