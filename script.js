const yourShip = document.querySelector('.player-shooter')
const playArea = document.querySelector('#main-play-area')

//Estrutura principal de movimento e tiro
function flyShip(event) {
  if (event.key === 'ArrowUp') {
    event.preventBefault()
    moveUp()
  } else if (event.key === 'ArrowDown') {
    event.prevenDefault()
    moveDown()
  } else if (event.key === ' ') {
    event.preventDefault()
    fireLaser()
  }
}

//Função de subir
function moveUp() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if (topPosition === "0px") {
    return
  } else {
    let position = parseInt(topPosition);
    position -= 50;
    yourShip.style.top = `${position}px`;
  }
}

//Função descer
function moveDown() {
  let topPosition  = getComputedStyle(yourShip).getPropertyValue('top');
  if (topPosition === "510px") {
    return
  } else {
    let position = parseInt(topPosition);
    position += 50;
    yourShip.style.top = `${position}px`;
  }
}

// Função de tiro
function fireLaser() {
  let laser = createLaserElement();
  playArea.appendChild(laser);
  moveLaser();
}

function createLaserElement() {
  let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
  let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
  let newLaser = document.createElement('img');
  newLaser.scr = "/img/shoot.png";
  newLaser.classList.add('laser');
  newLaser.style.left = `${xPosition}px`;
  newLaser.style.top = `${yPosition - 10}px`;
  return newLaser;
}

function moveLaser() {

}
window.addEventListener('keydown', flyShip);