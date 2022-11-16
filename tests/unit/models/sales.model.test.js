const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const modelMocks = require('./Mocks/sales.model.mock');

describe('Test model layer of sales path', function () {
  afterEach(sinon.restore);

  it('should return an array with all sales', async function () {
    sinon.stub(connection, 'execute').resolves([modelMocks.sales]);
    const response = await salesModel.findAll();
    expect(response).to.be.deep.equal(modelMocks.sales);
  });

});
