document.body.innerHTML = '<div class="playFolder"></div><button class="chek" onClick=chek()>chek</button><button class="startGame" onClick=startGame()>play again</button>';
let lastPlayer = 'zero';
let playFolder = document.querySelector('.playFolder');
let arrChek = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let createFolder = () => {
  for (let i = 1; i <= 9; i++) {
    playFolder.appendChild(document.createElement('div')).classList.add('box');
  }
}
createFolder();
let boxes = document.querySelectorAll('.box');
let playProcces = () => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
      let chekPosition;
      if (i === 0 || i === 3 || i === 6) {
        chekPosition = 0;
      }
      else if (i === 1 || i === 4 || i === 7) {
        chekPosition = 1;
      }
      else if (i === 2 || i === 5 || i === 8) {
        chekPosition = 2;
      }
      if (boxes[i].innerHTML == '') {
      if (lastPlayer === 'cross') {
        boxes[i].innerHTML = '<div class="value">0</div>';
        arrChek[Math.floor((i) / 3)][chekPosition] = 'x';
        lastPlayer = 'zero';
      }
      else if (lastPlayer === 'zero') {
        boxes[i].innerHTML = '<div class="value">X</div>';
        arrChek[Math.floor((i) / 3)][chekPosition] = '0';
        lastPlayer = 'cross';
      }
      if ((arrChek[0][0] === arrChek[0][1] && arrChek[0][1] === arrChek[0][2]) ||       (arrChek[1][0] === arrChek[1][1] && arrChek[1][1] === arrChek[1][2]) ||
        (arrChek[2][0] === arrChek[2][1] && arrChek[2][1] === arrChek[2][2]) ||
        (arrChek[0][0] === arrChek[1][0] && arrChek[1][0] === arrChek[2][0]) || 
        (arrChek[0][1] === arrChek[1][1] && arrChek[1][1] === arrChek[2][1]) ||
        (arrChek[0][2] === arrChek[1][2] && arrChek[1][2] === arrChek[2][2]) ||
        (arrChek[0][0] === arrChek[1][1] && arrChek[1][1] === arrChek[2][2]) ||
        (arrChek[0][2] === arrChek[1][1] && arrChek[1][1] === arrChek[2][0])) {
        alert(`win ${lastPlayer}`);
        arrChek = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        for (let i = 0; i < boxes.length; i++) {
          boxes[i].innerHTML = '';
        }
        return;
      }
    }
    })
  }
}
let startGame = () => {
  arrChek = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
  }
  playProcces();
}
let chek = () => {
  console.log(arrChek)
}


