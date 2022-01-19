'use strict';
const board = document.getElementById('board');
let size = 16;

generateBoard(size);

function generateBoard(size) {
  for(let i = 0; i < size; i++) {
    const div = document.createElement('div');
    const column = board.appendChild(div);
    column.classList.add('column')
    for(let j = 0; j < size; j++) {
      const div = document.createElement('div');
      const square = column.appendChild(div);
      square.classList.add('square');;
    }
  }
  const squares = document.getElementsByClassName('square');
  for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', paintSquare);
  }
}

const squares = document.getElementsByClassName('square');
function paintSquare() {
  this.classList.add('hover');
}

const button = document.getElementById('button');
button.addEventListener('click', resetBoard);

function resetBoard() {
  for(let i = 0; i < squares.length; i++) {
    squares[i].classList.remove('hover');
  }

  size = +prompt('How many number of squares per side do you want?')
  deleteCurrentBoard();
  generateBoard(size);
}

function deleteCurrentBoard() {
  while (board.lastChild) {
    board.removeChild(board.lastChild);
  }
}



