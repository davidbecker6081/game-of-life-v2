class MapOfCells {
  constructor() {
    this.mapOfCells = [];
  }

  initializeMap(xAxisCells, yAxisCells, Cell, CellLocation, cellSize) {
    for (let i = 0; i < xAxisCells; i++) {
      const temp = [];
      for (let j = 0; j < yAxisCells; j++) {
        const currentLocation = new CellLocation(i, j);
        temp[j] = new Cell(currentLocation, cellSize);
      }
      this.mapOfCells[i] = temp;
    }
  }

  drawMap(xAxisCells, yAxisCells, ctx) {
    for (let i = 0; i < xAxisCells; i++) {
      for (let j = 0; j < yAxisCells; j++) {
        this.mapOfCells[i][j].draw(ctx);
      }
    }
  }
}

module.exports = MapOfCells;
