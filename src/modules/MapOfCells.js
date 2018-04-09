class MapOfCells {
  constructor() {
    this.mapOfCells = [];
  }

  intializeMap(Cell) {
    for (let i = 0; i < xAxisCells; i++) {
      const temp = [];
      for (let j = 0; j < yAxisCells; j++) {
        temp[j] = new Cell(i, j);
      }
      this.mapOfCells[i] = temp;
    }
  }

  drawMap(xAxisCells, yAxisCells) {
    for (let i = 0; i < xAxisCells; i++) {
      for (let j = 0; j < yAxisCells; j++) {
        this.mapOfCells[i][j].draw();
      }
    }
  }
}

module.exports = MapOfCells;
