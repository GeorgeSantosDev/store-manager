const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const modelMocks = require('./Mocks/products.model.mock');

describe('Test model layer of products path', function() {
  it('should return an array with all products', async function () {
    sinon.stub(connection, 'execute').resolves([modelMocks.products]);
    const response = await productsModel.findAll();
    expect(response).to.be.deep.equal(modelMocks.products);
  });
});
