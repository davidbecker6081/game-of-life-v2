const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const stepBtn = document.getElementById('stepBtn');
const automateBtn = document.getElementById('automateBtn');
const generationTicker = document.getElementById('generation');
const randomizeBtn = document.getElementById('randomizeBtn');


let mapOfCells = [];
const xAxisCells = 50;
const yAxisCells = 50;
const cellSize = 10;
let generation = 0;
let isAutomate = false;
const fps = 10;
let now;
let then = Date.now();
const speed = 1000 / fps;
let delta;

function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.size = cellSize;
  this.isAlive = false;
  this.neighbors = 0;
  this.getNeighbors = () => {
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
  };

  this.draw = () => {
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
  };
}

function drawMap() {
  for (let i = 0; i < xAxisCells; i++) {
    for (let j = 0; j < yAxisCells; j++) {
      mapOfCells[i][j].draw();
    }
  }
}

function initializeMap() {
  for (let i = 0; i < xAxisCells; i++) {
    const temp = [];
    for (let j = 0; j < yAxisCells; j++) {
      temp[j] = new Cell(i, j);
    }
    mapOfCells[i] = temp;
  }
  drawMap();
}

function toggleCell(xPosition, yPosition) {
  for (let i = 0; i < xAxisCells; i++) {
    for (let j = 0; j < yAxisCells; j++) {
      const cell = mapOfCells[i][j];
      if ((xPosition >= cell.x * cell.size && xPosition < cell.x * cell.size + cell.size)
      && (yPosition >= cell.y * cell.size && yPosition < cell.y * cell.size + cell.size)) {
        cell.isAlive = !cell.isAlive;
        cell.getNeighbors();
      }
    }
  }
  drawMap();
}

function toggleCellOnClick(e) {
  const xPosition = e.offsetX - canvas.offsetLeft;
  const yPosition = e.offsetY - canvas.offsetTop;
  toggleCell(xPosition, yPosition);
}


function applyRules() {
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
      const cell = mapOfCells[i][j];
      cell.getNeighbors();
      const { neighbors } = cell;
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

  mapOfCells = tempMap;
  generation++;
}

function randomizeGrid() {
  for (let i = 0; i < xAxisCells; i++) {
    const temp = [];
    for (let j = 0; j < yAxisCells; j++) {
      temp[j] = new Cell(i, j);
      const randomNum = Math.round(Math.random());
      if (randomNum === 0) {
        temp[j].isAlive = true;
      }
    }
    mapOfCells[i] = temp;
  }
  drawMap();
  generation = 0;
}

function animate() {
  requestAnimationFrame(animate);
  now = Date.now();
  delta = now - then;
  if (delta > speed) {
    then = now - (delta % speed);
    if (isAutomate) {
      applyRules();
    }

    drawMap();
    generationTicker.textContent = generation;
  }
}

function automate() {
  isAutomate = !isAutomate;
  isAutomate ? automateBtn.textContent = 'Stop' : automateBtn.textContent = 'Automate';
}

canvas.addEventListener('click', toggleCellOnClick, false);
stepBtn.addEventListener('click', applyRules);
automateBtn.addEventListener('click', automate);
randomizeBtn.addEventListener('click', randomizeGrid);

initializeMap();
animate();
