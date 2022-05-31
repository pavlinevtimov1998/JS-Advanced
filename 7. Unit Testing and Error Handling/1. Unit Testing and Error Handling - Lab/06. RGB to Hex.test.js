const expect = require("chai").expect;
const rgbToHexColor = require("./06. RGB to Hex");

describe("Tests for the RGB TO HEX task", () => {
  describe("General test", () => {
    it("should return #100C0D for (16, 12, 13)", () => {
      expect(rgbToHexColor(16, 12, 13)).to.equal("#100C0D");
    });
  });

  describe("Test lowest possible input: zeros", () => {
    it("test with zeros", () => {
      expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
  });

  describe("Test highest possible input: 255", () => {
    it("test with 255", () => {
      expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
  });

  describe("Invalid input -negative number", () => {
    it("should be undefined", () => {
      expect(typeof rgbToHexColor(-16, 12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input -negative number", () => {
    it("should be undefined", () => {
      expect(typeof rgbToHexColor(16, -12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input -negative number", () => {
    it("should be undefined", () => {
      expect(typeof rgbToHexColor(16, 12, -13)).to.equal("undefined");
    });
  });

  describe("Invalid input out of the Range", () => {
    it("should be undefined", () => {
      expect(typeof rgbToHexColor(266, 12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input: string", () => {
    it("should be undefined", () => {
      expect(typeof rgbToHexColor("266", 12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input: fractional numbers", () => {
    it("should be undefined", () => {
      expect(typeof rgbToHexColor(3.13, 12, 13)).to.equal("undefined");
    });
  });

  describe("Pad values with zeros", () => {
    it("should pad values with zeros", function () {
      expect(rgbToHexColor(12, 13, 14)).to.equal("#0C0D0E");
    });
  });

  describe("No input test", () => {
    it("no input test", () => {
      expect(rgbToHexColor()).to.be.undefined;
    });
  });
});
