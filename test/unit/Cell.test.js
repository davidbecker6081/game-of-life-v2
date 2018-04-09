const Cell = require('../../src/modules/Cell.js');
const CellLocation = require('../../src/modules/CellLocation.js');
const mocha = require('mocha');
const chai = require('chai');

global.mocha = mocha;
global.expect = chai.expect;

describe('Cell', () => {
  it('should exist', () => {
    const newCell = new Cell(1);
    expect(newCell).to.equal(newCell);
  });
  it('should have a location', () => {
    const locationOfCell = new CellLocation(1, 1);
    const newCell = new Cell(locationOfCell);
    expect(newCell.location).to.equal(locationOfCell);
  });
});
