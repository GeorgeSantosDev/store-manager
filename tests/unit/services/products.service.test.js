const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const serviceMocks = require('./Mocks/products.service.mocks');

describe('Test service layer of products path', function () {
  afterEach(sinon.restore);
  
  it('should return a object with type null and message with an array of objects', async function() {
    sinon.stub(productsModel, 'findAll').resolves(serviceMocks.allProducts);
    const response = await productsService.getAllProducts();
    expect(response).to.be.deep.equal({ type: null, message: serviceMocks.allProducts });
  });

  it('should return a object with type INTERNAL_SERVER_ERROR and message with "Internal server error!"', async function () {
    sinon.stub(productsModel, 'findAll').resolves('');
    const response = await productsService.getAllProducts();
    expect(response).to.be.deep.equal({ type: 'INTERNAL_SERVER_ERROR', message: 'Internal server error!' });
  });

  it('should return a object with type null and message with a object', async function () {
    sinon.stub(productsModel, 'findById').resolves(serviceMocks.allProducts[0]);
    const response = await productsService.getProductById();
    expect(response).to.be.deep.equal({ type: null, message: serviceMocks.allProducts[0] });
  });

});