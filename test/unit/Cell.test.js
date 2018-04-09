const Cell = require('../../src/modules/Cell.js');
const CellLocation = require('../../src/modules/CellLocation.js');
const MapOfCells = require('../../src/modules/MapOfCells.js');
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
    mapOfCells = new MapOfCells();
    xAxisCells = 50;
    yAxisCells = 50;
    cellSize = 10;
    mapOfCells.initializeMap(xAxisCells, yAxisCells, Cell, CellLocation, cellSize);
    mapOfCells.drawMap(ctx);
  });

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
