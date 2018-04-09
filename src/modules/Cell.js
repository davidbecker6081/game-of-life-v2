class Cell {
  constructor(location, cellSize) {
    this.location = location;
    this.size = cellSize;
    this.isAlive = false;
    this.neighbors = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.location.x * this.size, this.location.y * this.size, this.size, this.size);
    ctx.strokeStyle = '#c0c3c5';
    ctx.stroke();
    ctx.closePath();

    if (this.isAlive) {
      ctx.fillStyle = '#50C878';
    } else {
      ctx.fillStyle = '#f3f3f3';
    }
    ctx.fillRect(this.location.x * this.size, this.location.y * this.size, this.size, this.size);
    ctx.stroke();
  }

  getNeighbors(mapOfCells, xAxisCells, yAxisCells) {
    if (this.location.x > 0 && mapOfCells[this.location.x - 1][this.location.y].isAlive) {
      this.neighbors++;
    }
    if (this.location.x < xAxisCells - 1 && mapOfCells[this.location.x + 1][this.location.y].isAlive) {
      this.neighbors++;
    }
    if (this.location.y < yAxisCells - 1 && mapOfCells[this.location.x][this.location.y + 1].isAlive) {
      this.neighbors++;
    }
    if (this.location.y > 0 && mapOfCells[this.location.x][this.location.y - 1].isAlive) {
      this.neighbors++;
    }
    if (this.location.x > 0 && this.location.y > 0 && mapOfCells[this.location.x - 1][this.location.y - 1].isAlive) {
      this.neighbors++;
    }
    if (this.location.x < xAxisCells - 1 && this.location.y > 0 && mapOfCells[this.location.x + 1][this.location.y - 1].isAlive) {
      this.neighbors++;
    }
    if (this.location.y < yAxisCells - 1 && this.location.x > 0 && mapOfCells[this.location.x - 1][this.location.y + 1].isAlive) {
      this.neighbors++;
    }
    if (this.location.x < xAxisCells - 1 && this.location.y < yAxisCells - 1 && mapOfCells[this.location.x + 1][this.location.y + 1].isAlive) {
      this.neighbors++;
    }
  }
}

module.exports = Cell;
