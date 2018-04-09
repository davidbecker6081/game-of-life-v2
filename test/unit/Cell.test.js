const Cell = require('../../src/modules/Cell.js');
const CellLocation = require('../../src/modules/CellLocation.js');
const Canvas = require('canvas');

describe('Cell', () => {
  // const canvas = {
  //   height: 500,
  //   width: 500,
  // };
  //
  // const context = new Object({
  //   fillStyle: 'red',
  //   fillRect: () => {},
  // });
  //
  let canvas;
  let ctx;
  let mapOfCells;
  let xAxisCells;
  let yAxisCells;

  beforeEach(() => {
    canvas = new Canvas(500, 500);
    ctx = canvas.getContext('2d');
    mapOfCells = [];
    xAxisCells = 50;
    yAxisCells = 50;
    for (let i = 0; i < xAxisCells; i++) {
      const temp = [];
      for (let j = 0; j < yAxisCells; j++) {
        const newLocation = new CellLocation(i, j);
        temp[j] = new Cell(newLocation);
      }
      mapOfCells[i] = temp;
    }
    for (let i = 0; i < xAxisCells; i++) {
      for (let j = 0; j < yAxisCells; j++) {
        mapOfCells[i][j].draw(ctx);
      }
    }
  });

  it('should exist', () => {
    const newCell = new Cell(1);
    expect(newCell).to.equal(newCell);
  });
  it('should have a location', () => {
    const locationOfCell = new CellLocation(1, 1);
    const newCell = new Cell(locationOfCell);
    expect(newCell.location).to.equal(locationOfCell);
    ctx.fillStyle = '#50C878';
  });
});
