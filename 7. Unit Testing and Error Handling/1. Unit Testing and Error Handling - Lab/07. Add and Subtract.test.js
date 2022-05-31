const { assert, expect } = require("chai");
const createCalculator = require("./07. Add and Subtract");

describe("createCalculator tests", () => {
  let instance = {};

  beforeEach(() => {
    instance = createCalculator();
  });

  describe("createCalculator properties", () => {
    // Return object with properties;
    it("should own property 'add'", () => {
      expect(instance).to.has.ownProperty("add");
    });

    it("should own property 'subtract'", () => {
      expect(instance).to.has.ownProperty("subtract");
    });

    it("should own property 'get'", () => {
      expect(instance).to.has.ownProperty("get");
    });
  });

  // Tests with add function;

  describe("createCalculator input tests", () => {
    //Test inputs;
    it("add will return NaN with input like 'undefined, array or object'", () => {
      instance.add(undefined);
      expect(instance.get()).to.be.NaN;
      instance.add([]);
      expect(instance.get()).to.be.NaN;
      instance.add({});
      expect(instance.get()).to.be.NaN;
    });

    it("subtract will return NaN with input like 'undefined, array or object'", () => {
      instance.subtract(undefined);
      expect(instance.get()).to.be.NaN;

      instance.subtract([]);
      expect(instance.get()).to.be.NaN;

      instance.subtract({});
      expect(instance.get()).to.be.NaN;
    });

    it("add and subtract can get string decimal and parse it to Number", () => {
      instance.add("1");
      expect(instance.get()).to.be.equal(1);

      instance.subtract("1");
      expect(instance.get()).to.be.equal(0);
    });

    it("add and subtract can work with negative number", () => {
      instance.add(-1);
      expect(instance.get()).to.be.equal(-1);

      instance.subtract(-1);
      expect(instance.get()).to.be.equal(0);
    });
  });
});
