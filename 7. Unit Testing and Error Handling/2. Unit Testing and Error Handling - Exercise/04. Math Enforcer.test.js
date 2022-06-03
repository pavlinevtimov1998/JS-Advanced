const expect = require("chai").expect;
const { describe } = require("mocha");
const mathEnforcer = require("./04. Math Enforcer");

describe("mathEnforcer function tests", () => {
  // Check addFive functionality
  describe("addFive functionality", () => {
    // Incorrect Input

    it("should return undefined if the input is string", () => {
      expect(mathEnforcer.addFive("5")).to.be.undefined;
    });

    it("should return undefined if the input is object", () => {
      expect(mathEnforcer.addFive({})).to.be.undefined;
    });

    it("should return undefined if the input is array", () => {
      expect(mathEnforcer.addFive([])).to.be.undefined;
    });

    // Correct Input

    it("should add 5 if the parameter is number", () => {
      expect(mathEnforcer.addFive(5)).to.be.equal(10);
    });

    it("should add 5 if the parameter is decimal number", () => {
      expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5);
    });

    it("should add 5 if the parameter is negative number", () => {
      expect(mathEnforcer.addFive(-5)).to.be.equal(0);
    });
  });

  // Check subtractTen functionality

  describe("subtractTen functionality", () => {
    // Incorrect Input

    it("should return undefined if the input is string", () => {
      expect(mathEnforcer.subtractTen("5")).to.be.undefined;
    });

    it("should return undefined if the input is object", () => {
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });

    it("should return undefined if the input is array", () => {
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
    });

    // Correct Input

    it("should subtract 10 if the parameter is number", () => {
      expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
    });

    it("should subtract 10 if the parameter is decimal number", () => {
      expect(mathEnforcer.subtractTen(5.5)).to.be.equal(-4.5);
    });

    it("should subtract 10 if the parameter is negative number", () => {
      expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
    });
  });

  // Check subtractTen functionality

  describe("sum functionality", () => {
    // Incorrect Input

    it("should return undefined if first input is string", () => {
      expect(mathEnforcer.sum("5", 5)).to.be.undefined;
    });

    it("should return undefined if the second input is string", () => {
      expect(mathEnforcer.sum(5, '5')).to.be.undefined;
    });

    it("should return undefined if both input parameters are not 'number'", () => {
      expect(mathEnforcer.subtractTen([5], {'Hello': 0})).to.be.undefined;
    });

    // // Correct Input

    it("should return sum of two numbers if the parameters are numbers", () => {
      expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
    });

    it("should return sum of two numbers if the parameters are decimal numbers", () => {
      expect(mathEnforcer.sum(5.5, 4.5)).to.be.equal(10);
    });

    it("should return sum of two numbers if the parameters are negative numbers", () => {
      expect(mathEnforcer.sum(-5, -10)).to.be.equal(-15);
    });
  });
});
