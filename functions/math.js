const sum = (...args) => args.reduce((a, b) => a + b);
const subtract = (...args) => args.reduce((a, b) => a - b);

module.exports = { sum, subtract };
