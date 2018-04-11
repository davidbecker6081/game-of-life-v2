const Cell = require('../../src/modules/Cell.js');
const CellLocation = require('../../src/modules/CellLocation.js');
const MapOfCells = require('../../src/modules/MapOfCells.js');

describe('MapOfCells--THE WORLD', () => {
  let board;
  let xAxisCells;
  let yAxisCells;
  let cellSize;
  let locationOfCell;
  // let newCell;

  beforeEach(() => {
    xAxisCells = 50;
    yAxisCells = 50;
    cellSize = 10;
    locationOfCell = new CellLocation(1, 1);
    newCell = new Cell(locationOfCell, cellSize);
  });

  it('should stay empty after after a generation tick if already empty', () => {
    const state = 'empty';
    board = new MapOfCells(state, xAxisCells, yAxisCells, Cell, CellLocation, cellSize);
    board.checkMapForAliveCells();
    expect(board.empty).to.equal(true);
    expect(board.generation).to.equal(0);
    board.tickGeneration(xAxisCells, yAxisCells, Cell);
    expect(board.generation).to.equal(1);
    expect(board.empty).to.equal(true);
  });
});
