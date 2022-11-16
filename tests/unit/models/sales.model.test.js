const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { insert } = require('../../../src/models/products.model');
const modelMocks = require('./Mocks/sales.model.mock');

describe('Test model layer of sales path', function () {
  afterEach(sinon.restore);

  it('should return an array with all sales', async function () {
    sinon.stub(connection, 'execute').resolves([modelMocks.sales]);
    const response = await salesModel.findAll();
    expect(response).to.be.deep.equal(modelMocks.sales);
  });

  it('should return a sale searched by id', async function () {
    sinon.stub(connection, 'execute').resolves([[modelMocks.sale]]);
    const response = await salesModel.findById(1);
    expect(response).to.be.deep.equal([modelMocks.sale]);
  });

  it('should return a new sale id', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1}]);
    const response = await salesModel.insertSaleId();
    expect(response).to.be.equal(1);
  });

});
