class CellLocation {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.neighbors = 0;
  }

  getNeighbors(mapOfCells, xAxisCells, yAxisCells) {
    if (this.x > 0 && mapOfCells[this.x - 1][this.y].isAlive) {
      this.neighbors++;
    }
    if (this.x < xAxisCells - 1 && mapOfCells[this.x + 1][this.y].isAlive) {
      this.neighbors++;
    }
    if (this.y < yAxisCells - 1 && mapOfCells[this.x][this.y + 1].isAlive) {
      this.neighbors++;
    }
    if (this.y > 0 && mapOfCells[this.x][this.y - 1].isAlive) {
      this.neighbors++;
    }
    if (this.x > 0 && this.y > 0 && mapOfCells[this.x - 1][this.y - 1].isAlive) {
      this.neighbors++;
    }
    if (this.x < xAxisCells - 1 && this.y > 0 && mapOfCells[this.x + 1][this.y - 1].isAlive) {
      this.neighbors++;
    }
    if (this.y < yAxisCells - 1 && this.x > 0 && mapOfCells[this.x - 1][this.y + 1].isAlive) {
      this.neighbors++;
    }
    if (this.x < xAxisCells - 1 && this.y < yAxisCells - 1 && mapOfCells[this.x + 1][this.y + 1].isAlive) {
      this.neighbors++;
    }
  }
}

module.exports = CellLocation;
