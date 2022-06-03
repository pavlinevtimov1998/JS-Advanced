const expect = require("chai").expect;
const { describe } = require("mocha");
const lookupChar = require("./03. Char Lookup");

describe("lookupChar function tests", () => {
  // Check Inputs

  it("should return undefined if recieved string is empty", () => {
    expect(lookupChar("", 0)).to.be.equal("Incorrect index");
  });

  it("should return undefined if the first parameter is not string", () => {
    expect(lookupChar(1, 1)).to.be.undefined;
  });

  it("should return undefined if the second parameter is not number", () => {
    expect(lookupChar("hello", "hello")).to.be.undefined;
  });

  it("should return undefined if both parameters are not string and number", () => {
    expect(lookupChar(1, "hello")).to.be.undefined;
  });

  it("should return undefined if the second parameter is not integer", () => {
    expect(lookupChar("hi", 10.5)).to.be.undefined;
  });

  // Check for incorrect index

  it("should return 'Incorrect index' if the index is not in the given (string.length -1) range", () => {
    expect(lookupChar("hello", 5)).to.be.equal("Incorrect index");
  });

  it("should return 'Incorrect index' if the index is negetive number", () => {
    expect(lookupChar("hello", -1)).to.be.equal("Incorrect index");
  });

  // Check for result

  it("should return character of the specific index", () => {
    expect(lookupChar("hello", 2)).to.be.equal("l");
  });

  it("should return character of the specific index", () => {
    expect(lookupChar("h", 0)).to.be.equal("h");
  });
});
