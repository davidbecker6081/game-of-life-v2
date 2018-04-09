const Cell = require('../../src/modules/Cell.js');
const CellLocation = require('../../src/modules/CellLocation.js');
const Canvas = require('canvas');

describe('Cell', () => {
  let canvas;
  let ctx;
  let mapOfCells;
  let xAxisCells;
  let yAxisCells;
  let cellSize;

  beforeEach(() => {
    canvas = new Canvas(500, 500);
    ctx = canvas.getContext('2d');
    mapOfCells = [];
    xAxisCells = 50;
    yAxisCells = 50;
    cellSize = 10;
    for (let i = 0; i < xAxisCells; i++) {
      const temp = [];
      for (let j = 0; j < yAxisCells; j++) {
        const newLocation = new CellLocation(i, j);
        temp[j] = new Cell(newLocation, cellSize);
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
