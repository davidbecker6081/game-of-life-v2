class MapOfCells {
  constructor(state, xAxisCells, yAxisCells, Cell, CellLocation, cellSize) {
    this.empty = state === 'empty';
    this.generation = 0;
    this.initEmpty = () => {
      for (let i = 0; i < xAxisCells; i++) {
        const temp = [];
        for (let j = 0; j < yAxisCells; j++) {
          const currentLocation = new CellLocation(i, j);
          temp[j] = new Cell(currentLocation, cellSize);
        }
        this.mapOfCells[i] = temp;
      }
    };
    this.mapOfCells = [];
    state === 'empty' ? this.initEmpty() : state;
  }

  initializeEmptyMap(xAxisCells, yAxisCells, Cell, CellLocation, cellSize) {
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

  checkMapForAliveCells(xAxisCells, yAxisCells) {
    for (let i = 0; i < xAxisCells; i++) {
      for (let j = 0; j < yAxisCells; j++) {
        if (this.mapOfCells[i][j].isAlive) {
          this.empty = false;
          return;
        }
      }
    }
    this.empty = true;
  }

  tickGeneration(xAxisCells, yAxisCells, Cell) {
    this.applyRules(xAxisCells, yAxisCells, Cell);
    this.checkMapForAliveCells(xAxisCells, yAxisCells);
    this.generation++;
  }

  applyRules(xAxisCells, yAxisCells, Cell) {
    const tempMap = [];

    for (let i = 0; i < xAxisCells; i++) {
      const temp = [];
      for (let j = 0; j < yAxisCells; j++) {
        temp[j] = new Cell(i, j);
      }
      tempMap[i] = temp;
    }

    for (let i = 0; i < xAxisCells; i++) {
      for (let j = 0; j < yAxisCells; j++) {
        const cell = this.mapOfCells[i][j];
        cell.location.getNeighbors(this.mapOfCells, xAxisCells, yAxisCells);
        const { neighbors } = cell.location;
        if (neighbors < 2) {
          tempMap[i][j].isAlive = false;
        }
        if (cell.isAlive && (neighbors === 3 || neighbors === 2)) {
          tempMap[i][j].isAlive = true;
        }
        if (neighbors > 3) {
          tempMap[i][j].isAlive = false;
        }
        if (neighbors === 3) {
          tempMap[i][j].isAlive = true;
        }
      }
    }

    this.mapOfCells = tempMap;
  }

  animate() {
    const fps = 10;
    const now = Date.now();
    let then = Date.now();
    const speed = 1000 / fps;
    const delta = now - then;

    requestAnimationFrame(animate);

    if (delta > speed) {
      then = now - (delta % speed);
      if (this.isAutomate) {
        this.applyRules();
      }

      this.drawMap();
    }
  }
}

module.exports = MapOfCells;
