const expect = require("chai").expect;
const sum = require("./04. Sum of Numbers");

describe("Sum of numbers", () => {
  it("Should sum the numbers in the array", () => {
    //Arrange
    let numbers = [10, 20, 30, 40];

    let expectedSum = 100;

    //Act
    let actualSum = sum(numbers);

    //Assert
    expect(actualSum).to.be.equal(expectedSum);
  });

  it("Should parse to number if string exist in the array", () => {
    let numbers = ["1", "2", "3", "4"];

    let expectedSum = 10;

    
    let actualSum = sum(numbers);

    expect(actualSum).to.be.equal(expectedSum);
  });

  it("Should sum the numbers in the array if some number is negative", () => {
    //Arrange
    let numbers = [10, 20, 30, -40];

    let expectedSum = 20;

    //Act
    let actualSum = sum(numbers);

    //Assert
    expect(actualSum).to.be.equal(expectedSum);
  });


});
