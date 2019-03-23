var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here


describe("CalculateTax", function() {
    it("should calculate and add TAX", function() {
      expect(calculateTax(100)).to.equal(108);
    });
  
    it("should throw when not passed numbers", function() {
      expect(function() {
        calculateTax(A);
      }).to.throw(Error);
    });
  });