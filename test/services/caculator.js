const calculator = require("../../services/calculator.service");
const { expect } = require("chai");

describe("calculator operation testing", () => {
  context("Function to be tested", () => {
    it("should add up two numbers a, b", () => {
      const result = calculator.sum(5, 8);
      expect(result).to.equal(13);
    });

    it("should substract b - a", () => {
      const result = calculator.substract(13, 2);
      expect(result).to.equal(11);
    });
  });
});
