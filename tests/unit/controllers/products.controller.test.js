const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

describe('Test controller layer of products path', function () {
  afterEach(sinon.restore);

  it('should return status 500 and message with "Internal server error!"', async function() {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAllProducts')
      .resolves({ type: 'INTERNAL_SERVER_ERROR', message: 'Internal server error!' });

    await productsController.findAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({ message: 'Internal server error!' });
  });

  
});