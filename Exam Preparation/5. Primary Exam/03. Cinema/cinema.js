const cinema = {
  showMovies: function (movieArr) {
    if (movieArr.length == 0) {
      return "There are currently no movies to show.";
    } else {
      let result = movieArr.join(", ");
      return result;
    }
  },
  ticketPrice: function (projectionType) {
    const schedule = {
      Premiere: 12.0,
      Normal: 7.5,
      Discount: 5.5,
    };
    if (schedule.hasOwnProperty(projectionType)) {
      let price = schedule[projectionType];
      return price;
    } else {
      throw new Error("Invalid projection type.");
    }
  },
  swapSeatsInHall: function (firstPlace, secondPlace) {
    if (
      !Number.isInteger(firstPlace) ||
      firstPlace <= 0 ||
      firstPlace > 20 ||
      !Number.isInteger(secondPlace) ||
      secondPlace <= 0 ||
      secondPlace > 20 ||
      firstPlace === secondPlace
    ) {
      return "Unsuccessful change of seats in the hall.";
    } else {
      return "Successful change of seats in the hall.";
    }
  },
};

const { assert } = require("chai");

describe("cinema tests", () => {
  describe("showMovies functionality", () => {
    it("should return message if index of the input array is lith length -> 0", () => {
      assert.equal(
        cinema.showMovies([]),
        "There are currently no movies to show."
      );
    });
    it("should return array of movies separated by a comma and space", () => {
      let result = ["King Kong", "The Tomorrow War", "Joker"];
      assert.equal(cinema.showMovies(result), result.join(", "));
      let otherResult = ["King Kong"];
      assert.equal(cinema.showMovies(otherResult), otherResult.join(", "));
    });
  });
  describe("showMovies functionality", () => {
    it("should throw an error if the type is not property of schedule", () => {
      assert.throw(
        () => cinema.ticketPrice("Stream"),
        Error,
        "Invalid projection type."
      );
      assert.throw(
        () => cinema.ticketPrice([]),
        Error,
        "Invalid projection type."
      );
      assert.throw(
        () => cinema.ticketPrice({}),
        Error,
        "Invalid projection type."
      );
      assert.throw(
        () => cinema.ticketPrice(10),
        Error,
        "Invalid projection type."
      );
      assert.throw(
        () => cinema.ticketPrice(undefined),
        Error,
        "Invalid projection type."
      );
    });
    it("should return the price of projection type", () => {
      assert.equal(cinema.ticketPrice("Premiere"), 12.0);
      assert.equal(cinema.ticketPrice("Normal"), 7.5);
      assert.equal(cinema.ticketPrice("Discount"), 5.5);
    });
  });
  describe("showMovies functionality", () => {
    it("should return false message if one of the numbers do not exist", () => {
      assert.equal(
        cinema.swapSeatsInHall(2),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall('2',2),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(2, '4'),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("should return false message if one of the numbers is not integer", () => {
      assert.equal(
        cinema.swapSeatsInHall(1.5, 2),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(1, 2.5),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(1.5, 2.5),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall('1.5', '2.5'),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("should return false message if one of the numbers is greater than capacity", () => {
      assert.equal(
        cinema.swapSeatsInHall(21, 2),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(1, 30),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(25, 22),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("should return false message if one of the numbers is lower or equal to 0", () => {
      assert.equal(
        cinema.swapSeatsInHall(0, 2),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(1, 0),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(-1, -10),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(3, '-22'),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("should return false message if the numbers are equal", () => {
      assert.equal(
        cinema.swapSeatsInHall(2, 2),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(19, 19),
        "Unsuccessful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(21, 21),
        "Unsuccessful change of seats in the hall."
      );
    });
    it("should return successful message if the numbers in every other way", () => {
      assert.equal(
        cinema.swapSeatsInHall(3, 2),
        "Successful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(20, 1),
        "Successful change of seats in the hall."
      );
      assert.equal(
        cinema.swapSeatsInHall(10, 20),
        "Successful change of seats in the hall."
      );
    });
  });
});
