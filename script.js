'use strict';
const board = document.getElementById('board');
let size = 24;
let rainbowmode = false;

const smallbtn = document.getElementById('small');
const mediumbtn = document.getElementById('medium');
const highbtn = document.getElementById('high');
const classicbtn = document.getElementById('classic');
const rainbowbtn = document.getElementById('rainbow');
const erasebtn = document.getElementById('erase');

erasebtn.addEventListener('click', resetBoard);
smallbtn.addEventListener('click', resetBoard);
mediumbtn.addEventListener('click', resetBoard);
highbtn.addEventListener('click', resetBoard);
classicbtn.addEventListener('click', colorMode);
rainbowbtn.addEventListener('click', colorMode);

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
  if ( rainbowmode == false) {
    this.style.backgroundColor = 'black';
  } else {
    this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}

function colorMode() {
  if (this.id == 'classic') {
    rainbowmode = false;
  } else {
    rainbowmode = true;
  }
}

function resetBoard() {
  for(let i = 0; i < squares.length; i++) {
    squares[i].classList.remove('blackpaint');
  }
  
  switch (this.id) {
    case 'small':
      size = 16;
      break;
    case 'medium':
      size = 24;
      break;
    case 'high':
      size = 30;
      break;
  }
  //size = +prompt('How many number of squares per side do you want?')
  deleteCurrentBoard();
  generateBoard(size);
}

function deleteCurrentBoard() {
  while (board.lastChild) {
    board.removeChild(board.lastChild);
  }
}



