function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`expected ${actual} to be ${expected}`)
      }
    },
    equal(expected) {
      if (actual !== expected) {
        throw new Error(`expected ${actual} to be equal ${expected}`)
      }
    }
  }
};

module.exports = { expect };
