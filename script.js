'use strict';
const board = document.getElementById('board');

for(let i = 0; i < 16; i++) {
  const div = document.createElement('div');
  const column = board.appendChild(div);
  column.classList.add('column')
  column.classList.add(i)
  for(let j = 0; j < 16; j++) {
    const div = document.createElement('div');
    const square = column.appendChild(div);
    square.classList.add('square');
    square.classList.add(`${j}x${i}`);
  }
}

const squares = document.getElementsByClassName('square');

for(let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('mouseover', paintSquare);
}

function paintSquare() {
  this.classList.add('hover');
}


