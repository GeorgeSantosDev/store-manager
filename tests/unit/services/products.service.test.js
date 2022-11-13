const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');
const serviceMocks = require('./Mocks/products.service.mocks');

describe('Test service layer of products path', function () {
  afterEach(sinon.restore);
  
  it('should return a object with type null and message an array of objects', async function() {
    sinon.stub(productsModel, 'findAll').resolves(serviceMocks.allProducts);
    const response = await productsService.getAllProducts();
    expect(response).to.be.deep.equal({ type: null, message: serviceMocks.allProducts });
  }); 
});