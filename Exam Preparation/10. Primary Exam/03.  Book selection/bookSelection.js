const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};

const assert = require("chai").assert;

describe("Testing bookSelection functionality", function () {
  describe("isGenreSuitable functionality", function () {
    it("Should return not suitable message if the book is horror or thriller and the age is less or equal 12", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Thriller", 12),
        `Books with Thriller genre are not suitable for kids at 12 age`
      );
      assert.equal(
        bookSelection.isGenreSuitable("Horror", 12),
        `Books with Horror genre are not suitable for kids at 12 age`
      );
      assert.equal(
        bookSelection.isGenreSuitable("Thriller", 5),
        `Books with Thriller genre are not suitable for kids at 5 age`
      );
      assert.equal(
        bookSelection.isGenreSuitable("Horror", 5),
        `Books with Horror genre are not suitable for kids at 5 age`
      );
    });
    it("Should return suitable message if the is not Horror or Thriller", function () {
      assert.equal(
        bookSelection.isGenreSuitable("Rich dad, Poor dad", 10),
        `Those books are suitable`
      );
      assert.equal(
        bookSelection.isGenreSuitable("Horror", 13),
        `Those books are suitable`
      );
      assert.equal(
        bookSelection.isGenreSuitable("Thriller", 13),
        `Those books are suitable`
      );
    });
  });
  describe("isItAffordable functionality", function () {
    it("Should throw error if the input is not number", function () {
      assert.throw(
        () => bookSelection.isItAffordable("1", 0),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => bookSelection.isItAffordable(1, "10"),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => bookSelection.isItAffordable({}, []),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => bookSelection.isItAffordable(undefined, null),
        Error,
        "Invalid input"
      );
    });
    it("Should return message if the money are not enough", function () {
      assert.equal(
        bookSelection.isItAffordable(10, 9),
        "You don't have enough money"
      );
      assert.equal(
        bookSelection.isItAffordable(199, 198),
        "You don't have enough money"
      );
    });
    it("Should return message if you have money to buy the book", function () {
      assert.equal(
        bookSelection.isItAffordable(10, 10),
        `Book bought. You have 0$ left`
      );
      assert.equal(
        bookSelection.isItAffordable(20, 50),
        `Book bought. You have 30$ left`
      );
    });
  });
  describe("suitableTitles functionality", function () {
    it("Should throw error if the input is not valid", function () {
      assert.throw(
        () => bookSelection.suitableTitles({}, 1),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => bookSelection.suitableTitles([], undefined),
        Error,
        "Invalid input"
      );
      assert.throw(
        () => bookSelection.suitableTitles(undefined, ""),
        Error,
        "Invalid input"
      );
    });
    it("Should return array with existing books", function () {
      assert.deepEqual(
        bookSelection.suitableTitles(
          [{ title: "The Da Vinci Code", genre: "Thriller" }],
          "Thriller"
        ),
        ["The Da Vinci Code"]
      );
      assert.deepEqual(
        bookSelection.suitableTitles(
          [{ title: "The Da Vinci Code", genre: "Thriller" }],
          "Horror"
        ),
        []
      );
      assert.deepEqual(
        bookSelection.suitableTitles(
          [
            { title: "The Da Vinci Code", genre: "Thriller" },
            { title: "The Secret", genre: "Horror" },
          ],
          "Romantic"
        ),
        []
      );
      assert.deepEqual(
        bookSelection.suitableTitles(
          [
            { title: "The Da Vinci Code", genre: "Thriller" },
            { title: "The Secret", genre: "Thriller" },
          ],
          "Thriller"
        ),
        ["The Da Vinci Code", "The Secret"]
      );
    });
  });
});
