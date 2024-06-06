const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should round the numbers and add them', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should round the numbers and subtract', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', () => {
    it('should round the numbers and divide', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when the second argument is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  it('should throw an error for an invalid type', () => {
    assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), /Invalid type/);
  });
});
