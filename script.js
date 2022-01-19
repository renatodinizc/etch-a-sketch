'use strict';
const board = document.getElementById('board');
let size = 30;

generateBoard(16);

function generateBoard(size) {
  for(let i = 0; i < size; i++) {
    const div = document.createElement('div');
    const column = board.appendChild(div);
    column.classList.add('column')
    column.classList.add(i)
    for(let j = 0; j < size; j++) {
      const div = document.createElement('div');
      const square = column.appendChild(div);
      square.classList.add('square');
      square.classList.add(`${j}x${i}`);
    }
  }
}

const squares = document.getElementsByClassName('square');

for(let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('mouseover', paintSquare);
}

function paintSquare() {
  this.classList.add('hover');
}

const button = document.getElementById('button');
button.addEventListener('click', resetBoard);

function resetBoard() {
  for(let i = 0; i < squares.length; i++) {
    squares[i].classList.remove('hover');
  }
}



