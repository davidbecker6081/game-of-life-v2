class Cell {
  constructor(location, cellSize) {
    this.location = location;
    this.size = cellSize;
    this.isAlive = false;
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
}

module.exports = Cell;
