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

window.addEventListener('keydown', flyShip);