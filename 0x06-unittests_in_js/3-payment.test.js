const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', () => {
  const utilSpy = sinon.spy(Utils, 'calculateNumber');

  it('validate the usage of the Utils function', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;
    utilSpy.restore()
  });
});
