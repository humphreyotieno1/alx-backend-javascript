import { expect } from 'chai';
import sinon from 'sinon';
import { Utils } from './utils.js';
import { sendPaymentRequestToApi } from './3-payment.js';

describe('sendPaymentRequestToApi', () => {
  let utilsStub;

  beforeEach(() => {
    utilsStub = sinon.stub(Utils, 'calculateNumber');
  });

  afterEach(() => {
    utilsStub.restore();
  });

  it('should call Utils.calculateNumber with the right arguments', () => {
    utilsStub.withArgs('SUM', 100, 20).returns(120);
    sendPaymentRequestToApi(100, 20);
    expect(utilsStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
