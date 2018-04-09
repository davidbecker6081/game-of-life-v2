class Cell {
  constructor(location, cellSize) {
    this.location = location;
    this.size = cellSize;
    this.isAlive = false;
    this.neighbors = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.strokeStyle = '#c0c3c5';
    ctx.stroke();
    ctx.closePath();

    if (this.isAlive) {
      ctx.fillStyle = '#50C878';
    } else {
      ctx.fillStyle = '#f3f3f3';
    }
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.stroke();
  }

  getNeighbors(mapOfCells) {
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

module.exports = Cell;
