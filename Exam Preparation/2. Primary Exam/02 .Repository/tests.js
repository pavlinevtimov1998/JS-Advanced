let Repository = require("./solution.js");
let { assert, expect } = require("chai");

describe(`testing Repository class`, () => {
  let instance = {};

  beforeEach(
    () =>
      (instance = new Repository({
        name: "string",
        age: "number",
        birthday: "object",
      }))
  );

  describe("testing .count", () => {
    it("testing count -> 0", () => {
      expect(instance.count).to.eq(0);
    });
  });

  describe("testing .add()", () => {
    it(".add should add entity", () => {
      expect(instance.add({ name: "", age: 2, birthday: {} })).to.eq(0);
    });
  });

  describe("testing .getId()", () => {
    it("Should throw error if the given id does not exist", () => {
      expect(() => instance.getId(-1)).to.throw(
        "Entity with id: -1 does not exist!"
      );
    });
  });

  describe("testing .update()", () => {
    it("should throw error if id does not exist", () => {
      expect(() =>
        instance.update(-1, { name: "", age: 2, birthday: {} })
      ).to.throw("Entity with id: -1 does not exist!");
    });

    it("should throw type error if the type of property is incorrect", () => {
      instance.add({ name: "", age: 2, birthday: {} });
      expect(() =>
        instance.update(0, { name: 0, age: 2, birthday: {} })
      ).to.throw(TypeError);
    });

    it("should throw error if property name is missing", () => {
      instance.add({ name: "", age: 2, birthday: {} });
      expect(() => instance.update(0, { age: 2, birthday: {} })).to.throw(
        "Property name is missing from the entity!"
      );
    });
  });

  describe("Testing .del()", () => {
    it(`deletes index properly`, () => {
      instance.add({ name: "", age: 1, birthday: {} });
      instance.add({ name: "", age: 1, birthday: {} });
      instance.del(1);
      expect(instance.data.has(1)).to.eq(false);
    });
    it("should throw error if id does not exist in the data", () => {
      expect(() => instance.del(0)).to.throw(
        "Entity with id: 0 does not exist!"
      );
    });
  });
});
