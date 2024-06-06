const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', () => {
    it('calculateNumber to return exactly the number 4', () =>{
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it('calculateNumber to return exactly the number 5', () =>{
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it('calculateNumber to return exactly the number 6', () =>{
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    it('calculateNumber to return exactly the number 7', () =>{
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});