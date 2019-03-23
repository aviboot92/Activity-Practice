var calculateTax = function(price) {
  // Fill in code here
  var NetPR = parseFloat(price);
  NetPR*=1.08;
  return NetPR;
};

module.exports = calculateTax;
