const expect = require("chai").expect;
const isOddOrEven = require("./02. Even Or Odd");

describe("isOddOrEven function tests", () => {
  // Check Inputs

  it("should return undefined when number is recieved", () => {
    expect(isOddOrEven(1)).to.be.undefined;
  });

  it("should return undefined when object is recieved", () => {
    expect(isOddOrEven({})).to.be.undefined;
  });

  it("should return undefined when array is recieved", () => {
    expect(isOddOrEven([])).to.be.undefined;
  });

  it("should return undefined when nothing is recieved", () => {
    expect(isOddOrEven()).to.be.undefined;
  });

  // Check For Even/Odd Output

  it('should return "even" when string with even length is recieved', () => {
    expect(isOddOrEven("hi")).to.be.equal("even");
  });

  it('should return "even" when string with even length is recieved', () => {
    expect(isOddOrEven("hello")).to.be.equal("odd");
  });
});
