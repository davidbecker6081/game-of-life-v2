const Cell = require('../../src/modules/Cell.js');
const CellLocation = require('../../src/modules/CellLocation.js');
const MapOfCells = require('../../src/modules/MapOfCells.js');
// const Canvas = require('canvas');

describe('Cell', () => {
  // let canvas;
  // let ctx;
  let board;
  let xAxisCells;
  let yAxisCells;
  let cellSize;
  let locationOfCell;
  let newCell;

  beforeEach(() => {
    // canvas = new Canvas(500, 500);
    // ctx = canvas.getContext('2d');
    xAxisCells = 50;
    yAxisCells = 50;
    cellSize = 10;
    locationOfCell = new CellLocation(1, 1);
    newCell = new Cell(locationOfCell, cellSize);
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
    expect(newCell.location.neighbors).to.equal(0);
  });
  describe('Neighbors', () => {
    beforeEach(() => {
      board = new MapOfCells();
      board.initializeMap(xAxisCells, yAxisCells, Cell, CellLocation, cellSize);
    });

    describe('Add a neighbor', () => {
      describe('Cardinal Direcions', () => {
        it('should add a neighbor if cell is alive to the West', () => {
          board.mapOfCells[0][1].isAlive = true;
          newCell.location.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
          expect(newCell.location.neighbors).to.equal(1);
        });
        it('should add a neighbor if cell is alive to the North', () => {
          board.mapOfCells[1][0].isAlive = true;
          newCell.location.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
          expect(newCell.location.neighbors).to.equal(1);
        });
        it('should add a neighbor if cell is alive to the East', () => {
          board.mapOfCells[2][1].isAlive = true;
          newCell.location.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
          expect(newCell.location.neighbors).to.equal(1);
        });
        it('should add a neighbor if cell is alive to the South', () => {
          board.mapOfCells[1][2].isAlive = true;
          newCell.location.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
          expect(newCell.location.neighbors).to.equal(1);
        });
      });
      describe('Primary InterCardinal Directions', () => {
        it('should add a neighbor if cell is alive to the NorthWest', () => {
          board.mapOfCells[0][0].isAlive = true;
          newCell.location.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
          expect(newCell.location.neighbors).to.equal(1);
        });
        it('should add a neighbor if cell is alive to the NorthEast', () => {
          board.mapOfCells[2][0].isAlive = true;
          newCell.location.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
          expect(newCell.location.neighbors).to.equal(1);
        });
        it('should add a neighbor if cell is alive to the SouthEast', () => {
          board.mapOfCells[2][2].isAlive = true;
          newCell.location.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
          expect(newCell.location.neighbors).to.equal(1);
        });
        it('should add a neighbor if cell is alive to the SouthWest', () => {
          board.mapOfCells[0][2].isAlive = true;
          newCell.location.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
          expect(newCell.location.neighbors).to.equal(1);
        });
      });
    });
    describe('Do not add a neighbor', () => {
      it('should not add a neighbor if no cells are alive around the initial cell', () => {
        newCell.location.getNeighbors(board.mapOfCells, xAxisCells, yAxisCells);
        expect(newCell.location.neighbors).to.equal(0);
      });
    });
  });
  describe('Game Rules', () => {

  });
});
