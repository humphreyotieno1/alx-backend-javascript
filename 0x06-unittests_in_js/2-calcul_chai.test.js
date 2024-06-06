const expect = require('chai').expect
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', () => {
    it('test type SUM', () => {
        expect(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('test type SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('test type DIVIDE', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
})
