const Cell = require('../../src/modules/Cell.js');
const CellLocation = require('../../src/modules/CellLocation.js');
const MapOfCells = require('../../src/modules/MapOfCells.js');
const Canvas = require('canvas');

describe('Cell', () => {
  let canvas;
  let ctx;
  let board;
  let xAxisCells;
  let yAxisCells;
  let cellSize;
  let locationOfCell;
  let newCell;

  beforeEach(() => {
    canvas = new Canvas(500, 500);
    ctx = canvas.getContext('2d');
    xAxisCells = 50;
    yAxisCells = 50;
    cellSize = 10;
    locationOfCell = new CellLocation(1, 1);
    newCell = new Cell(locationOfCell, cellSize);
    board = new MapOfCells();
    board.initializeMap(xAxisCells, yAxisCells, Cell, CellLocation, cellSize);
    board.drawMap(xAxisCells, yAxisCells, ctx);
  });

  it('should have a location', () => {
    expect(newCell.location).to.equal(locationOfCell);
  });
  it('should have a size', () => {
    expect(newCell.size).to.equal(cellSize);
  });
  it('should start out dead', () => {
    expect(newCell.isAlive).to.equal(false);
  });
  it('should start with 0 neighbors', () => {
    expect(newCell.neighbors).to.equal(0);
  });
  describe('Neighbors', () => {
    it('should not add to the neighbors count if cell has no neighbors', () => {
      expect(newCell.neighbors).to.equal(0);
      newCell.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
      expect(newCell.neighbors).to.equal(0);
    });
    it('should add a neighbor to the initial cell if cell is alive to the left', () => {
      expect(newCell.neighbors).to.equal(0);
      board.mapOfCells[1][0].isAlive = true;
      newCell.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
      expect(newCell.neighbors).to.equal(1);
    });
  });
});
