const cartelas = [];
const numerosSorteados = new Set();
const letras = ['B', 'I', 'N', 'G', 'O'];

function gerarCartela() {
  const nome = prompt('Digite seu nome:');
  const numeros = [];
  let start = 1;
  
  const cartelaDiv = document.createElement('div');
  cartelaDiv.classList.add('cartela');
  
  const h2 = document.createElement('h2');
  h2.textContent = `${nome}'s Cartela`;
  cartelaDiv.appendChild(h2);
  
  const bingoDiv = document.createElement('div');
  bingoDiv.classList.add('bingo');
  bingoDiv.textContent = 'B';
  cartelaDiv.appendChild(bingoDiv);
  
  bingoDiv.classList.add('bingo');
  bingoDiv.textContent = 'I';
  cartelaDiv.appendChild(bingoDiv);
  
  bingoDiv.classList.add('bingo');
  bingoDiv.textContent = 'N';
  cartelaDiv.appendChild(bingoDiv);
  
  bingoDiv.classList.add('bingo');
  bingoDiv.textContent = 'G';
  cartelaDiv.appendChild(bingoDiv);
  
  bingoDiv.classList.add('bingo');
  bingoDiv.textContent = 'O';
  cartelaDiv.appendChild(bingoDiv);
  
  for (let i = 0; i < 5; i++) {
    const colunaDiv = document.createElement('div');
    colunaDiv.classList.add('coluna');
    
    for (let j = 0; j < 5; j++) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('celula');
      
      if (i === 2 && j === 2) {
        cellDiv.textContent = 'FREE';
      } else {
        let num;
        do {
          num = Math.floor(Math.random() * 15) + start;
        } while (numeros.includes(num));
        numeros.push(num);
        cellDiv.textContent = num;
        cellDiv.id = letras[j] + num;
      }
      
      colunaDiv.appendChild(cellDiv);
    }
    
    cartelaDiv.appendChild(colunaDiv);
    start += 15;
  }
  
  document.getElementById('cartelas').appendChild(cartelaDiv);
}

function sortearNumero() {
  let numero;
  do {
    numero = Math.floor(Math.random() * 75) + 1;
  } while (numerosSorteados.has(numero));

  const sorteioP = document.createElement('p');
  sorteioP.textContent = `Número sorteado: ${numero}`;
  
  const historico = document.getElementById('sorteio');
  if (historico.childElementCount >= 5) {
    historico.removeChild(historico.firstChild); // Remove o mais antigo do histórico
  }
  
  historico.appendChild(sorteioP);

  for (let i = 0; i < letras.length; i++) {
    const cellId = document.getElementById(`${letras[i]}${numero}`);
    if (cellId) {
      cellId.classList.add('sorteado');
    }
  }

  numerosSorteados.add(numero);
  verificarVencedores(numero);
}

function verificarVencedores(numero) {
  // Lógica para verificar os vencedores
}

function iniciarJogo() {
  const iniciarBotao = document.getElementById('iniciarJogo');
  iniciarBotao.style.display = 'none';
}
