const boards = [];
const usedNumbers = new Set();
let playerCount = 1;

function novoSorteio() {
  if (usedNumbers.size === 75) {
    alert("Todos os números foram sorteados!");
    return;
  }

  let newNumber;
  do {
    newNumber = gerarNumero(1, 75);
  } while (usedNumbers.has(newNumber));

  usedNumbers.add(newNumber);
  marcarNumero(newNumber);
  exibirNumeroSorteado(newNumber);

  if (usedNumbers.size === 75) {
    alert("Todos os números foram sorteados!");
  }
}
function exibirNumeroSorteado(numero) {
  const numeroSorteadoElement = document.getElementById('numero-sorteado');
  numeroSorteadoElement.innerText = numero;
}
function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function marcarNumero(numero) {
  const numberElements = document.querySelectorAll('.card .number');
  numberElements.forEach(element => {
    if (element.innerText === numero.toString()) {
      element.classList.add('marked');
    }
  });
}

function gerarCartela() {
  const cardNumbers = [];
  while (cardNumbers.length < 25) {
    const num = gerarNumero(1, 75);
    if (!cardNumbers.includes(num)) {
      cardNumbers.push(num);
    }
  }
  return cardNumbers;
}

function criarCartela() {
  const card = document.createElement('div');
  card.classList.add('card');

  const numbers = gerarCartela();

  const numbersContainer = document.createElement('div');
  numbersContainer.classList.add('numbers');

  numbers.forEach(num => {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.innerText = num;
    numbersContainer.appendChild(numberDiv);
  });

  card.appendChild(numbersContainer);
  return card;
}

function criarTabuleiro() {
  const bingoBoard = document.getElementById('bingo-board');
  for (let i = 0; i < playerCount; i++) {
    const card = criarCartela();
    boards.push(card);
    bingoBoard.appendChild(card);
  }
}

function iniciarJogo() {
  const input = document.getElementById('player-count');
  playerCount = parseInt(input.value, 10);
  if (playerCount >= 1 && playerCount <= 5) {
    const bingoBoard = document.getElementById('bingo-board');
    bingoBoard.innerHTML = '';
    boards.length = 0;
    usedNumbers.clear();
    criarTabuleiro();
  } else {
    alert('Escolha um número de jogadores válido (1 a 5).');
  }
}
