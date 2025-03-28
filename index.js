const containerBlock = document.querySelector('#container');


const cardsNames = ['Валет', 'Дама', 'Король'];

const START_TRIES = 6;

function getRandom (min, max) {
  return Math.floor(Math.random() * ( max - min + 1 ) + min);
}

function initRound () {
  containerBlock.textContent = cardsNames[getRandom(0, 2)];
}

initRound();

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyQ') {
    initRound();
  }
});

const createPlayer = (playerNum, playerName) => {
  const triesBlock = document.querySelector(`#tries${playerNum}`);
  const shootButton = document.querySelector(`#shoot${playerNum}`);
  const playerBlock = document.querySelector(`#player${playerNum}`);
  const nameBlock = document.querySelector(`#name${playerNum}`);

  nameBlock.innerHTML = playerName;

  let triesLeft = START_TRIES;
  let isDead = false;
  triesBlock.innerHTML = triesLeft;

  function checkPlayerDieInTurn () {
    const luckyNumber = getRandom(1, triesLeft);

    return luckyNumber === triesLeft;
  }

  shootButton.addEventListener('click', function () {
    if (triesLeft < 1 || isDead) {
      return;
    }

    initRound();
    const isPlayerDead = checkPlayerDieInTurn();

    if (isPlayerDead) {
      isDead = true;
      playerBlock.classList.add('dead');
      playerBlock.innerHTML = 'Без сомнений, мужчина умер.';
      return;
    }

    triesLeft = triesLeft - 1;
    triesBlock.innerHTML = triesLeft;
  })
}

createPlayer(1, 'Андрей Л');
createPlayer(2, 'Андрей В');
createPlayer(3, 'Артем');




